const { resolve } = require('path');

module.exports = {
  test: /\.tsx?$/,
  enforce: 'pre',
  use: [
    {
      loader: 'tslint-loader',
      options: { configFile: resolve(__dirname, '..', '..', 'tslint.json') }
    }
  ]
}