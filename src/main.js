import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import {routes} from './routes'

Vue.use(VueRouter);

axios.defaults.baseURL = 'https://arga-ga-backend.firebaseio.com/';
axios.defaults.headers.get['Accepts'] = 'application/json';

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
