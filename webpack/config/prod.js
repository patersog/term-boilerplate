const { resolve } = require('path');

const prodConfig = {
  mode: 'production',
  devtool: 'eval',
  entry: [
    resolve(__dirname, '..', '..', 'app', 'client', 'src', 'index.tsx'),
  ],
  optimization: { minimize: true },
}

module.exports = {
  prodConfig
}