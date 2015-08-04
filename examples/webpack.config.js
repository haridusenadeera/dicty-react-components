/*
 * Webpack development configuration
 *
 */

'use strict';
var fs = require('fs');
var path = require('path');
var examples_dir = path.resolve(__dirname);

function buildEntries(dir) {
    var entries = {};
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
  devtool: 'source-map',
  cache: true,
  entry: buildEntries(examples_dir),
  output: {
    filename: '[name].js',
    path: './build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
        'dicty-react-components': '../../src/index'
    }
  },
  module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel?stage=0'
        }
    ]
  }
};
