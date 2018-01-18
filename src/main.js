import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
  // routes: routes -- this ES6 do for us
});

new Vue({
  el: '#app',
  router, // router: router -- as the same upper
  render: h => h(App)
})
