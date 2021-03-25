<template>
  <div id="gate">
    <div id="gate-content">
      <p>Gotta find another name for</p>
      <h1>LINK SAVER</h1>
      <br />
      <br />
      <br />
      <button class="btn btn-danger" @click="handleLogin()">
        <p>Start searching !!!</p>
      </button>
    </div>
  </div>
</template>

<script>
import { isLoggedIn, login } from '../utils/auth';

export default {
  name: 'Gate',
  mounted() {
    $('#gate').css(
      'background-image',
      `url("https://image.ibb.co/hMWVfy/background_compress.jpg")`
    );
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

.btn {
  border: 2px;
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;
}

@font-face {
  font-family: "Outrun future";
  src: url("../assets/fonts/outrun_future/Outrun_future.otf");
}

#gate {
  width: 100%;
  position: absolute;
  height: auto;
  top: 0;
  bottom: 0;
  background-image: url("https://image.ibb.co/iaQqfy/Webp_net_compress_image.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
}

#gate-content {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 40%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

h1 {
  font-family: 'Outrun future', sans-serif;
  color: white;
  font-size: 12vw;
  font-weight:normal;
  font-style: normal;
}

p {
  font-family: 'Outrun future', sans-serif;
  color: white;
  letter-spacing: 0.5vw;
  font-weight:normal;
  font-style: normal;
}

</style>
