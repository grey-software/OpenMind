/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import '../../src/plugins/axios.ts';

import PdfContent from '../../src/components/PdfContent.vue'

export default {
  component: PdfContent,
  title: 'PDF',
  decorators: [withKnobs],
}

const PDFComponentByURL = url => () => ({
  components: { PdfContent },
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
  template: `<PdfContent :content="content" />`,
})

export const withPDFUrl = PDFComponentByURL("http://bitcoin.org/bitcoin.pdf")
