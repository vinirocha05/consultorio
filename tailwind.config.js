module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '80vh': '80vh',
        '68vh': '68vh',

      }
    },
    fontFamily:{
      sans: ['Source Sans Pro', 'sans-serif'],
      heading: ['Source Sans Pro', 'sans-serif'],

    }
  },
  plugins: [],
}