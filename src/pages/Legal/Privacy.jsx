import React from 'react';
import { activeTheme } from '../../themes/index.js';

export function PrivacyPage() {
  return (
    <div style={{ padding: `${activeTheme.spacing['3xl']} ${activeTheme.spacing.lg}` }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: activeTheme.fonts.size['3xl'],
            fontWeight: activeTheme.fonts.weight.bold,
            color: activeTheme.colors.text,
            marginBottom: activeTheme.spacing.lg,
            fontFamily: activeTheme.fonts.family.base,
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontSize: activeTheme.fonts.size.base,
            color: activeTheme.colors.textMuted,
            fontFamily: activeTheme.fonts.family.base,
          }}
        >
          Privacy Policy content coming soon. For questions, contact support@callvia.in
        </p>
      </div>
    </div>
  );
}

export default PrivacyPage;
