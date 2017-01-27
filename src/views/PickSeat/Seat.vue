<template>
  <div class="column-1">
    <li class="seat">
      <div>
        <img v-bind:src="params.img" alt="Asiento + ">
        <h4> {{ rows }} </h4>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'seat',
  props: {
    rows: Object,
  },
  computed: {
    seatNumber: function() {
      return this.rows.letter + this.index;
    }
  }
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
