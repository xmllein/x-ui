// 打包每个UI组件
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { getPackagesSync } from '@lerna/project'
import vue from 'rollup-plugin-vue'

// 获取package.json 找到名字 以@x-ui 开头的
const inputs = getPackagesSync()
  .map((pck) => pck.name)
  .filter((name) => name.includes('@x-ui'))
export default inputs.map((name) => {
  const pckName = name.split('@x-ui')[1] // button icon
  return {
    input: path.resolve(__dirname, `../packages/${pckName}/index.ts`),
    output: {
      format: 'es',
      file: `lib/${pckName}/index.js`,
    },
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser',
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            // 打包单个组件的时候不生成ts声明文件
            declaration: false,
          },
          exclude: ['node_modules'],
        },
      }),
    ],
    external(id) {
      // 对vue本身 和 自己写的包 都排除掉不打包
      return /^vue/.test(id) || /^@x-ui/.test(id)
    },
  }
})
