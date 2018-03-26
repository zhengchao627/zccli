const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HashOutput = require('webpack-plugin-hash-output');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlAfterWebpackPlugin = require('./htmlAfterWebpackPlugin.js');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 4 });
module.exports = {
  entry: {
    'index': './src/webapp/assets/js/index.js'
  },
  output: {
    filename: 'js/[name].[hash:5].js'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader"
        }]
      })
    }]
  },
  plugins: [
    new HashOutput(),
    new HtmlWebpackPlugin({
      template: './src/webapp/views/index.html',
      filename: 'index.html', 
      inject: false
    }),
    new ExtractTextPlugin('css/[name].[hash:5].css'),
    new htmlAfterWebpackPlugin(),
    new HappyPack({
      id: 'css',
      loaders: ['css-loader', 'style-loader'],
      threadPool: happyThreadPool
    })
  ]
}