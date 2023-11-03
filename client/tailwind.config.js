/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "login":"#84B3ED"
      },
      spacing: {
        '12/100': '12%',
        "88/100": '87%'
      },
      fontFamily: {
        'Poppins': ['Roboto Condensed', 'sans-serif']
      },
      animation: {
        'moving-left': 'back_moving 1s ease infinite',
        'moving-right': 'next_moving 1s ease infinite'
      },
      keyframes: {
        back_moving: {
          '0%': {transform: 'translateX(-30%)'},
          '50%': { transform: "translateX(0)"},
          '100%': {transform: 'translateX(-30%)'},
        },
        next_moving: {
          '0%': {transform: 'translateX(30%)'},
          '50%': { transform: "translateX(0)"},
          '100%': {transform: 'translateX(30%)'},
        }
      },
      maxWidth: {
        '2/3': '66%',
        '9/10': '90%',
      }

    },
  },
  plugins: [],
}

