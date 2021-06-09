import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './element.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/gloabl.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://loaclhost:3000/'

axios.interceptors.request.use(config =>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})


Vue.config.productionTip = false
Vue.prototype.axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
