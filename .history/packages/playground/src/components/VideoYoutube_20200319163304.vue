<template></template>

<script lang="ts">
enum ContentType {
  Video,
  VideoYoutube
}

interface Meta {
  authors: string[];
  creationTime: number;
  lastUpdated: number;
  is: ContentType[];
}

interface VideoYoutubeData {
  videoId: string;
}

interface VideoYoutubeContent {
  meta: Meta;
  data: VideoYoutubeData;
}
export default {
  props: {
    content: {
      type: () => VideoYoutubeContent,
      default: ""
    }
  }
};
</script>

<style>
</style>