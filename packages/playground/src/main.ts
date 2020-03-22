import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

let vue = new Vue({
  router,
  store,
  // @ts-ignore
  vuetify,
  axios,
  render: h => h(App)
});

vue.$mount('#app')
