<template>
  
</template>

<script lang="ts">
import ContentMeta from '../types/ContentMeta';

enum ContentType {
    url
}

interface URLData {
  meta: ContentMeta,
  data: {
    url: string,
  }
}
export default {
    props: {
        content: {
            type: Object as () => URLData,
            default: ""
        },
    },
}
</script>

<style>

</style>