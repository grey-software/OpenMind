/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import URLContent from '../components/URLContent.vue'

export default {
  component: URLContent,
  title: 'URL'
}

let content = {
  meta: {},
  data: {
    url: "https://blog.ycombinator.com/why-toys/"
  }
}


export const withBlogUrl = () => ({
  components: { URLContent },
  data() {
    return {
      content,
    }
  },
  template: `<URLContent :content="content" />`,
})
