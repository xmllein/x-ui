import { App } from 'vue'
import CheckboxGroup from '../checkbox/src/checkbox-group.vue'

CheckboxGroup.install = function (app: App) {
  // 注册组件
  app.component(CheckboxGroup.name, CheckboxGroup)
}

// 导出组件
export default CheckboxGroup
