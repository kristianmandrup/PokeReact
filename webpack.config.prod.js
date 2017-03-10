
'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve('app');
const DIST_PATH = path.resolve('dist');

module.exports = {
  entry : `${APP_DIR}/app.jsx`,
  output : {
    path : DIST_PATH,
    filename : 'bundle.js'
  },
  module : {
    rules : [{
      test : /\.(js|jsx)$/,
      use : 'babel-loader',
      include : APP_DIR
    }]
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env' : {
        NODE_ENV : JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({ template : path.join(APP_DIR, 'index.html'), hash : true }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
