<template>
  <!-- Date time selector -->
  <div class="modal fade" role="dialog" id="rating-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Rating</h4>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <div class="form-horizontal">
            <div class="form-group">
              <label class="control-label col-sm-3">From:</label>
              <div class="col-sm-7">
                <input type="input" class="form-control">
              </div>
            </div>
          </div>

          <div class="form-horizontal">
            <div class="form-group">
              <label class="control-label col-sm-3">To:</label>
              <div class="col-sm-7">
                <input type="input" class="form-control">
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
  name: 'RatingModal',
  props: [],
  data() {
    return {
      mode: '',
    }
  },
}
</script>

<style scoped>



</style>
