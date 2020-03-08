<template>
  <div v-if="true">
    <!-- <pre><code class="language-json">{{schema.GenericEntitySchema}}</code></pre> -->
    <Prism language="javascript">{{ schema }}</Prism>
  </div>
  <div v-else>
    <Prism language="javascript">{{ example }}</Prism>
  </div>
</template>

<script>
import 'prismjs'
// import 'prismjs/themes/prism.css'

import Prism from 'vue-prism-component';

export default {
  props: {
    schema: Object,
    example: Object,
  },
  components: {
    Prism,
  }
}
</script>