<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button class="navbar-toggle collapsed"
                  data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <!-- Brand -->
          <a class="navbar-brand" href="/">Link saver</a>

          <!-- Search icon -->
          <button id="search"
                  class="btn btn-danger"
                  @click="searchFromNav"
                  data-toggle="collapse"
                  data-target="#search-collapse">
            <i class="glyphicon glyphicon-search"></i> Search
          </button>

          <!-- Add link icon -->
          <button id="add-link"
                  class="btn btn-primary"
                  @click="addLink"
                  data-toggle="modal"
                  data-target="#link-info-modal">
            <i class="fa fa-plus-square"></i> Add
          </button>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a @click="setMode('info')">Info</a></li>
            <li><a @click="setMode('main')">Main</a></li>
            <li><a @click="setMode('temp')">Temp</a></li>
            <li>
              <button class="btn btn-danger my-button"
                      @click="handleLogout()">
                <span class="glyphicon glyphicon-log-out"></span> Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Search bar -->
    <search-bar @hideSearch="hideSearch"
                class="collapse"
                id="search-collapse">
    </search-bar>
  </div>
</template>

<script>
import { logout } from '../../utils/auth';
import SearchBar from './SearchBar';

export default {
  name: 'app-nav',
  props: [],
  components: {
    SearchBar,
  },

  data() {
    return {

    }
  },

  mounted() {
    $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
        $(this).parents('.navbar-collapse').collapse('hide');
    });

    if ($(window).width() < 400) $('.navbar-brand').hide();
  },

  methods: {
    handleLogout: logout,
    hideNav() {
      $('#navbar').collapse('hide');
    },

    hideSearch() {
      $('#search-collapse').collapse('hide');
    },

    setMode(mode) {
      this.$parent.mode = mode;
      this.hideNav();
      this.hideSearch();
    },

    searchFromNav() {
      this.hideNav();
      this.$parent.backToTop();
    },

    addLink() {
      this.hideNav();
      this.hideSearch();
      this.$parent.infoMode = 'add';
    }
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

.my-button {
  height: 50px;
  width: 100%;
}

#search, #add-link{
  height: 50px;
}

#search {
  margin-left: 5px;
}

#navbar {
  text-align: center;
}

</style>
