<template>
  <div class="home">
    <button @click="state.loadOpenMind.example">Example</button>
    <button @click="state.loadOpenMind.github">GitHub</button>
    <button @click="state.loadOpenMind.localStorage">Local storage</button>
    <button @click="state.loadOpenMind.file">File</button>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import AppState from "../store";

// @ is an alias to /src
export default observer({
  data() {
    return {
      state: AppState,
    }
  },
  name: 'loadDatabase',
  components: {
  }
})
</script>
