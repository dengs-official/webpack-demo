module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime', // 打包时动态引入，避免重复定义
      {
        corejs: 3
      }
    ]
  ],
  exclude: /node_modules/,
}