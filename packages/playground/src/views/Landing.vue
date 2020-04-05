<template>
  <div class="home">
    {{state.test}}
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import AppState from "../store";

// @ is an alias to /src
export default observer({
  data() {
    return {
      state: new AppState(),
    }
  },
  mounted() {
    console.log(this.state)
  },
  name: 'landing',
  components: {
  }
})
</script>
