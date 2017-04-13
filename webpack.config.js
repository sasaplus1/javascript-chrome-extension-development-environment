'use strict';

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  const baseConfig = {
    context: __dirname,
  };

  return [
    Object.assign({}, baseConfig, {
      entry: {
        'manifest': `${__dirname}/src/manifest.js`
      },
      module: {
        rules: [
          {
            exclude: /node_modules/,
            test: /manifest.js$/,
            use: ExtractTextPlugin.extract({
              use: [
                { loader: 'raw-loader' },
                { loader: 'val-loader' },
              ],
            }),
          },
        ],
      },
      output: {
        filename: '[name].json',
        path: `${__dirname}/ext/`,
        publicPath: './',
      },
      plugins: [
        new ExtractTextPlugin('manifest.json'),
      ],
    }),
  ];
};
