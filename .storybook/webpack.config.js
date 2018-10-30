const { resolve } = require('path');

// As of the time, Tuesday 9:20 AM 10/30/2018
// There is an issue with install storybook and webpack through npm, (https://github.com/storybooks/storybook/issues/3044)
// Therefore the package manager has been changed to yarn

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
        exclude: /node_modules/,
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