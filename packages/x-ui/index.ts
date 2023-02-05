import Button from '@x-ui/button'
import Icon from '@x-ui/icon'
import ButtonGroup from '@x-ui/button-group'
import Checkbox from '@x-ui/checkbox'
import CheckboxGroup from '@x-ui/checkbox-group'
import Row from '@x-ui/row'
import Col from '@x-ui/col'

import { App } from 'vue'

// 全局引入
const components = [
  Button,
  Icon,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Row,
  Col,
]

// 全局注册组件
const install = function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
