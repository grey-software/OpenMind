/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import VideoYoutube from '../components/VideoYoutube.vue'

export default {
  component: VideoYoutube,
  title: 'VideoYoutube'
}

export const withText = () => ({
  components: { VideoYoutube },
  template: `<VideoYoutube :content="${content}"></VideoYoutube>`,
})
