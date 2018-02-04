<template>
  <div>
    <div class="panel panel-default">

      <!-- Header -->
      <div class="panel-heading container-fluid">

        <!-- Search in ... -->
        <div v-if="mode=='nav'" class="col-sm-3">
          <div class="form-horizontal">
            <div class="form-group">
              <label class="control-label col-sm-4">Search:</label>
              <div class="col-sm-8">
                <select class="form-control" v-model="table">
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
        <div class="container-fluid">
          <!-- Link -->
          <div class="col-sm-3">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-3">Link:</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" placeholder="any">
                </div>
              </div>
            </div>
          </div>

          <!-- Doc -->
          <div class="col-sm-3">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-3">Doc:</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" placeholder="any">
                </div>
              </div>
            </div>
          </div>

          <!-- Lib -->
          <div class="col-sm-3">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-3">Lib:</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" placeholder="any">
                </div>
              </div>
            </div>
          </div>

          <!-- Related links -->
          <div class="col-sm-3">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-4">Related:</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="any">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <!-- Read -->
          <div class="col-sm-3">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-3">Read:</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" placeholder="any">
                </div>
              </div>
            </div>
          </div>

          <!-- Edit -->
          <div class="col-sm-3">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-3">Edit:</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" placeholder="any">
                </div>
              </div>
            </div>
          </div>

          <!-- Origin -->
          <div v-if="mode=='temp' || mode=='info' || (table!='main' && mode=='nav')" class="col-sm-3">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-4">Origin:</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="any">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <!-- Added -->
          <div class="col-sm-3">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-4">Added:</label>
                <div class="col-sm-8">
                  <button class="btn btn-primary form-control">Set value</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Rating -->
          <div class="col-sm-4">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-4">Rating:</label>
                <div class="col-sm-8">
                  <button class="btn btn-primary form-control">Set value</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Last edit -->
          <div class="col-sm-5">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-5">Last edit:</label>
                <div class="col-sm-7">
                  <button class="btn btn-primary form-control">Set value</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div class="panel-footer">
        <button class="btn btn-danger">Search</button>
        <button id="optionDisplay" @click="changeButtonContent" class="btn btn-primary" data-toggle="collapse" data-target="#more-option">
          More options
        </button>
        <button class="btn btn-info" @click="hideSearch">Hide</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['mode'],
  data() {
    return {
      showOptions: false,
      table: '',
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
