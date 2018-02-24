<template>
  <div class="main-container">
    <status-bar v-bind:status="status"
                @hide-status="hideStatus"
                id="status-bar"
                class="collapse">
    </status-bar>
    <app-nav></app-nav>

    <transition name="mode" mode="out-in">
      <info-page v-if="mode == 'info'"></info-page>
      <links-table v-if="mode != 'info'"
                   :mode="mode"
                   :tempLinks="tempLinks"
                   :mainLinks="mainLinks"
                   :deleteId="deleteId"
                   :changeId="linkChanges.id">
      </links-table>
    </transition>

    <link-info :infoMode="infoMode" :linkData="linkData"></link-info>

    <button id="back-to-top" class="btn btn-danger" @click=backToTop>
      <i class="fa fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
import AppNav from './AppNav';
import LinksTable from './LinksTable';
import InfoPage from './InfoPage';
import StatusBar from './StatusBar';
import LinkInfo from './LinkInfo';

export default {
  name: 'Dashboard',
  components: {
    AppNav,
    LinksTable,
    InfoPage,
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
        code: '',
        msg: '',
      },

      tempLinks: [],
      mainLinks: [],
      linkChanges: { id: 0 },
      deleteId: 0,
    }
  },

  mounted() {
    $(window).on('scroll', () => {
      if ($(document).scrollTop() > 20) {
        $('#back-to-top').css('display', 'block');
      } else {
        $('#back-to-top').css('display', 'none');
      }
    });
  },

  methods: {
    hideStatus() {
      $('#status-bar').collapse('hide');
    },

    showStatus(code, msg) {
      this.status = { code, msg }
      $('#status-bar').collapse('show');
      setTimeout(this.hideStatus, 1500);
    },

    // Scroll back to top
    backToTop(e) {
      $('html, body').animate({scrollTop : 0}, 800);
		  return false;
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

#back-to-top {
  display: none;
  position: fixed;
  bottom: 2vh;
  right: 2vw;
  z-index: 99;
}

</style>
