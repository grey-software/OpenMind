/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import VideoYoutube from '../../src/components/VideoYoutube.vue'

export default {
  component: VideoYoutube,
  title: 'VideoYoutube'
}

let content = {
  data: {
    videoId: "3XkL0qQ21Oo"
  }
}

export const withRandomVideo = () => ({
  components: { VideoYoutube },
  data() {
    return {
      content,
    }
  },
  template: `<VideoYoutube :content="content" />`,
})
