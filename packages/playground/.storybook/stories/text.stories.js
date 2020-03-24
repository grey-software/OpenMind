/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import TextContent from '../../src/components/TextContent.vue'

export default {
  component: TextContent,
  title: 'Text',
  decorators: [withKnobs],
}

export const withRandomText = () => {
  let textKnob = text("Text", "Hello me!");
  return ({
    components: { TextContent },
    data() {
      return {
        content: {
          meta: {},
          data: {
            text: textKnob,
          }
        },
      }
    },
    template: `<TextContent :content="content" />`,
  })
}