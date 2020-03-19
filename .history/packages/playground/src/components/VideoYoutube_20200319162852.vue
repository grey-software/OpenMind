<template>
  
</template>

<script lang="ts">

interface Meta {
    authors: string[],
    created: Date
}
interface VideoYoutubeData {
  meta: IMeta,
  data: {
    videoId: string,
  }
}
export default {
    props: {
        content: {
            type: VideoYoutubeData,
            default: ""
        },
    },
}
</script>

<style>

</style>