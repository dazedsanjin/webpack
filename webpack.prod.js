/*
 * @Author: your name
 * @Date: 2021-11-13 20:53:02
 * @LastEditTime: 2022-01-02 17:39:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
 * @FilePath: \webpack\webpack5\webpack.prod.js
 */
const webpackMerge = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const productionConfiguration = {
  mode: 'production',
  plugins: [new SpeedMeasureWebpackPlugin(), new BundleAnalyzerPlugin()],
  optimization: {
    minimizer: [
      new TerserPlugin({
        // parallel: true
      }),
      new CssMinimizerPlugin()
    ]
    // splitChunks: {
    //   chunks: 'all',
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       // 缓存组打包的先后优先级
    //       priority: -10,
    //       // 设置是否重用当前 chunk
    //       reuseExistingChunk: true,
    //       name: 'vendor'
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true
    //     }
    //   }
    // }
  },
  externals: {
    vue: 'Vue'
  }
}
module.exports = webpackMerge.merge(
  commonConfiguration,
  productionConfiguration
)
