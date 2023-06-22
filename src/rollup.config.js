const { terser } = require('rollup-plugin-terser')
const banner = require('./banner.js')

module.exports = {
  input: 'src/main.js',
  output: {
    banner,
    name: 'utils',
    file: 'utils.js',
    format: 'umd'
  },
  plugins: [terser()]
}
