import terser from '@rollup/plugin-terser'
import banner from './banner.mjs'

export default {
  input: 'src/main.js',
  output: {
    banner,
    name: 'utils',
    file: 'utils.js',
    format: 'umd'
  },
  plugins: [terser()]
}