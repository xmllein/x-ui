// 打包 例子 项目的
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'main.ts'),
  output: {
    path: path.resolve(__dirname, '../play-dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
  },
  resolve: {
    // 解析模块 对应的扩展名有哪些  import xx from 'xx.ts'
    extensions: ['.ts', '.tsx', '.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(svg|otf|ttf|woff|woff2|eot|gif|png)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(scss|css)/,
        use: [
          // loader 三种写法  { }  ""  []
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),
    }),
  ],
}
