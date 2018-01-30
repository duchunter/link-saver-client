<template>
  <div class="main-container">
    <app-nav @set-mode="setMode"></app-nav>
    <h1>This is dashboard</h1>
    <info-page v-if="mode == 'info'"></info-page>
    <links-table v-if="mode != 'info'" v-bind:mode="mode"></links-table>
  </div>
</template>

<script>
import AppNav from './AppNav';
import LinksTable from './LinksTable';
import InfoPage from './InfoPage';

export default {
  name: 'Dashboard',
  components: {
    AppNav,
    LinksTable,
    InfoPage,
  },

  data() {
    return {
      mode: 'info',
    }
  },

  methods: {
    setMode(mode) {
      this.mode = mode;
    }
  },

}
</script>

<style>
a {
  cursor: pointer;
}

.main-container {
  padding-top: 50px;
}
</style>
