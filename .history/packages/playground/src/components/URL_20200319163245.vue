<template>
  
</template>

<script lang="ts">

enum ContentType {
    
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