import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import {routes} from './routes'
import {store} from './store/store'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

axios.defaults.baseURL = 'https://arga-ga-backend.firebaseio.com/';
axios.defaults.headers.get['Accepts'] = 'application/json';

let config = {
  apiKey: "AIzaSyDKkCGqULqtZnbfeEWpZwp7xXbCKlH3xX0",
  authDomain: "arga-ga-backend.firebaseapp.com",
  databaseURL: "https://arga-ga-backend.fire baseio.com",
  projectId: "arga-ga-backend",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "883924954020"
};
firebase.initializeApp(config);
firebase.auth.Auth.Persistence.NONE;

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
