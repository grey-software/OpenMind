<template>
  <div class="videoYoutube">
    <div class="contentHeading">
      
    </div>
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${content.data.videoId}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
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
      default: {}
    }
  }
};
</script>

<style>
.videoYoutube {
  border-radius: 12px;
  overflow: hidden; 

  display: inline-flex;
  flex-direction: column;

  box-shadow: 0 0 5px 0px;
}
.contentHeading {
  font-family: sans-serif;
  padding: 0.5em;
}
</style>