<template>
  <div>
    <v-card class="mx-auto" max-width="344">


      <v-card-text>{{content.data.text}}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
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

<style>

</style>