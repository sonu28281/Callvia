/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Dark Base
        'brand-dark': '#070A12',
        'brand-dark-light': '#0B1220',
        // Saffron Accent
        'brand-accent': '#FF9F1C',
        'brand-accent-soft': '#FFE2B8',
        'brand-accent-hover': '#E68F19',
        // Surfaces
        'brand-surface': '#0F1B33',
        'brand-surface-hover': '#152140',
        // Borders
        'brand-border': '#223055',
        'brand-border-light': '#2A3A5F',
        'brand-border-subtle': '#1A2847',
        // Text
        'brand-text': '#EAF0FF',
        'brand-text-muted': '#A7B3CE',
        'brand-text-dim': '#7A8AA8',
        // Legacy support
        primary: '#FF9F1C',
        secondary: '#A7B3CE',
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      boxShadow: {
        'card': '0 2px 8px 0 rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(34, 48, 85, 0.5)',
        'card-hover': '0 4px 16px 0 rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(34, 48, 85, 0.8)',
      },
    },
  },
  plugins: [],
};
