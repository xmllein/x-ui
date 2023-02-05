## vue3.x 组件库

- 模仿 `element ui` 开发一套完整支持按需加载的 `vue3.x ui` 组件库
- 基于`lerna`实现`Monorepo`项目管理

## 命令

- `yarn dev` 开发模式
- `yarn build:theme` 打包样式
- `yarn build` 打包组件库 `umd` 格式组件库
- `build:esm-bundle` 打包组件库 `esm` 格式组件库
- `build:esm` 打包按需加载组件库组件库

## 创建组件流程

- `lerna create <package-name>` 创建组件库
- `yarn install` 安装依赖
- `build:esm-bundle`

## 完成进度

- [x] Button 按钮组件
- [x] ButtonGroup 按钮组组件
- [x] Icon 图标组件
- [x] Checkbox 复选框组件
- [x] CheckboxGroup 复选框组组件
- [x] Row/Col 栅格组件
- [ ] Tranfer 穿梭框组件
- [ ] Message 消息提示组件

## 参考资料

- [视频](https://www.bilibili.com/video/BV1NP411N7K1?p=1&vd_source=c5abf1ba032ca00c06ebba96e3ff445e)
- [github 源码](https://github.com/xiazhongzheng/vue3-x-ui)
- [高仿 element ui 从 0 到 1 开发一套完整支持按需加载的 vue ui 组件库](https://www.bilibili.com/video/BV1qL4y1j7eM/?spm_id_from=333.999.0.0&vd_source=c5abf1ba032ca00c06ebba96e3ff445e)
- [vue3.2(setup 语法糖)+vite,x-ui](https://github.com/Down-1998/x-ui)
- [ak-vue](https://github.com/337547038/ak-vue3)
