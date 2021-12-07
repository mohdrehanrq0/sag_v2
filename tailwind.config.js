const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'default': '#111827',
        'default-light': '#0E1421',
        'text': '#36d7f0',
        'text-light': '#65e0f3',
      },
      keyframes: {
        roll: { 
            '0%, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90%, 100%': { transform: 'scale(1)'},
            '50%': { transform: 'scaleY(0)' }
          },
  
          movement: {
            '0% ': { transform: 'scale(0.7)' },
            '10%': { transform: 'scale(0.75)' },
            '30%': { transform: 'scale(0.80)' },
            '50%': { transform: 'scale(0.85)' },
            '70%': { transform: 'scale(1)' },
          }
  
        },
        animation: {
          roll: 'roll 3s infinite ',
          movement: 'movement 2s ease-in-out infinite'
        },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'] 
    },
  },
  plugins: [],
}
