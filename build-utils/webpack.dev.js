const commonPaths = require('./common-paths')

const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    open: true,
    proxy: {
      '/api': 'http://127.0.0.1:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              sourceMap: true,
            }
          }
        ]
      }
    ]
  }
}
