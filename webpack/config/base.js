const { resolve } = require('path');

const baseConfig = {
  output: {
    path: resolve(__dirname, '..', '..', 'build'),
    filename: 'bundle.js',
    publicPath: resolve(__dirname, '..', '..', 'build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },
  module: { rules: require('../loaders') },
}

module.exports = {
  baseConfig
}