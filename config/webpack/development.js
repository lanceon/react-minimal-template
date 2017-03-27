const webpack = require('webpack')
const path = require('path')
const {
  resolve,
  entry,
  srcPath,
  nodeModulesPath,
  DEV_SERVER,
} = require('./shared')

const PUBLIC_PATH = '/'
const DEV_BUILD = path.resolve(__dirname, 'build', 'dev')

module.exports = {
  resolve,
  entry: [
    `webpack-dev-server/client?${DEV_SERVER}`,
    'webpack/hot/only-dev-server',
    entry,
  ],
  output: {
    publicPath: PUBLIC_PATH,
    filename: 'app.js',
    path: DEV_BUILD,
  },
  devServer: {
    contentBase: srcPath,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    hot: true,
    historyApiFallback: true,
    publicPath: PUBLIC_PATH,
  },
  devtool: 'source-eval',
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
    // new webpack.NoErrorsPlugin(),
  ],
};
