<template>
  <div class="wrapper">
    <header class="app-header">
      <navbar></navbar>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Create from './views/CreateTodo/CreateTodo.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Create,
  },
};

</script>
<style lang='sass'>
@import "./styles/style.scss"

</style>
