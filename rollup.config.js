import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  dest: 'dest/use_browser.js',
  format: 'umd',
  moduleName: 'UseBrowser',
  plugins: [
    babel()
  ]
}