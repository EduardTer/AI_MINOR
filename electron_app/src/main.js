import Vue from 'vue'
import 'es6-promise/auto'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import CreateStore from './store/index'

import './assets/scss/custom.scss';

Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


new Vue({
  el: '#app',
  store: CreateStore(),
  router,
  render: h => h(App)
}).$mount('#app')
