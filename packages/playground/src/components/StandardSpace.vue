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
    addNode(contentId, {position}) {
      this.cyto.add({
        data: {id: contentId},
        position
      })
    },
    updateSpace() {
      for (let [contentId, content] of Object.entries(this.content.data.content)) {
        this.addNode(contentId, content);
      }
    },
    bindHandlers() {
      this.cyto.on('tap', 'node', e=>console.log(e));
      this.cyto.on('tap', 'edge', e=>console.log(e));
      this.cyto.on('tap', e => {
        if (e.target !== this.cyto) return;
        console.log(e)
      });
    },
    load() {
      this.updateSpace();
      this.bindHandlers();
      this.cyto.center();
      console.log(this.cyto)
    },
    unload() {
      this.cyto.elements().remove();
    },
  },
  async mounted() {
    let cyto = new cytoscape({
      container: this.$refs.cytoRef
    });
    this.cyto = cyto;
    this.load();
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