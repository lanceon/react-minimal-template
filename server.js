module.exports = {
  devServer: {
    historyApiFallback: true,
    open: true,
    contentBase: 'build',
    stats: {
      colors: true,
    },
    port: 8080,
    noInfo: false,
  },
}
