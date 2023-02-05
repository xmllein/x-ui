import { App } from 'vue'
import Checkbox from './src/checkbox.vue'

Checkbox.install = function (app: App) {
  // 注册组件
  app.component(Checkbox.name, Checkbox)
}

// 导出组件
export default Checkbox
