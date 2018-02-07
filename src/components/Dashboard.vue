<template>
  <div class="main-container">
    <status-bar v-bind:status="status" @hide-status="hideStatus" id="status-bar" class="collapse"></status-bar>
    <app-nav ref="navbar" @set-mode="setMode"></app-nav>
    <info-page v-if="mode == 'info'"></info-page>
    <links-table v-if="mode != 'info'" :mode="mode"></links-table>
    <button @click="showStatus">test</button>
  </div>
</template>

<script>
import AppNav from './AppNav';
import LinksTable from './LinksTable';
import InfoPage from './InfoPage';
import SearchBar from './SearchBar';
import StatusBar from './StatusBar';

export default {
  name: 'Dashboard',
  components: {
    AppNav,
    LinksTable,
    InfoPage,
    SearchBar,
    StatusBar,
  },

  data() {
    return {
      mode: 'info',
      status: {
        code: 200,
        msg: 'Done',
      }
    }
  },

  methods: {
    setMode(mode) {
      this.mode = mode;
    },

    hideStatus() {
      $('#status-bar').collapse('hide');
    },

    showStatus() {
      $('#status-bar').collapse('show');
      setTimeout(this.hideStatus, 1500);
    },

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
