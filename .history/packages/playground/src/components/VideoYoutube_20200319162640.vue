<template>
  
</template>

<script lang="ts">
interface VideoYoutubeData {
    videoId: string
}
export default {
    props: {
        data: {
            type: VideoYoutubeData,
            default: ""
        },
    },
}
</script>

<style>

</style>