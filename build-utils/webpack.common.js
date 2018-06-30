const commonPaths = require('./common-paths')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: commonPaths.outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:  ['babel-loader'],
      },
      {
        test: /\.(svg|png|eot|woff|woff2|ttf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      facivon: 'public/favicon.ico',
    })
  ]
}
