const webpack = require('webpack');
const path = require('path');

const DEV_SERVER = 'http://localhost:8080/';
const PUBLIC_PATH = '/static/';
const DEV_BUILD = path.resolve(__dirname, 'build', 'dev');
const PROD_BUILD = path.resolve(__dirname, 'build', 'prod');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
  },
  entry: [
    `webpack-dev-server/client?${DEV_SERVER}`,
    'webpack/hot/only-dev-server',
    './src/app/index',
  ],
  output: {
    publicPath: PUBLIC_PATH,
    filename: 'app.js',
    path: DEV_BUILD,
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './src/',
    publicPath: PUBLIC_PATH,
  },
  devtool: 'source-eval',
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
        loaders: ['react-hot-loader/webpack', 'babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(html|txt|png|jpe?g)/,
        loaders: ['file'],
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
  eslint: {
    emitWarnings: true,
  },
};
