const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name][chunkhash:8].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                  [
                    'postcss-px-to-viewport',
                    {
                      viewportWidth: 1920,
                      unitPrecision: 5,
                      minPixelValue: 1
                    }
                  ]
                ]
              }
            }
          }
        ]
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][hash:8].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][hash:8].[ext]'
        }
      }
    ]
  },
  mode: 'production',
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      filename: 'index.html'
    }),
    new HTMLInlineCSSWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],
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
  },
  stats: 'errors-only'
}
