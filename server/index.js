import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Read site config for webhook URLs
const siteConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/config/site_config.json'), 'utf-8')
);

// Leads endpoint - forwards to main webhook
app.post('/api/leads', async (req, res) => {
  const leadData = req.body;

  try {
    // Use the main webhook URL from config
    const webhookUrl = siteConfig.webhooks.mainLeads;

    if (!webhookUrl || webhookUrl.includes('XXXXX')) {
      console.warn('Webhook URL not configured properly');
      // In development, just log and return success
      console.log('Lead data (dev mode):', leadData);
      return res.json({ success: true, message: 'Lead submitted successfully (dev mode)' });
    }

    // Forward to webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error('Webhook request failed');
    }

    const result = await response.json().catch(() => ({}));

    res.json({ success: true, message: 'Lead submitted successfully', data: result });
  } catch (error) {
    console.error('Webhook error:', error);
    // Log the lead data even if webhook fails
    console.log('Failed lead data:', leadData);
    res.status(500).json({ error: 'Failed to submit lead' });
  }
});

// Legacy webhook endpoint (keep for backward compatibility)
app.post('/api/webhook', async (req, res) => {
  const { lead_type, ...leadData } = req.body;

  try {
    // Use main webhook
    const webhookUrl = siteConfig.webhooks.mainLeads;

    if (!webhookUrl || webhookUrl.includes('XXXXX')) {
      console.warn('Webhook URL not configured properly');
      console.log('Lead data (dev mode):', { ...leadData, lead_type });
      return res.json({ success: true, message: 'Lead submitted successfully (dev mode)' });
    }

    // Forward to webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...leadData, lead_type }),
    });

    if (!response.ok) {
      throw new Error('Webhook request failed');
    }

    res.json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Failed to submit lead' });
  }
});

// Serve React app - catch all other routes
app.use((req, res) => {
  const indexPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ error: 'Application not built. Run npm run build first.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
