// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import { TransferDom } from 'vux'
import 'normalize.css'
import VueLazyload from 'vue-lazyload'

Vue.directive('transfer-dom', TransferDom)

/* 引入FastClick会导致vux-Search组件不好用，使用class="needsclick"无法解决 */
// const FastClick = require('fastclick')
// FastClick.attach(document.body)

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  attempt: 2
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')