import Vue from 'vue'
import App from './App.vue'
import {store} from './store/Store.js'
import VueRouter from 'vue-router';
import {routes} from './routes.js'


Vue.use(VueRouter);
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store ,
  router,
  render: h => h(App)
})
