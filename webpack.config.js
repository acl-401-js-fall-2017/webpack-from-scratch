const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js'
  },
  devServer: {
    contentBase: `${__dirname}/build`
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HTMLPlugin({ template: `${__dirname}/src/index.html`})
  ],
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test:/\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader']),
      }
    ]
  }
}