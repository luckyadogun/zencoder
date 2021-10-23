module.exports = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'theme-dark': '#0D0E10',
          'theme-secondary': '#8B8B8B',
          'theme-tertiary': '#EF8236',
          'theme-cta': '#E5E5E5',
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