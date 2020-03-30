<template>
  <div>
    
  </div>
</template>


<script lang="ts">
import _ from "lodash";

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
  async mounted() {},
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

</style>