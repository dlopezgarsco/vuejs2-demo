import Vue from 'vue';
import Router from 'vue-router';

import PickSeat from '../views/PickSeat/PickSeat.vue';
import Home from '../views/Home.vue'

Vue.use(Router);

const routes = [
  { path: '/home', component: Home },
  { path: '/pick-seat', component: PickSeat },
  // { path: '*', redirect: '/' },
];

export default new Router({
  mode: 'history',
  routes,
});
