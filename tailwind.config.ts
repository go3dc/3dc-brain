import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 3DC Brain Design System
        navy: '#0F1419',
        charcoal: '#1A1F2E',
        cyan: '#00D4FF',
        // Extended palette
        'navy-light': '#1A2438',
        'charcoal-light': '#2A3142',
        'cyan-light': '#33E5FF',
        'cyan-dark': '#0095B3',
        white: '#FFFFFF',
        gray: {
          50: '#F8F9FA',
          100: '#F0F1F3',
          200: '#E0E2E7',
          300: '#D0D3DB',
          400: '#A0A6B2',
          500: '#707A8A',
          600: '#505B6F',
          700: '#3A4554',
          800: '#252B38',
          900: '#1A1F2E',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      fontSize: {
        // Heading scale
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        // Body scale
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        // 8px baseline grid
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0F1419 0%, #1A1F2E 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #00D4FF 0%, #0095B3 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
