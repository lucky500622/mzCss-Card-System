export default {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,    // UI设计稿宽度
      viewportUnit: 'vw',
      unitPrecision: 5,
      propList: ['*'],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}