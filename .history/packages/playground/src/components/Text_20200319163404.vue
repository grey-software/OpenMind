<template>
  
</template>

<script lang="ts">

enum ContentType {
    text
}

interface Meta {
    authors: string[],
    creationTime: number,
    lastUpdated: number,
    is: ContentType[],
}

interface TextData {
  meta: Meta,
  data: {
    text: string,
  }
}
export default {
    props: {
        content: {
            type: TextData,
            default: ""
        },
    },
}
</script>

<style>

</style>