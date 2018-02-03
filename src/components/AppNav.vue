<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">Link saver</a>

          <!-- Search icon -->
          <button id="search" class="btn btn-danger" @click="hideNav" data-toggle="collapse" data-target="#search-collapse">
            <i class="glyphicon glyphicon-search"></i> Search
          </button>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a @click="setMode('info')">Info</a></li>
            <li><a @click="setMode('main')">Main</a></li>
            <li><a @click="setMode('temp')">Temp</a></li>
            <li>
              <button class="btn btn-danger my-button" @click="handleLogout()">
                <span class="glyphicon glyphicon-log-out"></span> Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Search bar -->
    <search-bar :callFromNav="true" @hideSearch="hideSearch" class="collapse" id="search-collapse"></search-bar>
  </div>
</template>

<script>
import { logout } from '../../utils/auth';
import SearchBar from './SearchBar';

export default {
  name: 'app-nav',
  components: {
    SearchBar,
  },

  data() {
    return {

    }
  },

  methods: {
    handleLogout: logout,
    hideNav() {
      $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
          $(this).parents('.navbar-collapse').collapse('hide');
      });
    },

    hideSearch() {
      $('#search-collapse').collapse('hide');
    },

    setMode(mode) {
      this.$emit('set-mode', mode);
      this.hideNav();
    },
  },
};
</script>

<style scoped>
/*
 * Top navigation
 * Hide default border to remove 1px line.
 */
.navbar-fixed-top {
  border: 0;
}

li {
  text-align: center;
}

.my-button {
  height: 50px;
  width: 100%;
}

#search {
  height: 50px;
}

</style>
