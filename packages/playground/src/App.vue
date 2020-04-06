<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      fixed
    >
      <div class="d-flex align-center">
        <v-img
          alt="OpenMind Logo"
          class="shrink mr-2"
          contain
          src="/apple-touch-icon.png"
          transition="scale-transition"
          width="40"
        />
        {{state.db ? state.db.name : 'Open Mind'}}
        {{(state.db && state.db.currentSpace) ? `/ ${state.db.currentSpaceName}`: ''}}
      </div>
      <v-spacer></v-spacer>
      <div v-if="state.db">
        <v-overflow-btn
            class="space-select"
            :items="Object.entries(state.db.spaces)"
            :label="state.db.currentSpaceName"
            editable
            item-text="1.name"
            item-value="1"
            @change="space=>state.db.changeSpace(space)"
          ></v-overflow-btn>
      </div>
      <!-- <v-select 
        class="space-select"
        v-if="state.db"
        :items="Object.entries(state.db.spaces)"
        item-text="1.name"
        item-value="1"
        @change="space=>state.db.changeSpace(space)"
      /> -->
      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<style>
.space-select {
  width: 15em;
}
</style>

<script lang="ts">
import Vue from 'vue';
import AppState from "./store";

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    state: AppState,
  }),
  mounted() {
    window.AppState = AppState;
    window.addEventListener('keydown', e=>AppState.keyboardEvents.next(e));
  }
});
</script>
