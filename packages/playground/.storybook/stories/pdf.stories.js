/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../../src/plugins/axios.ts';

import PDFContent from '../../src/components/PDF.vue'

export default {
  component: PDFContent,
  title: 'PDF'
}

const PDFComponentByURL = url => () => ({
  components: { PDFContent },
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
  template: `<PDFContent :content="content" />`,
})

export const withPDFUrl = PDFComponentByURL("http://bitcoin.org/bitcoin.pdf")
