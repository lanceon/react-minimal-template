const webpack = require('webpack');
const path = require('path');

module.exports = {

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss'],
  },

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/app.js',
   ],

  devtool: 'eval',

  module: {

    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['eslint'],
      },
    ],

    loaders: [

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },

      {
        test: /\.(scss)$/,
        loaders: ['style', 'css'],
      },

      {
        test: /\.(html|txt|png|jpe?g)/,
        loaders: ['file'],
      },

    ],

  },

  output: {
    path: './dist',
    filename: 'app.bundle.js',
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: false },
    }),
  ],

  eslint: {
    emitWarnings: true
  }

};
