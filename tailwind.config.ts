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
        // Brand Colors
        'navy': {
          50: '#f8f9fa',
          100: '#eef1f5',
          200: '#d9dfe8',
          300: '#c5ccdb',
          400: '#9db0c1',
          500: '#7493a7',
          600: '#4a6b82',
          700: '#0F2B4F', // Primary
          800: '#0a1e37',
          900: '#061428',
        },
        'teal': {
          50: '#f0f9fb',
          100: '#dff2f5',
          200: '#b8dfe6',
          300: '#90cdd6',
          400: '#4ea9b8',
          500: '#2d8a9a',
          600: '#1B7E8C', // Primary
          700: '#156b78',
          800: '#0f5564',
          900: '#0a3d47',
        },
        'gold': {
          50: '#fefbf3',
          100: '#fef5e6',
          200: '#fde8c4',
          300: '#fddba1',
          400: '#fcc05a',
          500: '#fba500',
          600: '#D4AF37', // Primary (Metallic)
          700: '#b8860b', // Secondary (Bronze)
          800: '#8b6914',
          900: '#5e4a0d',
        },
        'ivory': '#F8F7F2',
        'cream': '#FAF8F3',
        'charcoal': '#2a2a2a',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Cinzel', 'Cormorant Garamond', 'serif'],
        'display': ['Playfair Display', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'Manrope', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
        '6xl': ['60px', { lineHeight: '68px' }],
        '7xl': ['72px', { lineHeight: '80px' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-down': 'fadeDown 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      boxShadow: {
        'lg-luxury': '0 25px 50px -12px rgba(15, 43, 79, 0.15)',
        'xl-luxury': '0 40px 80px -20px rgba(15, 43, 79, 0.2)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'elevation': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #0F2B4F 0%, #1B7E8C 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F2B4F 0%, #061428 100%)',
        'radial-gold': 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [],
};

export default config;
