<template>
  <v-card class="mx-auto" max-width="373">
    <v-card-actions>
      <v-spacer />
      <v-btn v-if="!editing" @click="editing = true" icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn v-if="editing" @click="editing = false" icon>
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-card-actions>
    <div v-show="!editing">
      <v-card-text>
        <editor-content :editor="editor" />
      </v-card-text>
    </div>
    <div v-show="editing">
      <text-content-editor v-on:new-text="onNewText" :text="content.data.text" />
    </div>
  </v-card>
</template>

<script lang="ts">
import ContentMeta from "../types/ContentMeta";
import TextContentEditor from "./TextContentEditor.vue";
import { EditorContent, Editor } from "tiptap";

enum ContentType {
  text
}

interface TextData {
  meta: ContentMeta;
  data: {
    text: string;
  };
}

export default {
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
    }
  },
  components: {
    TextContentEditor,
    EditorContent
  },
  data() {
    return {
      editing: false,
      editor: new Editor()
    };
  },
  mounted() {
    this.editor = new Editor({
      content: this.content.data.text,
      editable: false
    });
  },
  methods: {
    onNewText(text) {
      this.editor.setContent(text);
    }
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style>
.ProseMirror:focus {
  outline: none;
}
</style>
