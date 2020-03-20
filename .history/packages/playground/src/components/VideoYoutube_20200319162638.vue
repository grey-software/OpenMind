<template>
  
</template>

<script lang="ts">
interface VideoYoutubeData {
    videoId: String
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