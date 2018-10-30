const { resolve } = require('path');

module.exports = {
  test: /\.(ts|tsx)$/,
  enforce: 'pre',
  use: [
    {
      loader: 'tslint-loader',
      options: { configFile: resolve(__dirname, '..', '..', 'tslint.json') }
    }
  ]
}