<template>
  
</template>

<script lang="ts">

interface Meta {
    authors: string[],
    created: number,
    lastUpdated: Date
}

interface VideoYoutubeData {
  meta: Meta,
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