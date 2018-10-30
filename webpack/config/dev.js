const { resolve } = require('path');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    resolve(__dirname, '..', '..', 'app', 'client', 'src', 'index.tsx'),
  ],
  performance: { hints: false },
}

module.exports = {
  devConfig
}