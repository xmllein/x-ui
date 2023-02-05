import { App } from 'vue'
import ButtonGroup from '../button/src/button-group.vue'

ButtonGroup.install = function (app: App) {
  // 注册组件
  app.component(ButtonGroup.name, ButtonGroup)
}

// 导出组件
export default ButtonGroup
