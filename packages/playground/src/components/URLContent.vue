<template>
  <div>
    <v-card v-if="loaded" class="mx-auto" max-width="344">
      <v-img :src="ogData.twitterImage.url" height="200px" contain></v-img>

      <v-card-title>{{ogData.ogTitle}}</v-card-title>

      <v-card-subtitle>{{ogData.ogDescription}}</v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text rounded color="primary" class="mr-2" @click="navigateToUrl">
          <v-icon class="mr-2">mdi-web</v-icon>Visit
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import ContentMeta from "../types/ContentMeta";

const scraper = `https://us-central1-openmindstandard.cloudfunctions.net/api/opengraph/scrape`;

interface URLData {
  meta: ContentMeta;
  data: {
    url: string;
  };
}
export default {
  methods: {
    navigateToUrl() {
      window.location = this.ogData.ogUrl
    },
    async updateUrl() {
      this.$data.loaded = false;
      let { data } = await this.$http(scraper, {
        method: "POST",
        data: {
          url: this.content.data.url,
        }
      });
      this.$data.ogData = data.data;
      this.$data.loaded = true;
    }
  },
  async mounted() {
    await this.updateUrl();
  },
  watch: {
    content: {
      deep: true,
      handler: async function (val, oldVal) {
        if (val!==oldVal) await this.updateUrl()
      },
    }
  },
  props: {
    content: {
      type: Object as () => URLData,
      default: {}
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