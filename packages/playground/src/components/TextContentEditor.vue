<template>
  <tiptap-vuetify output-format="html" v-model="textContent" :extensions="extensions" />
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from "tiptap-vuetify";

export default {
  components: { TiptapVuetify },
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  watch: {
    textContent(newText) {
      this.$emit("new-text", newText);
    }
  },
  created() {
    this.textContent = this.text;
  },
  data: () => ({
    textContent: "",
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ]
  })
};
</script>