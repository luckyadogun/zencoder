module.exports = {
    theme: {
      extend: {
        colors: {
          'theme-primary': '#0000FF',
          'theme-secondary': '#FF0000',
          'theme-tertiary': '#EDF2F8',
          'theme-links': '#A1A1D0'
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