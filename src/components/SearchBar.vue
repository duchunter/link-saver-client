<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading container-fluid">
        <div class="col-sm-6">
          <div class="form-horizontal">
            <div class="form-group">
              <label class="control-label col-sm-2">Title:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="any">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-horizontal">
            <div class="form-group">
              <label class="control-label col-sm-2">Tags:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="any">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-body collapse" id="more-option">
        <h1>hello</h1>
      </div>
      <div class="panel-footer">
        <button class="btn btn-danger">Search</button>
        <button class="btn btn-info" data-toggle="collapse" data-target="#more-option">
          Show more option
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {

    }
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
