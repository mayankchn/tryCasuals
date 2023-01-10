/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        200: '#fc6f6f',
        500: '#ff5151',
        900: '#fd1515'
      },
      'secondary':{
        200:'rgb(245,246,247)',
        500:'rgb(65,81,97)'
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    }
  },
  plugins: [],
}
