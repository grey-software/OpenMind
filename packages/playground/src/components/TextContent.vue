<template>
  <div>
    {{content.data.text}}
    {{test}}
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