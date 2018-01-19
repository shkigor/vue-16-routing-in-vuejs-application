import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  // routes: routes -- this ES6 do for us
  routes,
  // no /#/ hash tag style in the url (history mode). The default mode is 'hash'
  mode: 'history'
});

new Vue({
  el: '#app',
  router, // router: router -- as the same upper
  render: h => h(App)
})
