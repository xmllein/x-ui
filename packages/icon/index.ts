import { App } from 'vue'
import Icon from './src/icon.vue'

// 注册组件
Icon.install = function (app: App) {
  app.component(Icon.name, Icon)
}

// 导出组件
export default Icon
