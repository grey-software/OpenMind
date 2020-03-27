<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-list-item class="header"></v-list-item>
      <v-list-item>
        <v-card-text v-if="content.data.text">{{content.data.text}}</v-card-text>
        
        <v-card-text v-else-if="content.data.markdown">
          <vue-markdown :source="content.data.markdown"></vue-markdown>
        </v-card-text>

        <v-card-text v-else-if="content.data.wikitext">
          <vue-wikitext :source="content.data.wikitext"></vue-wikitext>
        </v-card-text>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
import VueMarkdown from 'vue-markdown';
import VueWikitext from 'vue-wikitext';

import ContentMeta from '../types/ContentMeta';

enum ContentType {
  text,
}

interface TextData {
  meta: ContentMeta,
  data: {
    text: string,
    markdown: string,
    wikitext: string,
  }
}

export default {
  components: {
    'vue-markdown': VueMarkdown,
    'vue-wikitext': VueWikitext,
  },
  watch: {
    content: {
      deep: true,
      handler: (val, oldVal) => {}
    }
  },
  props: {
    content: {
      type: Object as () => TextData,
      default: {}
    },
  },
}
</script>

<style scoped>
.v-card {
  border-radius: 32px !important;
}
.header {
  border-bottom: 1px solid #ddd;
}
</style>