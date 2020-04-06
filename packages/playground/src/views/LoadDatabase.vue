<template>
  <div class="home">
    <v-btn v-for="strat in loadStrategies" @click="()=>LoadWithStrategy(strat)" :key="strat.name">{{strat.name}}</v-btn>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import AppState from "../store";

/**
 * The different ways an OpenMind repository can be loaded 
 */
let loadStrategies = [
  {
    name: "Example",
    loader: AppState.loadOpenMind.example
  },
  {
    name: "GitHub",
    loader: AppState.loadOpenMind.github
  },
  {
    name: "localStorage",
    loader: AppState.loadOpenMind.localStorage
  },
  {
    name: "File",
    loader: AppState.loadOpenMind.file
  }
];

// @ is an alias to /src
export default observer({
  data() {
    return {
      state: AppState,
      loadStrategies,
    }
  },
  methods: {
    LoadWithStrategy(strategy) {
      strategy.loader();
      this.$router.push('app')
    }
  },
  name: 'loadDatabase',
  components: {
  }
})
</script>
