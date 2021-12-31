const webpackMerge = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')

const productionConfiguration = {
  mode: 'production',
  plugins: [new SpeedMeasureWebpackPlugin()],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
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
module.exports = webpackMerge.merge(commonConfiguration, productionConfiguration)
