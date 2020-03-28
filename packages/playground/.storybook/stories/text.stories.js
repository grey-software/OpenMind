/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import TextContent from '../../src/components/TextContent.vue'

export default {
  component: TextContent,
  title: 'Text',
  decorators: [withKnobs({escapeHTML: false})],
}

export const withRandomText = () => {
  return ({
    components: { TextContent },
    props: {
      content: {
        default: {
          meta: {},
          data: {
            text: text("Text", "Hello me!"),
          }
        }
      }
    },
    template: `<TextContent :content="content" />`,
  })
}