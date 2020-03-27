/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import '../../src/plugins/axios.ts';

import UrlContent from '../../src/components/UrlContent.vue'

export default {
  component: UrlContent,
  title: 'URL',
  decorators: [withKnobs],
}

const URLComponentByURL = url => () => {
  return {
    components: { UrlContent },
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
    template: `<UrlContent :content="content" />`,
  }
}

export const withBlogUrl = URLComponentByURL("https://blog.ycombinator.com/why-toys/")
export const withVideoUrl = URLComponentByURL("https://www.youtube.com/watch?v=Mx3UPfzGeN4")