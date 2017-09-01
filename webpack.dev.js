const webpack = require('webpack')
const path = require('path')

const DEV_SERVER = 'http://localhost:8080/'
const PUBLIC_PATH = '/'
const DEV_BUILD = path.resolve(__dirname, 'build', 'dev')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  entry: [
    `webpack-dev-server/client?${DEV_SERVER}`,
    'webpack/hot/only-dev-server',
    './src/app/index.jsx',
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
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(html|txt|png|jpe?g)/,
        use: [
          { loader: 'file-loader' },
        ],
      },
    ],
  },
  plugins: [],
}
