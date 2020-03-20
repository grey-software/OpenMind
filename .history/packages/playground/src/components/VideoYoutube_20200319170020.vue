<template>
  {{JSON.stringify(content)}}
  <iframe
    width="560"
    height="315"
    :src="`https://www.youtube.com/embed/${content.data.videoId}`"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
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
  }
};
</script>

<style>
</style>