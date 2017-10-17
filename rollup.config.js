import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import saveLicense from 'uglify-save-license'
import pkg from './package.json'

const dist = process.env.NODE_ENV === 'production' ? pkg.uglify : pkg.main

let plugins = [babel({
  runtimeHelpers: true,
  exclude: 'node_modules/**'
})]

if(process.env.NODE_ENV === 'production'){
  plugins.push(uglify({
    output: {
      comments: saveLicense
    }
  }))
}

export default {
  input: 'src/main.js',
  output: [{
    file: dist,
    format: 'umd',
    indent: true
  },{
    file: 'demo/use_browser.js',
    format: 'umd',
    indent: true
  }],
  name: 'UseBrowser',
  strict: true,
  sourceMap: false,
  banner: `/*!
${pkg.title} v${pkg.version}
${pkg.description}

Copyright (c) 2017 ${pkg.author}
License: ${pkg.license}

${pkg.homepage}
*/`,
  watch: {
    includes: 'src/*'
  },
  plugins: plugins
}
