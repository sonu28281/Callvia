import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Read site config for webhook URLs
const siteConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/config/site_config.json'), 'utf-8')
);

// Webhook endpoint
app.post('/api/webhook', async (req, res) => {
  const { lead_type, ...leadData } = req.body;

  try {
    // Determine webhook URL based on lead type
    let webhookUrl;
    switch (lead_type) {
      case 'callflo-suite':
        webhookUrl = siteConfig.webhooks.callFloSuiteLeads;
        break;
      case 'ai-receptionist':
        webhookUrl = siteConfig.webhooks.aiReceptionistLeads;
        break;
      case 'partners':
        webhookUrl = siteConfig.webhooks.partnersLeads;
        break;
      default:
        return res.status(400).json({ error: 'Invalid lead type' });
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

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
