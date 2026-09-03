/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velora: {
          // Color Palette: #091540 #1B2CC1 #7692FF #ABD2FA
          navy: '#091540',
          'navy-deep': '#050c26',
          'navy-surface': '#0e1d52',
          'navy-card': 'rgba(9, 21, 64, 0.72)',
          cobalt: '#1B2CC1',
          'cobalt-glow': 'rgba(27, 44, 193, 0.35)',
          periwinkle: '#7692FF',
          'periwinkle-dim': '#5271ea',
          ice: '#ABD2FA',
          'ice-dim': '#8fc2f6',
          border: 'rgba(118, 146, 255, 0.18)',
          'border-bright': 'rgba(171, 210, 250, 0.45)',
          'text-primary': '#f1f6fd',
          'text-secondary': '#9cb6db',
          'text-muted': '#6b86ab',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-velora': 'linear-gradient(135deg, #091540 0%, #1B2CC1 50%, #7692FF 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(14, 29, 82, 0.75) 0%, rgba(9, 21, 64, 0.55) 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(27, 44, 193, 0.25) 0%, rgba(118, 146, 255, 0.1) 50%, transparent 80%)',
        'gradient-text': 'linear-gradient(135deg, #ABD2FA 0%, #7692FF 50%, #1B2CC1 100%)',
        'gradient-shine': 'linear-gradient(90deg, transparent, rgba(171, 210, 250, 0.2), transparent)',
      },
      boxShadow: {
        'glow-cobalt': '0 0 25px rgba(27, 44, 193, 0.45)',
        'glow-periwinkle': '0 0 25px rgba(118, 146, 255, 0.35)',
        'glow-ice': '0 0 25px rgba(171, 210, 250, 0.4)',
        'card-lux': '0 10px 40px -10px rgba(5, 12, 38, 0.7), 0 0 1px 1px rgba(118, 146, 255, 0.15)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
