const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {
  resolve,
  entry,
  srcPath,
  buildPath,
  nodeModulesPath,
} = require('./shared')

const PUBLIC_PATH = '/'

module.exports = {
  resolve,
  entry,
  output: {
    path: buildPath,
    filename: 'app.js',
    publicPath: PUBLIC_PATH,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: nodeModulesPath,
        use: ['eslint-loader'],
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(srcPath),
        ],
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(html|txt|png|jpe?g)/,
        use: ['file-loader'],
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
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false,
      allChunks: true,
    }),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        dead_code: true,
        unused: true,
        evaluate: true,
      },
      com

      ments: false,
    }),*/
  ],
}
