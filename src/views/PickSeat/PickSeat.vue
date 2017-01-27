<template>
  <div id="pick-seat">
    <ul>
      <type-item v-for="(row, index) in seats.rows" :row="row" :index="index">

      </type-item>
    </ul>
  </div>
</template>
<script>
import Seat from './Seat.vue';
import axios from 'axios';

export default {
  name: 'pick-seat',
  data: () => ({
    seats: Object,
  }),
  beforeMount() {
    fetchTodos.call(this)
  },
  components: { Seat },
};

function fetchAvailableSeats() {
  axios.get('http://localhost:3000/api/seats')
    .then(({ data }) => { this.seats = data.seats; })
    .catch(error => { console.log(error) });
}

</script>
