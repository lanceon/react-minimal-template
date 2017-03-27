const webpack = require('webpack')
const path = require('path')
const {
  srcPath,
  buildPath,
  nodeModulesPath,
  DEV_PORT,
} = require('../Constants')

const resolve = {
  extensions: [
    '.js', '.jsx', '.json', '.css', '.scss',
  ],
  modules: [
    'node_modules',
    path.resolve(srcPath),
  ],
}

module.exports = {
  resolve,
  entry: './src/app/index',
  buildPath,
  srcPath,
  nodeModulesPath,
  DEV_PORT,
  DEV_SERVER: `http://localhost:${DEV_PORT}/`,
}
