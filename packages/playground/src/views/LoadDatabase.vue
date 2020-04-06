<template>
  <div class="home">
    <v-btn v-for="strat in loadStrategies" @click="()=>LoadWithStrategy(strat)" :key="strat.name">{{strat.name}}</v-btn>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import AppState from "../store";

// @ is an alias to /src
export default observer({
  data() {
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
    return {
      state: AppState,
      loadStrategies,
    }
  },
  methods: {
    LoadWithStrategy(strategy) {
      strategy.loader();
      this.$router.push('application')
    }
  },
  name: 'loadDatabase',
  components: {
  }
})
</script>
