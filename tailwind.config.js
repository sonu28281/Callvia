/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        'primary-light': '#1565A0',
        'primary-dark': '#0A3557',
        secondary: '#E07A1F',
      },
      animation: {
        wave: 'waveFlow 8s ease-in-out infinite',
      },
      keyframes: {
        waveFlow: {
          '0%': { transform: 'translateX(0%) translateY(0%)', opacity: '0.7' },
          '25%': { transform: 'translateX(-1%) translateY(1%)', opacity: '0.75' },
          '50%': { transform: 'translateX(0%) translateY(2%)', opacity: '0.8' },
          '75%': { transform: 'translateX(1%) translateY(1%)', opacity: '0.75' },
          '100%': { transform: 'translateX(0%) translateY(0%)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
