module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#464646',
      secondary: '#4E4EE4',
      white: '#ffffff'
    },
    fontFamily: {
      button: ["Lato", 'sans-serif'],
      primary: ["IBM Plex Sans Arabic", 'sans-serif'],
    }
    ,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
