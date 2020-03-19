<template>
  <div>{{JSON.stringify(test)}}</div>
  
</template>

<script lang="ts">
import ContentMeta from '../types/ContentMeta';

enum ContentType {
  Video,
  VideoYoutube
}

interface VideoYoutubeData {
  videoId: string;
}

interface VideoYoutubeContent {
  meta: ContentMeta;
  data: VideoYoutubeData;
}
export default {
  props: {
    content: {
      type: Object as () => VideoYoutubeContent,
      default: ""
    }
  },
  data: () => ({
    test: {a:1}
  })
};
</script>

<style>
</style>