<template>
  <div id="gate">
    <div id="gate-content">
      <p>Gotta find another name for</p>
      <h1>LINK SAVER</h1>
      <br />
      <br />
      <br />
      <button class="btn btn-danger" @click="handleLogin()">
        <p>This font is cool !!!</p>
      </button>
    </div>
  </div>
</template>

<script>
import { isLoggedIn, login } from '../../utils/auth';

export default {
  name: 'Gate',
  mounted() {

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
  src: url("../../static/fonts/outrun_future/Outrun_future.otf");
}

#gate {
  width: 100%;
  position: absolute;
  height: auto;
  top: 0;
  bottom: 0;
  background-image: url("https://preview.ibb.co/jv6RNc/tony_webster_97532_unsplash.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
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
