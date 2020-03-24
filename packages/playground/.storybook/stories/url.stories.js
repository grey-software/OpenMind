/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import '../../src/plugins/axios.ts';

import URLContent from '../../src/components/URLContent.vue'

export default {
  component: URLContent,
  title: 'URL',
  decorators: [withKnobs],
}

const URLComponentByURL = url => () => {
  const urlKnob = text("URL", url);
  return {
    components: { URLContent },
    data() {
      return {
        content: {
          meta: {},
          data: {
            url: urlKnob,
          }
        },
      }
    },
    template: `<URLContent :content="content" />`,
  }
}

export const withBlogUrl = URLComponentByURL("https://blog.ycombinator.com/why-toys/")
export const withVideoUrl = URLComponentByURL("https://www.youtube.com/watch?v=Mx3UPfzGeN4")