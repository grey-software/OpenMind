<template>
  <div>
    <div id="cyto" ref="cytoRef" />
  </div>
</template>


<script lang="ts">
import _ from "lodash";
import cytoscape from 'cytoscape';

import ContentMeta from "../types/ContentMeta";

interface StandardSpaceData {
  meta: ContentMeta;
  data: {
    
  };
}
export default {
  methods: {
    updateSpace: () => {

    }
  },
  async mounted() {
    let cyto = new cytoscape({
      container: this.$refs.cytoRef
    });
    this.cyto = cyto;
  },
  computed: {},
  watch: {
    content: {
      deep: true,
      handler: async function(val, oldVal) {
        if (val !== oldVal) await this.updateSpace();
      }
    }
  },
  props: {
    content: {
      type: Object as () => StandardSpaceData,
      default: ""
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
#cyto {
  height: 100%;
  width: 100%;
}
</style>