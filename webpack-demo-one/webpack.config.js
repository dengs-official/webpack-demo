const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const r = (p) => path.resolve(__dirname, p);

module.exports = {
  mode: 'production', // 模式，production, development
  entry: './src/index.js', // 入口
  output: { // 出口
    filename: 'bunlde.[hash].js', //文件名
    path: r('dist') // 路径，必须为绝对路径
  },
  plugins: [ // 插件
    new HtmlWebpackPlugin({ // html插件, 将js/css引入html模版
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    })
  ],
  module: {
    rules: [
      {
        // 处理样式 .css, .less
        // style-loader, 处理插入css到html
        // css-loader，处理css引入, @import
        // less-loader, less转为css
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader']
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