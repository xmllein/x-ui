//整合组件
import Button from '@x-ui/button'
import Icon from '@x-ui/icon'
import { App } from 'vue'

// 全局引入
const components = [Button, Icon]

// 全局注册组件
const install = function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
