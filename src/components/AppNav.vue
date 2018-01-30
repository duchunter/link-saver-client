<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Link saver</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a @click="setMode('info')">Info</a></li>
          <li><a @click="setMode('main')">Main</a></li>
          <li><a @click="setMode('temp')">Temp</a></li>
          <li>
            <button id="my-button" class="btn btn-danger log" @click="handleLogout()">
              <span class="glyphicon glyphicon-log-out"></span> Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { logout } from '../../utils/auth';

export default {
  name: 'app-nav',
  methods: {
    handleLogout: logout,
    setMode(mode) {
      this.$emit('set-mode', mode);
      $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
          $(this).parents('.navbar-collapse').collapse('hide');
      });
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

#my-button {
  height: 50px;
  width: 100%;
}

</style>
