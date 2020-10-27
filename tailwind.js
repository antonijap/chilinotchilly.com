module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      mustard: '#FFD700',
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
