import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import axios from "./plugins/axios.js";
import * as hp from "./helpers/index.js";

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$hp = hp;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
