<template>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/3XkL0qQ21Oo"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

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