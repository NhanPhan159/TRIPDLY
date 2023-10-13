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
      }
    },
  },
  plugins: [],
}

