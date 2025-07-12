// postcss.config.js  (in your project root, NOT in src/app)
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},   // this is the new Tailwind→PostCSS plugin
    autoprefixer: {},
  },
}
