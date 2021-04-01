module.exports = {
  plugins: {
    tailwindcss: {
      purge: ['./src/**/*.js'],
      darkMode: 'media',
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {}
  }
}