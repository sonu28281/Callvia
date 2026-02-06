export const defaultTheme = {
  colors: {
    // Premium Dark Base
    primary: '#070A12',
    primaryLight: '#0B1220',
    primaryDark: '#040508',
    // Saffron Accent (use sparingly - CTAs only)
    accent: '#FF9F1C',
    accentSoft: '#FFE2B8',
    accentHover: '#E68F19',
    // Surface & Cards
    surface: '#0F1B33',
    surfaceHover: '#152140',
    // Borders & Dividers
    border: '#223055',
    borderLight: '#2A3A5F',
    borderSubtle: '#1A2847',
    // Text System
    text: '#EAF0FF',
    textMuted: '#A7B3CE',
    textDim: '#7A8AA8',
    // Status Colors (muted for premium feel)
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    // Legacy (deprecated - use new system)
    secondary: '#FF9F1C',
    background: '#070A12',
    backgroundAlt: '#0F1B33',
    backgroundDim: '#0B1220',
    divider: '#223055',
  },
  fonts: {
    family: {
      heading: 'Sora, system-ui, -apple-system, sans-serif',
      base: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'JetBrains Mono, Menlo, Monaco, monospace',
    },
    size: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '40px',
      '5xl': '56px',
      '6xl': '64px',
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.01em',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  radii: {
    sm: '6px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    full: '9999px',
  },
  shadows: {
    // Subtle professional shadows
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
    md: '0 2px 8px 0 rgba(0, 0, 0, 0.4)',
    lg: '0 4px 16px 0 rgba(0, 0, 0, 0.5)',
    xl: '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
    // Card shadows on dark backgrounds
    card: '0 2px 8px 0 rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(34, 48, 85, 0.5)',
    cardHover: '0 4px 16px 0 rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(34, 48, 85, 0.8)',
  },
  transitions: {
    // Micro-interactions only
    fast: '150ms ease-out',
    base: '200ms ease-out',
    slow: '250ms ease-out',
  },
};

export const corporateTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#1E40AF',
    secondary: '#7C3AED',
  },
};
