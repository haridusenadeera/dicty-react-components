var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  cache: true,
  entry: './app.jsx',
  output: {
    path: path.join(__dirname),
    filename: './app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?stage=0'
      }
    ]
  }
};
