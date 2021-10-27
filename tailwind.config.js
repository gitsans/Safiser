module.exports = {
  purge: [
    "./public/**/*.html"
  ],
  darkMode: true, // or 'media' or 'class'
  //changing the theme from former code
  theme: {
    extend: {
      colors: {
        safiserGreen: '#00a54f'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
