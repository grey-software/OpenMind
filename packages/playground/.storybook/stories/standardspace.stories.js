/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import '../../src/plugins/axios.ts';

import StandardSpace from '../../src/components/StandardSpace.vue'

export default {
  component: StandardSpace,
  title: 'Standard Space',
  decorators: [withKnobs],
}

const StandardSpaceWithContent = content => () => ({
  components: { StandardSpace },
  props: {
    content: {
      default: {
        meta: {},
        data: {
          content,
        }
      }
    },
  },
  template: `<StandardSpace :content="content" style="height:100vh;width:100vw"/>`,
})

export const emptyStandardSpace = StandardSpaceWithContent({})
