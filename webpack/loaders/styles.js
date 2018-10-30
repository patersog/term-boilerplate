const { resolve } = require('path');

module.exports = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ],
  include: [
    resolve(__dirname, '..', '..', 'app/client/src'),
    resolve(__dirname, '..', '..', 'app/client/src/components'),
    resolve(__dirname, '..', '..', 'app/client/src/styles')
  ]
}