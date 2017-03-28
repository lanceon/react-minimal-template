const webpack = require('webpack')
const {
  DEV_SERVER,
  DEV_PORT,
  logger,
  resolve,
  entry,
  srcPath,
  nodeModulesPath,
} = require('./shared')
const path = require('path')

const PUBLIC_PATH = '/'
const DEV_BUILD = path.resolve(__dirname, 'build', 'dev')

logger.info(`Dev server: ${DEV_SERVER}`)

module.exports = {
  resolve,
  entry: [
    `webpack-dev-server/client?${DEV_SERVER}`,
    'webpack/hot/only-dev-server',
    entry,
  ],
  output: {
    path: DEV_BUILD,
    publicPath: PUBLIC_PATH,
    filename: 'app.js',
  },
  devServer: {
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    noInfo: false,
    contentBase: srcPath,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    hot: true,
    port: DEV_PORT,
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
