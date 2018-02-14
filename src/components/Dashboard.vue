<template>
  <div class="main-container">
    <status-bar v-bind:status="status" @hide-status="hideStatus" id="status-bar" class="collapse"></status-bar>
    <app-nav ref="navbar"></app-nav>

    <transition name="mode" mode="out-in">
      <info-page v-if="mode == 'info'"></info-page>
      <links-table v-if="mode != 'info'" :mode="mode"></links-table>
    </transition>

    <link-info :infoMode="infoMode" :linkData="linkData"></link-info>
    <button @click="showStatus">test</button>
  </div>
</template>

<script>
import AppNav from './AppNav';
import LinksTable from './LinksTable';
import InfoPage from './InfoPage';
import SearchBar from './SearchBar';
import StatusBar from './StatusBar';
import LinkInfo from './LinkInfo';

export default {
  name: 'Dashboard',
  components: {
    AppNav,
    LinksTable,
    InfoPage,
    SearchBar,
    StatusBar,
    LinkInfo,
  },

  data() {
    return {
      mode: 'info',
      infoMode: '',
      linkData: {
        link: '',
        title: '',
        tags: [],
        added: 0,
        doc: '',
        rating: '',
        read: '',
        edit: '',
        lastedit: 0,
        report: '',
        relation: '',
        lib: '',
        origin: ''
      },
      status: {
        code: 200,
        msg: 'Done',
      }
    }
  },

  methods: {
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

.mode-enter-active, .mode-leave-active {
  transition: opacity .3s ease;
}
.mode-enter, .mode-leave-to {
  opacity: 0;
}

.main-container {
  padding-top: 50px;
}
</style>
