const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
const {
  logger,
  resolve,
  entry,
  rootPath,
  buildPath,
  nodeModulesPath,
} = require('./shared')

const PUBLIC_PATH = '/'

logger.info(`Build path: ${buildPath}`)

module.exports = {
  resolve,
  entry,
  output: {
    path: buildPath,
    filename: 'app.js',
    publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: nodeModulesPath,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: nodeModulesPath,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
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
        BABEL_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true,
      disable: false,
    }),
    new CleanWebpackPlugin(['build'], {
      root: rootPath,
      verbose: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
    }),
  ],
}
