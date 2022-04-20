// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'


import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vant)
Vue.use(ElementUI)
Vue.use(Vuex)
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
//挂在实例对象。
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
