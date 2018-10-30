const { baseConfig, devConfig, prodConfig } = require('./config')

module.exports = Object.assign(
  {},
  baseConfig,
  process.env === 'production' ? prodConfig : devConfig
);