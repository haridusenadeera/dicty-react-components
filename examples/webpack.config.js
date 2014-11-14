/*
 * Webpack development configuration
 *
 */

'use strict';
var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var examples_dir = path.resolve(__dirname);
function buildEntries(dir) {
    var entries = {}
    fs.readdirSync(dir).forEach(function(entry) {
        if (fs.lstatSync(entry).isDirectory()) {
            if (entry != 'build') {
                entries[entry] = path.join(dir, entry, 'app.jsx');
            }
        }
    });
    return entries;
}

module.exports = {
  output: {
    filename: '[name].js',
    path: './build'
  },
  entry: buildEntries(examples_dir),
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
        jquery: 'jquery/dist/jquery.js',
        'dicty-react-components': '../../src/index'
    }
  },
  module: {
        loaders: [{
          test: /\.jsx$/,
          loader: 'jsx-loader?harmony'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }, {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192'
        },
        { test: /\.woff$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf$/,    loader: "file-loader" },
        { test: /\.eot$/,    loader: "file-loader" },
        { test: /\.svg$/,    loader: "file-loader" }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin(
        {
            jQuery: "jquery"
        }
    )
  ]
};
