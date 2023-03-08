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
        primary2:{
          500:'#FECACA'
        },
        primary:{
          500:'#A14647'
        },
        secondary:{
          500:'#503963'
        },
      }
    },
  },
  plugins: [],
}
