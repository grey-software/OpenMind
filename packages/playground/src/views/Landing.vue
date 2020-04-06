<template>
  <div class="home">
    
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
  mounted() {
    if (!this.state.db) {
      this.$router.push('load');
    }
  },
  name: 'landing',
  components: {
  }
})
</script>
