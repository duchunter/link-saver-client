<template>
  <div>
    <button class="btn btn-info log" @click="handleLogin()">
      <span class="glyphicon glyphicon-log-out"></span> Log In
    </button>
  </div>
</template>

<script>
import { isLoggedIn, login } from '../../utils/auth';

export default {
  name: 'Gate',
  data() {
    return {

    };
  },

  methods: {
    handleLogin: login,
  },

  beforeMount() {
    if (isLoggedIn()) this.$router.push('/dashboard');
  },
};

</script>

<style scoped>

</style>
