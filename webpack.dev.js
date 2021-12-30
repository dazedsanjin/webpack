/*
 * @Author: your name
 * @Date: 2021-11-15 09:50:44
 * @LastEditTime: 2021-12-30 17:49:23
 * @LastEditors: Please set LastEditors
 * @FilePath: \webpack\webpack5\webpack.dev.js
 */
const webpackMerge = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')

const developmentConfiguration = {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    open: true
  }
}

module.exports = webpackMerge.merge(commonConfiguration, developmentConfiguration)
