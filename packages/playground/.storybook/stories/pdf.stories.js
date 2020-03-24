/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import '../../src/plugins/axios.ts';

import PDFContent from '../../src/components/PDF.vue'

export default {
  component: PDFContent,
  title: 'PDF',
  decorators: [withKnobs],
}

const PDFComponentByURL = url => () => ({
  components: { PDFContent },
  props: {
    content: {
      default: {
        meta: {},
        data: {
          url: text('PDF URL', url),
        }
      }
    },
  },
  template: `<PDFContent :content="content" />`,
})

export const withPDFUrl = PDFComponentByURL("http://bitcoin.org/bitcoin.pdf")
