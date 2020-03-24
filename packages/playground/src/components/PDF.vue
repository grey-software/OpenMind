<template>
  <div>
    <embed type="application/pdf"
       :src="content.data.url"
       width="1000"
       height="700">
  </div>
</template>

<script lang="ts">
import ContentMeta from "../types/ContentMeta";

// const downloader = `https://us-central1-openmindstandard.cloudfunctions.net/api/pdf/download`;

interface PDFData {
  meta: ContentMeta;
  data: {
    url: string;
  };
}
export default {
  methods: {
    navigateToUrl() {
      window.location = this.ogData.ogUrl
    }
  },
  async mounted() {
    // let url = this.content.data.url;
    // let { data } = await this.$http(url, {
    //   method: "GET"
    // });
    // console.log(data)
    // this.$data.ogData = data.data;
    // this.$data.loaded = true;
  },
  props: {
    content: {
      type: Object as () => PDFData,
      default: ""
    }
  },
  data() {
    return {
      ogData: {},
      show: false,
      loaded: false
    };
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 32px !important;
}
</style>