import { App } from 'vue'
import Button from './src/button.vue'

Button.install = function (app: App) {
  // 注册组件
  app.component(Button.name, Button)
}

// 导出组件
export default Button
