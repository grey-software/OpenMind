<template>
  <div>
    <div class="modeContainer">
      <button :class="['modeSwitch', {active: mode==1}]" v-on:click="mode = 1">Example</button>
      <button :class="['modeSwitch', {active: mode==0}]" v-on:click="mode = 0">Schema</button>
    </div>
    <div v-if="mode == MODES.schema">
      <!-- <pre><code class="language-json">{{schema.GenericEntitySchema}}</code></pre> -->
      <Prism language="javascript">{{ schema }}</Prism>
    </div>
    <div v-else-if="mode == MODES.example">
      <Prism language="javascript">{{ example }}</Prism>
    </div>
  </div>
</template>

<style>
pre {
  margin-top: 0px !important;
  border-radius: 0 !important;
}
.modeContainer {
  margin-top: 0.85rem;
  background: #282c34;
}
.modeSwitch {
  transition: 0.3s all;
  background: none;
  color: white;
  border: none;
  padding: 1em;
  font-family: monospace;
  outline: none;
  cursor: pointer;
}
.modeSwitch.active {
  color: orange
}
</style>

<script>
import 'prismjs'
// import 'prismjs/themes/prism.css'

import Prism from 'vue-prism-component';

export default {
  props: {
    schema: Object,
    example: Object,
  },
  data: () => {
    return {
      mode: 1,
      MODES: {
        schema: 0,
        example: 1,
      },
    }
  },
  components: {
    Prism,
  }
}
</script>