<template>
  
</template>

<script lang="ts">

enum ContentTypes {
    Video,
    VideoYoutube
}

interface Meta {
    authors: string[],
    creationTime: number,
    lastUpdated: number,
    is: string[],
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