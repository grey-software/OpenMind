/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import VideoYoutube from '../components/VideoYoutube.vue'

export default {
  component: VideoYoutube,
  title: 'VideoYoutube'
}

const content = {
  data: {
    videoId: "3XkL0qQ21Oo"
  }
}


export const withText = () => ({
  components: { VideoYoutube },
  data() {
    return {
      content: {
        data: {
          videoId: "3XkL0qQ21Oo"
        }
      }
    },
      template: `<VideoYoutube :content="content"></VideoYoutube>`,
})
