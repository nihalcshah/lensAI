/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: '',
  content: ["./templates/**/*.{html,htm}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('autoprefixer'),
  ],
}