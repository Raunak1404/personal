/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cosmic: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        stellar: {
          50: '#fef7ee',
          100: '#fdedd3',
          200: '#fbd6a5',
          300: '#f8b66d',
          400: '#f58932',
          500: '#f2680b',
          600: '#e35006',
          700: '#bc3908',
          800: '#952d0e',
          900: '#78250f',
        },
        nebula: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6d28d9',
          900: '#581c87',
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0c0c0c 100%)',
        'stellar-gradient': 'linear-gradient(135deg, #ffaa40 0%, #9c40ff 50%, #ffaa40 100%)',
        'nebula-gradient': 'linear-gradient(135deg, #9c40ff 0%, #4299e1 50%, #9c40ff 100%)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(156, 64, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(156, 64, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};