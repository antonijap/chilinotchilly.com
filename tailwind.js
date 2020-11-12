module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    },
    textColor: {
      'primary': '#050505',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'chili-green': '#3BB869'
    },
    colors: {
      mustard: '#FAEED6',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'xmd': '1.5rem',
      'md': '2rem',
      'xlg': '3rem',
      'lg': '4rem',
      'xl': '6rem',
      'xxl': '10rem',
    },
    container: {
      center: true,
    },
    extend: {
      width: {
        'prose': '1140px',
      },
      screens: {
        'mobile': [ {'max': '640px'} ]
      }
    },
  },
  variants: {}
}
