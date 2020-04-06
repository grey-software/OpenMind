<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
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
        Open Mind
      </div>
      <v-spacer></v-spacer>
      {{state.db ? state.db.name : ''}}

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
  }
});
</script>
