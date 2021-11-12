/*
 * @Author: your name
 * @Date: 2021-11-03 17:57:24
 * @LastEditTime: 2021-11-12 18:12:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\webpack5\webpack.config.js
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /.(png|jpg|gif|jpeg)$/,
      use: ['file-loader']
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      }]
    }]
  },
  mode: 'production',
  plugins: [
    new VueLoaderPlugin()
  ]
}