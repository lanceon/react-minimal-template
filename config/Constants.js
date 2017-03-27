const path = require('path')

const rootPath = path.resolve(__dirname, '..')
const srcPath = path.resolve(rootPath, 'src')
const buildPath = path.resolve(rootPath, 'build')
const nodeModulesPath = path.resolve(__dirname, '..', 'node_modules')
const entry = path.resolve(srcPath, 'app', 'index.jsx')

console.log('Project root: [%s]', rootPath);

module.exports = {
  DEV_PORT: 8080,
  rootPath,
  srcPath,
  buildPath,
  nodeModulesPath,
  entry,
}
