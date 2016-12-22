<template>
  <div id="create-todo">
    <ul>
      <type-item v-for="(value, key) in types" :type="key" :params="value"></type-item>
    </ul>
  </div>
</template>
<script>
import TypeItem from './Type.vue';
import axios from 'axios'

export default {
  name: 'create-todo',
  data: () => ({
    types: Object,
  }),
  beforeMount() {
    fetchTodos.call(this)
  },
  components: { TypeItem },
};

function fetchTodos() {
  axios.get('http://localhost:3000/api/types')
    .then(({ data }) => { this.types = data.types; })
    .catch(error => { console.log(error) });
}

</script>
