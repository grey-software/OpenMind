<template>
  <div>
    {{ogData}}
  </div>
</template>

<script lang="ts">
import ContentMeta from '../types/ContentMeta';

enum ContentType {
  url
}

const scraper = `http://us-central1-openmindstandard.cloudfunctions.net/api/opengraph/scrape`;

interface URLData {
  meta: ContentMeta,
  data: {
    url: string,
  }
}
export default {
    async mounted() {
      let url = this.content.data.url;
      let {data} = await this.$http(scraper, {
        method: 'POST',
        data: {
          url,
        }
      });
      this.$data.ogData = data;
    },
    props: {
        content: {
            type: Object as () => URLData,
            default: ""
        },
    },
    data() {
      return {
        ogData: {},
      }
    }
}
</script>

<style>

</style>