import Vue from 'vue';
import router from './router/router.js';
import App from './App.vue';

const app = new Vue(
  Vue.util.extend({
    router,
  }, App)
);

export default app;

app.$mount('#app');
