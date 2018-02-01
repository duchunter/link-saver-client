<template>
  <div>
    <div class="panel panel-default">

      <!-- Header -->
      <div class="panel-heading container-fluid">

        <!-- Search in ... -->
        <div v-if="callFromNav" class="col-sm-3">
          <div class="form-horizontal">
            <div class="form-group">
              <label class="control-label col-sm-2">Search:</label>
              <div class="col-sm-10">
                <select class="form-control">
                  <option value="info">Info</option>
                  <option value="main">Main</option>
                  <option value="temp">Temp</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Title -->
        <div class="col-sm-4">
          <div class="form-horizontal">
            <div class="form-group">
              <label class="control-label col-sm-2">Title:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="any">
              </div>
            </div>
          </div>
        </div>

        <!-- Tags -->
        <div class="col-sm-5">
          <div class="form-horizontal">
            <div class="form-group">
              <label class="control-label col-sm-2">Tags:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="seperated with commas">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More options -->
      <div class="panel-body collapse" id="more-option">
        <h1>More options</h1>
      </div>

      <!-- Footer -->
      <div class="panel-footer">
        <button class="btn btn-danger">Search</button>
        <button id="optionDisplay" @click="changeButtonContent" class="btn btn-primary" data-toggle="collapse" data-target="#more-option">
          More options
        </button>
        <button v-if="callFromNav" class="btn btn-info" @click="hideSearch">Hide</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['callFromNav'],
  data() {
    return {
      showOptions: false,
    }
  },

  methods: {
    hideSearch() {
      this.$emit('hideSearch');
    },

    changeButtonContent() {
      this.showOptions = !this.showOptions;
      let content = this.showOptions ? 'Hide advanced options' : 'More options';
      $('#optionDisplay').html(content);
    }
  }
}
</script>

<style scoped>

.panel-footer {
  text-align: center;
}

</style>
