/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins'],
        'roboto' : ['Roboto'],
      },
      colors: {
        mountainBlack: "#201630",
        mountainGreen: "#00c876",
      }
    },
  },
  plugins: [], 
}
