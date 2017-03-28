const webpack = require('webpack')
const path = require('path')
const Logger = require('logplease')

const {
  DEV_PORT,
  rootPath,
  srcPath,
  buildPath,
  nodeModulesPath,
} = require('../Constants')

const logger = Logger.create('webpack', {
  color: Logger.Colors.Magenta,
  showTimestamp: false,
})

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
  DEV_PORT,
  DEV_SERVER: `http://localhost:${DEV_PORT}/`,
  logger,
  resolve,
  entry: './src/app/index',
  rootPath,
  buildPath,
  srcPath,
  nodeModulesPath,
}
