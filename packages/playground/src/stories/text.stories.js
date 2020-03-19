/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import TextContent from '../components/TextContent.vue'

export default {
  component: TextContent,
  title: 'Text'
}

let content = {
  meta: {},
  data: {
    text: "Hello me!"
  }
}


export const withRandomText = () => ({
  components: { TextContent },
  data() {
    return {
      content,
    }
  },
  template: `<TextContent :content="content" />`,
})
