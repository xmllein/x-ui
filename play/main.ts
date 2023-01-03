import { createApp } from 'vue'
import App from './App.vue'
import XUI from 'x-ui'
// import XUI from '../lib/index.js'
// import XUI from '../lib/index.esm.js'
import 'theme-chalk/src/index.scss'

createApp(App).use(XUI).mount('#app')
