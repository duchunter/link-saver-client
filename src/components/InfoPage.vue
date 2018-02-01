<template>
  <div>
    <button id="search" class="btn btn-info">
      <i class="fa fa-github"></i> See this project on Github
    </button>
    <h3>Main: {{mainCount}}</h3>
    <h3>Temp: {{tempCount}}</h3>
    <h3>Log: {{logCount}}</h3>
  </div>
</template>

<script>
import { getInfo } from '../../utils/api';

export default {
  name: 'InfoPage',
  data() {
    return {
      tempCount: 0,
      mainCount: 0,
      logCount: 0,
    }
  },

  async mounted() {
    this.tempCount = await getInfo({ table: 'Temp'});
    this.mainCount = await getInfo({ table: 'Main'});
    this.logCount = await getInfo({ table: 'Logs'});
  }
}
</script>

<style scoped>

</style>
