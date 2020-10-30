module.exports = {
    theme: {
      extend: {
        colors: {
          'theme-primary': '#0000FF',
          'theme-secondary': '#284268',
          'theme-tertiary': '#C0DFED'
        }
      }
    },
    variants: {},
    plugins: [],
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js'
      ]
    }
  }