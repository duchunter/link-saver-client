<template>
  <div>
    <button @click="showSearch" class="btn btn-info">Show search options</button>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th v-if="mode == 'temp'">Origin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="link in allLinks">
            <td>{{link.title}}</td>
            <td v-if="mode == 'temp'">{{link.origin}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksTable',
  props: ['allLinks', 'mode'],

  data() {
    return {

    };
  },

  methods: {
    showSearch() {
      this.$emit('call-search-not-from-nav');
    },
  },
};

</script>

<style scoped>

</style>
