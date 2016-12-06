<template>
  <div class="column-4" :id="'type-' + type ">
    <li class="item">
      <div>
        <img v-bind:src="params.img" alt="Tipo">
        <h4> {{ params.name }} </h4>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'type-item',
  props: {
    type: String,
    params: Object,
  },
};

</script>

<style scoped lang='sass'>
div {
  display: inline-block;
  text-align: center;
  cursor: pointer;
}

.item {
  background: chocolate;
  padding: 1em;
  margin: 2em;
  border-radius: 0.5em;
}

.item:hover {
  background: darken(chocolate, 10%);
}

</style>
