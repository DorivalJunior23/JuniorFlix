/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily:{
      poppins: ['Poppins']
    },
    extend: {
      colors:{
        'backgroundColor' :'linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%)',
        'title':' #fffcf9',
        'subtitle':'#b3b3b3',
        'button': '#e9e6e3',
      },
    },
  },
  plugins: [],
}
