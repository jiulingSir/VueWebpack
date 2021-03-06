// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router' 
import axios from 'axios'
 
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$axios=axios;

import './assets/css/reset.css'
import 'lib-flexible/flexible.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
