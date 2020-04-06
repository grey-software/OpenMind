import GenericEntity from './GenericEntity.component';

import PdfContent from '@/components/PdfContent';

export default class PDF extends GenericEntity {
  component = PdfContent;
  componentStyle = "width:100vw"
  constructor(config) {
    // validate config against PDFSchema
    super(config);
  }
  get type() {
    return ['PDF'];
  }

  get url() {
    return this._config.data.url;
  }
  set url(_url) {
    this._config.data.url = _url;
  }

  get data() {
    return {
      url: this.url,
    };
  }
}
