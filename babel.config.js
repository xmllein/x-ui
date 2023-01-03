module.exports = {
  presets: [
    // babel解析的预设 反着执行的
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
  overrides: [
    {
      // vue文件中支持ts语法，vue-loader之前执行
      test: /\.vue$/,
      plugins: ['@babel/transform-typescript'],
    },
  ],
}
