<template>
  
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
    props: {
        content: {
            type: Object as () => TextData,
            default: ""
        },
    },
}
</script>

<style>

</style>