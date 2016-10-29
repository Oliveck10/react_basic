var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/main',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 3333,
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel'],
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
    }],
  },

};
