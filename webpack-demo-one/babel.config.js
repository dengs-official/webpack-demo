module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // 打包时动态引入，避免重复定义
    '@babel/plugin-proposal-class-properties'
  ]
}