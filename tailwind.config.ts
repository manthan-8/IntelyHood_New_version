import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#00E7FF',
          light: '#88f3ffff',
          dark: '#00c7ddff',
        },
        secondary: {
          default: '#9931EF',
          light: '#ab63e6ff',
          dark: '#7D1B91',
        },
        muted: {
          default: '#4A5565',
          dark: '#101828',
          light: '#1E2939',
        },
        border: {
          default: '#45404A',
          light: '#ffffffff'
        },
        text: {
          default: '#07000E',
          light: '#fbecffff',
          dark: '#101828',
          inverse: '#ffffff',
        },
        accent: '#f59e0b',
        error: '#ef4444',
        success: '#22c55e',
        warning: '#f97316',
      },
      backgroundImage: {
        'background-inverse': 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(26,11,46,0.6))',
        'background-dark': 'linear-gradient(to bottom right, #59136A, #1F0529, #59136A)',
        'background-light': 'linear-gradient(to bottom, #f1bcffff, #fbecffff, #f1bcffff)',
      },
    },
  },
  plugins: [],
};

export default config;