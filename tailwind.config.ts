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
        // 3DC Brain Primary Colors (per Archibald's design system)
        navy: '#0F1419',
        charcoal: '#1A1F2E',
        'blue-primary': '#0D47A1',
        cyan: '#00D4FF',
        
        // Secondary colors
        'success-green': '#10B981',
        'warning-orange': '#F59E0B',
        'error-red': '#EF4444',
        
        // Neutrals (extended gray palette)
        white: '#FFFFFF',
        gray: {
          50: '#F3F4F6',
          100: '#E5E7EB',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#6B7280',
          500: '#4B5563',
          600: '#374151',
          700: '#1F2937',
          800: '#111827',
          900: '#030712',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          'Courier New',
          'Monaco',
          'monospace',
        ],
      },
      fontSize: {
        // Heading scale (per design system)
        'h1': ['3.5rem', { lineHeight: '1.2', fontWeight: '800', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h3': ['1.75rem', { lineHeight: '1.4', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600', letterSpacing: '0' }],
        'h5': ['1rem', { lineHeight: '1.6', fontWeight: '600', letterSpacing: '-0.01em' }],
        // Body scale
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '-0.01em' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '-0.01em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.01em' }],
        'button': ['1rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0' }],
      },
      spacing: {
        // 8px baseline grid
        'xs': '0.5rem',     // 4px (rare)
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '2.5rem',    // 40px
        '3xl': '3rem',      // 48px
        '4xl': '3.5rem',    // 56px
        '5xl': '4rem',      // 64px
        '6xl': '5rem',      // 80px
        '7xl': '6rem',      // 96px
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '50%',
      },
      boxShadow: {
        // Elevation hierarchy
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.2)',
        'elevation-2': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'elevation-3': '0 8px 24px rgba(0, 0, 0, 0.3)',
        'elevation-4': '0 16px 40px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 0 3px rgba(0, 212, 255, 0.2)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-navy-charcoal': 'linear-gradient(135deg, #0F1419 0%, #1A1F2E 100%)',
        'gradient-navy-cyan': 'linear-gradient(135deg, #0F1419 0%, #00D4FF 100%)',
        'gradient-charcoal-navy': 'linear-gradient(90deg, #0F1419 0%, #1A1F2E 100%)',
        'gradient-blue-cyan': 'linear-gradient(135deg, #0D47A1 0%, #00D4FF 100%)',
        'gradient-navy-to-charcoal-180': 'linear-gradient(180deg, #0F1419 0%, #0A0D12 100%)',
      },
      backdropFilter: {
        'blur': 'blur(10px)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
};
export default config;
