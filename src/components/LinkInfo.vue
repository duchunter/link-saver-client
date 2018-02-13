<template>
  <!-- Date time selector -->
  <div class="modal fade" role="dialog" id="link-info-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">{{infoMode == 'add' ? 'Add new link' : linkData.title}}</h4>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <div class="form-horizontal" v-for="item in editable">
            <div class="form-group">
              <!-- Label -->
              <label class="control-label col-sm-2">{{item}}:</label>

              <!-- Editable data -->
              <div class="col-sm-8">
                <input v-if="infoMode == 'add'" type="text" class="form-control">
                <div v-if="infoMode == 'info'" class="form-control">{{linkData[item]}}</div>
                <input v-if="infoMode == 'info' && editCheckbox[item]" type="text" class="form-control" placeholder="linkData[item]">
              </div>

              <!-- Edit button -->
              <div v-if="infoMode == 'info'" class="col-sm-1">
                <button v-if="!editCheckbox[item]" class="btn btn-primary">Edit</button>
                <button v-if="editCheckbox[item]" class="btn btn-success">Done</button>
              </div>
            </div>
          </div>

          <!-- Fixed data -->
          <div v-if="infoMode=='info'" class="form-horizontal" v-for="item in fixed">
            <div class="form-group">
              <label class="control-label col-sm-2">{{item}}:</label>
              <div class="col-sm-8">
                <div class="form-control">{{linkData[item]}}</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div class="modal-footer">
          <button class="btn btn-primary" data-dismiss="modal">Done</button>
          <button class="btn btn-danger">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkInfo',
  props: ['infoMode', 'linkData'],
  data() {
    return {
      editable: ['link', 'title', 'tags', 'doc', 'rating', 'read', 'edit', 'report', 'relation', 'lib'],
      fixed: ['added', 'lastedit', 'origin'],
      editCheckbox: {
        link: false,
        title: false,
        tags: false,
        doc: false,
        rating: false,
        read: false,
        edit: false,
        report: false,
        relation: false,
        lib: false,
      }
    }
  },

  methods: {

  },
}
</script>

<style scoped>

.modal-footer {
  text-align: center;
}

</style>
