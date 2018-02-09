<template>
  <!-- Date time selector -->
  <div class="modal fade" role="dialog" id="link-info-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">{{mode == 'add' ? 'Add new link' : linkData.title}}</h4>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <div class="form-horizontal" v-for="item in editable">
            <div class="form-group">
              <label class="control-label col-sm-2">{{item}}:</label>
              <div class="col-sm-9">
                <input type="text" class="form-control">
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
  props: ['mode', 'linkData'],
  data() {
    return {
      editable: ['link', 'title', 'tags', 'doc', 'rating', 'read', 'edit', 'report', 'relation', 'lib'],
      fixed: ['added', 'lastedit', 'origin'],
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
