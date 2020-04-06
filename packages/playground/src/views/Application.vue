<template>
  <div class="application" v-if="state.db">
    <div class="layers">
      <div v-for="layer in state.db.layers" :key="layer.id" class="layer">
        <component :is="layer.component" :content="layer" :style="layer.componentStyle" />
      </div>
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

<style scoped>
.layer {
  position: fixed;
}
</style>