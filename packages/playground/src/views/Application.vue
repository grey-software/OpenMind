<template>
  <div class="application" v-if="state.db">
    <div v-for="layer in state.db.layers" :key="layer.id">
      <component :is="layer.component" :content="layer" :style="layer.componentStyle" />
    </div>
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
