module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    textColor: {
      'primary': '#1B2F33',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    },
    colors: {
      mustard: '#EC9F4C'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'xmd': '1.5rem',
      'md': '2rem',
      'lg': '4rem',
      'xl': '8rem',
      'xxl': '10rem',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      screens: {
        'mobile': [ {'max': '640px'} ]
      }
    },
  },
  variants: {},
  plugins: [],
}
