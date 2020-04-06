<template>
  <div class="application">
    
  </div>
</template>

<script>
import AppState from "../store";
// @ is an alias to /src
export default {
  name: 'application',
  mounted() {
    if (!AppState.db) {
      this.$router.push('load')
    }
  },
  components: {
  },
  data: () => ({
    state: AppState,
  }),
}
</script>
