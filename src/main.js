import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  // routes: routes -- this ES6 do for us
  routes,
  // no /#/ hash tag style in the url (history mode). The default mode is 'hash'
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    return {x: 0, y: 0};
  }
});

new Vue({
  el: '#app',
  router, // router: router -- as the same upper
  render: h => h(App)
})
