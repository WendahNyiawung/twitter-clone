module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      'sm': { 'min': '320px', 'max': '640px' },
      'md': { 'min': '641px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px' }
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
