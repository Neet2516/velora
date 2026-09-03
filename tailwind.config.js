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
          navy: '#091540',
          'navy-deep': '#050c26',
          'navy-surface': '#0e1d52',
          cobalt: '#1B2CC1',
          periwinkle: '#7692FF',
          ice: '#ABD2FA',
        },
      },
      fontFamily: {
        // Elegant serif for big hero & section headings
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Modern geometric sans for body text & UI
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        // Bold display for badges & labels
        display: ['Outfit', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        // Monospace for data & code
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-velora': 'linear-gradient(135deg, #091540 0%, #1B2CC1 50%, #7692FF 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(14, 29, 82, 0.75) 0%, rgba(9, 21, 64, 0.55) 100%)',
      },
      boxShadow: {
        'card-lux': '0 10px 40px -10px rgba(5, 12, 38, 0.7), 0 0 1px 1px rgba(118, 146, 255, 0.15)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
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
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
      },
    },
  },
  plugins: [],
};
