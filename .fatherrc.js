// https://github.com/umijs/father
export default {
  target: 'browser',
  entry: 'src/index.ts', // 指定入口文件
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    themeConfig: { mode: 'dark' }
  }
}
