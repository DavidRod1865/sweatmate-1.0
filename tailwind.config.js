module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./views/*.ejs",
    "./views/partials/*.ejs",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: require('@tailwindcss/forms'),
}