import Vue from 'vue';
import Router from 'vue-router';

import CreateTodo from '../views/CreateTodo/CreateTodo.vue';
import Home from '../views/Home.vue'

Vue.use(Router);

const routes = [
  { path: '/home', component: Home },
  { path: '/create-todo', component: CreateTodo },
  // { path: '*', redirect: '/' },
];

export default new Router({
  mode: 'history',
  routes,
});
