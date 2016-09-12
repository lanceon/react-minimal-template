const webpack = require('webpack');
const path = require('path');

module.exports = {

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {

  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
