import terser from '@rollup/plugin-terser'
import banner from './banner.mjs'

export default {
  input: 'src/utils.mjs',
  output: {
    banner,
    name: 'utils',
    file: 'utils.js',
    format: 'umd',
  },
  plugins: [
    terser({
      mangle: false,
    }),
  ],
}
