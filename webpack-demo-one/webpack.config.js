const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeJsPlugin = require('terser-webpack-plugin'); // 可以转es6语法，使用babel可以处理提案语法
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');


const r = (p) => path.resolve(__dirname, p);

module.exports = {
  mode: 'development', // 模式，production, development
  entry: './src/index.js', // 入口
  output: { // 出口
    filename: 'boundle.[hash].js', //文件名
    path: r('dist') // 路径，必须为绝对路径
  },
  optimization: { // 优化
    minimizer: [ // 压缩
      new OptimizeCssPlugin(), // 压缩css,配置后需显式配置css压缩
      new OptimizeJsPlugin()
    ]
  },
  plugins: [ // 插件
    new HtmlWebpackPlugin({ // html插件, 将js/css引入html模版
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'boundle.[hash].css',
    })
  ],
  module: {
    rules: [
      {
        // 处理脚本, .js, .jsx
        test: /\.js(|x)$/,
        use: [
          {
            loader: 'babel-loader', // 编译es6等更高语法，配置文件babale.config.js
          }
        ]
      },
      {
        // 处理样式 .css, .less
        // style-loader, 处理插入css到html
        // css-loader，处理css引入, @import
        // postcss-loader, css预处理，配置文件postcss.config.js
        // less-loader, less转为css
        test: /\.(le|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  devServer: { // 开发服务器配置
    contentBase: './dist',
    port: 3000,
    host: '0.0.0.0',
    compress: true
  }
}