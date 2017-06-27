// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import header from './components/header/header.vue';
import container from './components/container/container.vue';
import nav from './components/nav/nav.vue';
import footer from './components/footer/footer.vue';
import business from './components/business/business.vue';
import evaluate from './components/evaluate/evaluate.vue';
import VueRouter from 'vue-router';
Vue.config.productionTip = false;
Vue.use(header);
Vue.use(container);
Vue.use(nav);
Vue.use(business);
Vue.use(evaluate);
Vue.use(VueRouter);
Vue.use(footer);
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: container
    },
    {
      path: '/evaluate',
      component: evaluate
    },
    {
      path: '/business',
      component: business
    }
  ]
});
new Vue({
  router: router,
  el: '#app',
  template: '<App/>',
  components: { App }
});
// ---------------------------------------------
window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);
setRem();
function setRem() {
  var html = document.querySelector('html');
  var width = html.getBoundingClientRect().width;
  html.style.fontSize = width / 16 + 'px';
}
// ---------------------------------------------
