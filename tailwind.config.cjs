/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans':['Poppins',],
      'popins':['Poppins']
    },
    extend: {
      colors:{
        primary:{
          
          100:'#FECACA',
          400:'#A14111',
          500:'#A14647',
        },
        secondary:{
          500:'#503963'
        },
      },
      animation:{
        text: 'text 5s ease infinite',
      }
    },
    keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
  },
  plugins: [],
}
