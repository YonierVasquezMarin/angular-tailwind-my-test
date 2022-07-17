/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#00bcd4',
        'primary-hover': '#00acc2',
      },
      fontFamily: {
        'myFont': ['Roboto', 'sans-serif'],
        'eduvic': ['sans', 'Edu VIC WA NT Beginner']
      }
    },
  },
  plugins: []
}
