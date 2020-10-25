// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/styles/configure.scss'
import VueQrcode from "@chenfengyuan/vue-qrcode";
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import NProgress from 'nprogress'

Vue.component(VueQrcode.name, VueQrcode);

Vue.config.productionTip = false

axios.interceptors.request.use(function(config) {
  NProgress.start()
  return config
}, function (error) {
  Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
