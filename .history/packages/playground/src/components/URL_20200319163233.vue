<template>
  
</template>

<script lang="ts">

enum ContentType {
    Video,
    VideoYoutube
}

interface Meta {
    authors: string[],
    creationTime: number,
    lastUpdated: number,
    is: ContentType[],
}

interface URLData {
  meta: Meta,
  data: {
    url: string,
  }
}
export default {
    props: {
        content: {
            type: URLData,
            default: ""
        },
    },
}
</script>

<style>

</style>