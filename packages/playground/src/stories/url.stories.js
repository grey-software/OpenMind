/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../plugins/axios';

import URLContent from '../components/URLContent.vue'

export default {
  component: URLContent,
  title: 'URL'
}

const URLComponentByURL = url => () => ({
  components: { URLContent },
  data() {
    return {
      content: {
        meta: {},
        data: {
          url,
        }
      },
    }
  },
  template: `<URLContent :content="content" />`,
})

export const withBlogUrl = URLComponentByURL("https://blog.ycombinator.com/why-toys/")
export const withVideoUrl = URLComponentByURL("https://www.youtube.com/watch?v=Mx3UPfzGeN4")