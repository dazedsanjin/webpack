/*
 * @Author: your name
 * @Date: 2022-01-02 15:53:18
 * @LastEditTime: 2022-01-04 15:56:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack\webpack5\webpack.common.js
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const fileRoot = process.cwd()

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(fileRoot, 'dist'),
    filename: '[name]_[chunkhash:8].js',
    clean: {
      keep: /dll/
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              worker: 2
            }
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
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
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'cache-loader',
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
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash:8].css'
    }),
    new HTMLInlineCSSWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      filename: 'index.html'
    })
  ],
  stats: 'errors-only'
}
