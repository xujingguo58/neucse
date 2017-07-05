// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import N3Components from 'N3-components'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/voerline-from-center.css'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(elementUI)
N3Components.install(Vue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
