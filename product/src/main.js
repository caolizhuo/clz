// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueRouter from 'vue-router'
// import axios from 'axios'
import './css/reset.css';
import './css/swiper.min.css';
import './css/font-awesome.css';



import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
//全局注册
Vue.use(vueRouter);
Vue.config.productionTip = false;
// Vue.prototype.$axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
