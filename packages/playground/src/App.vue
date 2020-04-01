<template>
  <v-app>
    <v-content>
      <v-container>
        <text-content :content="content" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import TextContent from "@/components/TextContent.vue";

export default {
  name: "App",
  components: {
    TextContent
  },
  data() {
    return {
      content: {
        meta: {},
        data: {
          text: `<p>This is some inserted text. 👋</p><p></p><p>And I wonder how it looks?</p>`
        }
      }
    };
  }
};
</script>
