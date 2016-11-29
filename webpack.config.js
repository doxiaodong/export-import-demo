const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // devtool: 'eval',
  // prod
  devtool: 'source-map',
  entry: {
    'main': './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    // prod
    new webpack.optimize.UglifyJsPlugin({
      beautify: false, // prod

      mangle: {
        screw_ie8: true
      }, // prod
      compress: {
        warnings: false,
        screw_ie8: true
      }, // prod
      comments: false // prod
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        minifyCSS: true,
        collapseWhitespace: true,
        removeComments: true
      },
      chunksSortMode: 'dependency'
    })
  ],
  devServer: {
    port: 8989,
    host: '0.0.0.0',
    historyApiFallback: true
  }

}
