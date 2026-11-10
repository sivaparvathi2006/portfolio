/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFF8FD',
        surface: '#FFFFFF',
        'surface-secondary': '#FAF0FA',
        orchid: '#F2DDF8',
        lavender: '#E4D4FA',
        blush: '#F8D5E8',
        'sky-blue': '#D2E8FF',
        mint: '#C7EDE3',
        primary: '#B68AD9',
        'secondary-accent': '#D68EB5',
        'text-primary': '#30243F',
        'text-secondary': '#70667B',
        border: '#E8DCEE',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(182, 138, 217, 0.20)',
        'soft-lg': '0 12px 40px -12px rgba(182, 138, 217, 0.28)',
        'glow-lavender': '0 0 0 1px rgba(228, 212, 250, 0.7), 0 8px 30px -6px rgba(182, 138, 217, 0.4)',
        'glow-rose': '0 0 0 1px rgba(248, 213, 232, 0.7), 0 8px 30px -6px rgba(214, 142, 181, 0.4)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(8px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(6deg)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-slower': 'float-slower 12s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'shimmer': 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
