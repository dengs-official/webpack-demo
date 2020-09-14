const path = require('path');

const r = (p) => path.resolve(__dirname, p);

module.exports = {
  mode: 'production', // 模式，production, development
  entry: './src/index.js', // 入口
  output: { // 出口
    filename: 'bunlde.js', //文件名
    path: r('dist') // 路径，必须为绝对路径
  }
}