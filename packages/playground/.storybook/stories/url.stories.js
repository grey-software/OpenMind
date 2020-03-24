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
  return {
    components: { URLContent },
    props: {
      content: {
        default: {
          meta: {},
          data: {
            url: text("URL", url),
          }
        },
      }
    },
    template: `<URLContent :content="content" />`,
  }
}

export const withBlogUrl = URLComponentByURL("https://blog.ycombinator.com/why-toys/")
export const withVideoUrl = URLComponentByURL("https://www.youtube.com/watch?v=Mx3UPfzGeN4")