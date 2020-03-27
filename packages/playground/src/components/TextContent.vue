<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-list-item class="header"></v-list-item>
      <v-list-item>
        <v-card-text>{{content.data.text}}</v-card-text>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
import ContentMeta from '../types/ContentMeta';

enum ContentType {
  text
}

interface TextData {
  meta: ContentMeta,
  data: {
    text: string,
  }
}

export default {
  watch: {
    content: {
      deep: true,
      handler: (val, oldVal) => {}
    }
  },
  props: {
    content: {
      type: Object as () => TextData,
      default: {}
    },
  },
}
</script>

<style scoped>
.v-card {
  border-radius: 32px !important;
}
.header {
  border-bottom: 1px solid #ddd;
}
</style>