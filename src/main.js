// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import directive from './directive'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

for(let key in directive){
   Vue.directive(key,directive[key])
}


var instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 2000,
  headers: {'X-Custom-Header': 'foobar'}
})

Vue.use(ElementUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
