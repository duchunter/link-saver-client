<template>
  <div>
    <app-nav></app-nav>
    <h1>This is dashboard</h1>
    <button type="button" @click="setMode('temp')">Temp: {{tempCount}}</button>
    <button type="button" @click="setMode('main')">Main: {{mainCount}}</button>
    <button type="button" @click="setMode('log')">Log: {{logCount}}</button>
    <links-table v-bind:mode="mode"></links-table>
  </div>
</template>

<script>
import AppNav from './AppNav';
import LinksTable from './LinksTable';
import { getInfo } from '../../utils/api';

export default {
  name: 'Dashboard',
  components: {
    AppNav,
    LinksTable
  },

  data() {
    return {
      mode: 'temp',
      tempCount: 0,
      mainCount: 0,
      logCount: 0,
    }
  },

  async mounted() {
    this.tempCount = await getInfo('Temp');
    this.mainCount = await getInfo('Main');
    this.logCount = await getInfo('Logs');
  },

  methods: {
    setMode(mode) {
      this.mode = mode;
    }
  },

}
</script>

<style>

</style>
