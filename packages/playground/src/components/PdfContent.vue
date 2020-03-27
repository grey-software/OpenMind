<template>
  <div>
    <v-card class="mx-auto" v-if="mode == 'pdf'">
      <v-list-item>
        <v-btn icon color="pink" @click="closePdf">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-list-item-title>{{content.data.url}}</v-list-item-title>
      </v-list-item>
      <div>
        <embed type="application/pdf"
          :src="content.data.url"
          width="100%"
          height="700px"
        >
      </div>
      <v-list-item />
    </v-card>    
    <v-card class="mx-auto" v-else-if="mode == 'preview'" max-width="344">
      <v-list-item></v-list-item>
      <div class="pdfIcon" @click="openPdf">
        <img  src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0UyRTVFNzsiIGQ9Ik0xMjgsMGMtMTcuNiwwLTMyLDE0LjQtMzIsMzJ2NDQ4YzAsMTcuNiwxNC40LDMyLDMyLDMyaDMyMGMxNy42LDAsMzItMTQuNCwzMi0zMlYxMjhMMzUyLDBIMTI4eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQjBCN0JEOyIgZD0iTTM4NCwxMjhoOTZMMzUyLDB2OTZDMzUyLDExMy42LDM2Ni40LDEyOCwzODQsMTI4eiIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojQ0FEMUQ4OyIgcG9pbnRzPSI0ODAsMjI0IDM4NCwxMjggNDgwLDEyOCAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0YxNTY0MjsiIGQ9Ik00MTYsNDE2YzAsOC44LTcuMiwxNi0xNiwxNkg0OGMtOC44LDAtMTYtNy4yLTE2LTE2VjI1NmMwLTguOCw3LjItMTYsMTYtMTZoMzUyYzguOCwwLDE2LDcuMiwxNiwxNiAgVjQxNnoiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTEwMS43NDQsMzAzLjE1MmMwLTQuMjI0LDMuMzI4LTguODMyLDguNjg4LTguODMyaDI5LjU1MmMxNi42NCwwLDMxLjYxNiwxMS4xMzYsMzEuNjE2LDMyLjQ4ICAgYzAsMjAuMjI0LTE0Ljk3NiwzMS40ODgtMzEuNjE2LDMxLjQ4OGgtMjEuMzZ2MTYuODk2YzAsNS42MzItMy41ODQsOC44MTYtOC4xOTIsOC44MTZjLTQuMjI0LDAtOC42ODgtMy4xODQtOC42ODgtOC44MTZWMzAzLjE1MnogICAgTTExOC42MjQsMzEwLjQzMnYzMS44NzJoMjEuMzZjOC41NzYsMCwxNS4zNi03LjU2OCwxNS4zNi0xNS41MDRjMC04Ljk0NC02Ljc4NC0xNi4zNjgtMTUuMzYtMTYuMzY4SDExOC42MjR6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTE5Ni42NTYsMzg0Yy00LjIyNCwwLTguODMyLTIuMzA0LTguODMyLTcuOTJ2LTcyLjY3MmMwLTQuNTkyLDQuNjA4LTcuOTM2LDguODMyLTcuOTM2aDI5LjI5NiAgIGM1OC40NjQsMCw1Ny4xODQsODguNTI4LDEuMTUyLDg4LjUyOEgxOTYuNjU2eiBNMjA0LjcyLDMxMS4wODhWMzY4LjRoMjEuMjMyYzM0LjU0NCwwLDM2LjA4LTU3LjMxMiwwLTU3LjMxMkgyMDQuNzJ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTMwMy44NzIsMzEyLjExMnYyMC4zMzZoMzIuNjI0YzQuNjA4LDAsOS4yMTYsNC42MDgsOS4yMTYsOS4wNzJjMCw0LjIyNC00LjYwOCw3LjY4LTkuMjE2LDcuNjggICBoLTMyLjYyNHYyNi44NjRjMCw0LjQ4LTMuMTg0LDcuOTItNy42NjQsNy45MmMtNS42MzIsMC05LjA3Mi0zLjQ0LTkuMDcyLTcuOTJ2LTcyLjY3MmMwLTQuNTkyLDMuNDU2LTcuOTM2LDkuMDcyLTcuOTM2aDQ0LjkxMiAgIGM1LjYzMiwwLDguOTYsMy4zNDQsOC45Niw3LjkzNmMwLDQuMDk2LTMuMzI4LDguNzA0LTguOTYsOC43MDRoLTM3LjI0OFYzMTIuMTEyeiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOiNDQUQxRDg7IiBkPSJNNDAwLDQzMkg5NnYxNmgzMDRjOC44LDAsMTYtNy4yLDE2LTE2di0xNkM0MTYsNDI0LjgsNDA4LjgsNDMyLDQwMCw0MzJ6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
      </div>
      <div>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-file-pdf</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{content.data.url}}</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="CreationDate">
          <v-list-item-icon>
            <v-icon>mdi-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{CreationDate}}</v-list-item-subtitle>
        </v-list-item>
      </div>
      <!--<div>Icons made by <a href="https://www.flaticon.com/authors/dimitry-miroliubov" title="Dimitry Miroliubov">Dimitry Miroliubov</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>-->
      <v-list-item></v-list-item>
    </v-card>
  </div>
</template>


<script lang="ts">
import moment from 'moment';
import _ from 'lodash';

import ContentMeta from "../types/ContentMeta";

const metadataURL = `https://us-central1-openmindstandard.cloudfunctions.net/api/pdf/metadata`;

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
    },
    closePdf(e) {
      this.mode = 'preview';
      e.stopPropagation();
    },
    openPdf(e) {
      this.mode = 'pdf';
      e.stopPropagation();
    },
    async updatePdfMetadata() {
      this.$data.loadedMeta = false;
      let url = this.content.data.url;
      let { data } = await this.$http(`${metadataURL}?url=${url}`, {
        method: "GET",
      });
      this.pdfMeta = data;
      this.loadedMeta = true;
    }
  },
  async mounted() {
    this.updatePdfMetadata();
  },
  computed: {
    CreationDate() {
      let datestring = _.get(this.pdfMeta, 'info.CreationDate', '');
      if (!datestring) return '';
      let time = moment(datestring, "  YYYYMMDDHHmmSSZ") //OHH'mm'
      return time.format('DD MMM YYYY');
    }
  },
  watch: {
    content: {
      deep: true,
      handler: async function (val, oldVal) {
        if (val!==oldVal) await this.updatePdfMetadata()
      },
    }
  },
  props: {
    content: {
      type: Object as () => PDFData,
      default: ""
    }
  },
  data() {
    return {
      loadedMeta: false,
      mode: 'preview',
      pdfMeta: {},
    };
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 32px !important;
}
.pdfIcon {
  display: flex;
  justify-content: center;
  
  cursor: pointer;
}
.pdfIcon img {
  height: 60px;
}
</style>