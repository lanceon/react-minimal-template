const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PUBLIC_PATH = '/'

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
  },
  entry: './src/app/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
    publicPath: PUBLIC_PATH,
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loaders: ['eslint'],
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(html|txt|png|jpe?g)/,
        loaders: ['file?name=[name].[ext]'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        dead_code: true,
        unused: true,
        evaluate: true,
      },
      comments: false,
    }),
  ],
  eslint: {
    emitWarnings: true,
  },
}
