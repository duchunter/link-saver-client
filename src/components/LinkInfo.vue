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
          <!-- Editable data -->
          <div class="form-horizontal" v-for="item in editable">
            <div class="form-group">
              <!-- Label -->
              <label class="control-label col-sm-2">{{item[0].toUpperCase() + item.slice(1)}}:</label>
              <div class="col-sm-8">
                <!-- Add mode -->
                <input v-if="infoMode == 'add'" type="text" class="form-control" v-model="newLink[item]">

                <!-- Edit mode -->
                <div v-if="infoMode == 'info' && !editCheckbox[item]" class="form-control">{{linkData[item]}}</div>
                <input v-if="infoMode == 'info' && editCheckbox[item]" type="text" class="form-control" v-model="linkChanges[item]">
              </div>

              <!-- Edit button -->
              <div v-if="infoMode == 'info'" class="col-sm-1">
                <button v-if="!editCheckbox[item]" @click="setEdit(item)" class="btn btn-primary">Edit</button>
                <button v-if="editCheckbox[item]" @click="setEdit(item)" class="btn btn-danger">Reset</button>
              </div>
            </div>
          </div>

          <!-- Fixed data -->
          <div v-if="infoMode=='info'" class="form-horizontal" v-for="item in fixed">
            <div class="form-group">
              <label class="control-label col-sm-2">{{item[0].toUpperCase() + item.slice(1)}}:</label>
              <div class="col-sm-8">
                <div class="form-control">{{
                  item == 'origin'
                  ? linkData[item]
                  : parseDate(linkData[item])
                }}</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div class="modal-footer">
          <button class="btn btn-danger" @click="discardNewLink">Discard</button>
          <button class="btn btn-danger" data-dismiss="modal">Close</button>
          <button v-if="Object.keys(linkChanges) != 0" class="btn btn-primary">Submit changes</button>
          <button v-if="infoMode == 'info' && linkData.origin == 'none'" class="btn btn-danger">Demote</button>
          <button v-if="infoMode=='info' && linkData.origin != 'none'" class="btn btn-success">Promote</button>
          <button v-if="infoMode == 'info'" class="btn btn-danger">Delete</button>
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
      },

      newLink: {
        link: '',
        title: '',
        tags: '',
        doc: '',
        rating: '',
        read: '',
        edit: '',
        report: '',
        relation: '',
        lib: '',
      },

      linkChanges: {},
    }
  },

  mounted() {
    $('#link-info-modal').on("hidden.bs.modal", () => {
      let keys = Object.keys(this.linkChanges)
      if (keys.length != 0) {
        keys.forEach(key => {
          delete this.linkChanges[key];
          this.editCheckbox[key] = false;
        });
      }
    });
  },

  methods: {
    setEdit(item) {
      if (!this.editCheckbox[item]) {
        this.linkChanges[item] = this.linkData[item];
      } else {
        delete this.linkChanges[item];
      }

      this.editCheckbox[item] = !this.editCheckbox[item];
    },

    parseDate(time) {
      const date = new Date(parseInt(time));
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },

    discardNewLink() {
      Object.keys(this.newLink).forEach(key => {
        this.newLink[key] = '';
      });
    }
  },
}
</script>

<style scoped>

.modal-footer {
  text-align: center;
}

</style>
