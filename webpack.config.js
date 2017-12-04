const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js'
  },
  devServer: {
    contentBase: `${__dirname}/build`
  },
  plugins: [
    new HTMLPlugin()
  ]
}