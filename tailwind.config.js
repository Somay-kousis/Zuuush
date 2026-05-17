/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fbfafc', // soft lavender-tinted white
        surface: '#ffffff',
        surfaceGlass: 'rgba(255, 255, 255, 0.7)',
        primary: {
          50: '#f8f5fa',
          100: '#f0eaf5',
          200: '#e1d5ec',
          300: '#cbb6de',
          400: '#af8ecc',
          500: '#9568b8', // core lavender
          600: '#7e4d9f',
          700: '#683d83',
          800: '#58356d',
          900: '#492f59',
        },
        accent: {
          light: '#e0c3fc',
          DEFAULT: '#c7d2fe', // soft periwinkle/lavender
          dark: '#a78bfa',
        },
        secondary: {
          light: '#f3e7fa',
          DEFAULT: '#f5d0fe', // soft pinkish lavender
          dark: '#e879f9',
        },
        textPrimary: '#2d2a32',
        textSecondary: '#716b77',
        textMuted: '#a39da8'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px -10px rgba(0,0,0,0.04)',
        'deep': '0 20px 40px -15px rgba(0,0,0,0.06)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.03)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
      animation: {
        'breath': 'breath 12s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.08)', opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
