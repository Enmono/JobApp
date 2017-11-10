import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mock'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(MintUI)

// 引入mockjs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
