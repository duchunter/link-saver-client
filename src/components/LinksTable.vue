<template>
  <div class="panel panel-default">
    <!-- Heading -->
    <div class="panel-heading">
        <div class="row">
          <div class="col-lg-2">
            <div class="button-group">
              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Display <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li v-for="item in Object.keys(displayOption)">
                  <a :value="item">
                    <input type="checkbox" v-model="displayOption[item]"/>&nbsp;{{item[0].toUpperCase() + item.slice(1)}}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>

    <!-- Body -->
    <div class="panel-body">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th v-for="item in Object.keys(displayOption)" v-if="displayOption[item]">{{item[0].toUpperCase() + item.slice(1)}}</th>
            </tr>
          </thead>
          <!-- Main links -->
          <tbody id="main">
            <tr v-for="link in mainLinks" @click="displayInfo(link)" data-toggle="modal" data-target="#link-info-modal">
              <td v-for="item in Object.keys(displayOption)" v-if="displayOption[item]">
                {{
                  ['added', 'lastedit'].includes(item)
                  ? parseDate(link[item])
                  : link[item]
                }}
              </td>
            </tr>
          </tbody>

          <!-- Temp links -->
          <tbody id="temp">
            <tr v-for="link in tempLinks" @click="displayInfo(link)" data-toggle="modal" data-target="#link-info-modal">
              <td v-for="item in Object.keys(displayOption)" v-if="displayOption[item]">
                {{
                  ['added', 'lastedit'].includes(item)
                  ? parseDate(link[item])
                  : link[item]
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <!-- Footer -->
    <div class="panel-footer">
      <button class="btn btn-primary" @click="backToTop">Back to top</button>
      <button class="btn btn-danger">Reload</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksTable',
  props: ['mode', 'tempLinks', 'mainLinks', 'deleteId' ,'changeId'],
  data() {
    return {
      displayOption: {
        link: false,
        title: true,
        tags: false,
        added: true,
        doc: false,
        rating: false,
        read: false,
        edit: false,
        lastedit: false,
        report: false,
        relation: false,
        lib: false,
        origin: true,
      },
    };
  },

  mounted() {
    $('.dropdown-menu a').on('click', e => {
      let target = $(e.target).attr('value');
      this.displayOption[target] = !this.displayOption[target];
      return false;
    });

    $(`#${this.mode == 'main' ? 'temp' : 'main'}`).fadeOut(0);
  },

  watch: {
    mode(newMode, oldMode) {
      $(`#${oldMode}`).fadeOut(300, () => {
        $(`#${newMode}`).fadeIn(300);
      });
    },

    deleteId(newId, oldId) {
      if (this.mode == 'main') {
        this.mainLinks.forEach((link, index) => {
          if (link.id == newId) {
            this.mainLinks.splice(index, 1);
          }
        });
      } else {
        this.tempLinks.forEach((link, index) => {
          if (link.id == newId) {
            this.tempLinks.splice(index, 1);
          }
        });
      }
    },

    changeId(newId, oldId) {
      let target = this.mode == 'main'
        ? this.mainLinks.find(link => link.id == newId)
        : this.tempLinks.find(link => link.id == newId);

      // Apply changes
      Object.keys(this.$parent.linkChanges).forEach(key => {
        target[key] = this.$parent.linkChanges[key];
      });
    }
  },

  methods: {
    // Scroll back to top
    backToTop(e) {
      $('html, body').animate({scrollTop : 0}, 800);
		  return false;
    },

    // Parse time string to date
    parseDate(time) {
      if (!time) return 'none';
      const date = new Date(parseInt(time));
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },

    // Trigger info link modal
    displayInfo(link) {
      this.$parent.infoMode = 'info';
      Object.keys(link).forEach(key => {
        this.$parent.linkData[key] = link[key];
      });
      if (this.mode != 'temp') this.$parent.linkData.origin = 'none';
    },
  },
};

</script>

<style scoped>

.dropdown-menu li {
  float: left;
  width: 50%;
}

.panel-footer {
  text-align: center;
}

</style>
