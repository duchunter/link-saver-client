<template>

</template>
<script>
import { isLoggedIn, setIdToken, setAccessToken } from '../../utils/auth';

export default {
  name: 'Callback',
  mounted() {
    this.$nextTick(() => {
      setAccessToken();
      setIdToken();
      window.location.href = '/';
    });
  },
};
</script>

<style scoped>

</style>
