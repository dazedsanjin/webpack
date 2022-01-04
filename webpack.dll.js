/*
 * @Author: your name
 * @Date: 2022-01-04 10:02:45
 * @LastEditTime: 2022-01-04 11:27:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack\webpack5\webpack.dll.js
 */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    library: ['vue']
  },
  mode: 'production',
  output: {
    filename: '[name].dll.[hash].js',
    path: path.join(__dirname, 'dist/dll'),
    library: '[name]_dll'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.join(__dirname, 'dist/dll/[name].json')
    })
  ]
}
