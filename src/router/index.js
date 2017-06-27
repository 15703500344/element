import Vue from 'vue';
import Router from 'vue-router';
import header from '@/components/header';

Vue.use(Router);
Vue.use(header);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    }
  ]
});
