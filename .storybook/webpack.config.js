const { resolve } = require('path');

// const webpack = require('../node_modules/@storybook/core/node_modules/webpack');
// this require statement for the peer dependecy is only a fix (https://github.com/storybooks/storybook/issues/3044)

/** 
 * Because the peer dependency of Storybook is different from that of our version of webpack,
 * Storybook defaults to using a 'webpack.congifg.js' for apps made with 'create-react-app',
 * therefore, we override the default with our own.
 * */

const sbConfig = {
  module: {
    rules: [
      {
        test: /\.t(s|sx)$/,
        loader: 'ts-loader',
        options: {
          configFile: resolve(__dirname, '..', 'tsconfig.json'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
}

module.exports = (config, env, defaultConfig) => {

  defaultConfig = Object.assign({}, defaultConfig, sbConfig)

  return defaultConfig;
}