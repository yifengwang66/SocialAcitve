import Vue from 'vue';
import App from './App.vue';
import axios from './http';
import router from './router';
import store from './store';
import './assets/reset.css';
import './assets/iconfont.css';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
