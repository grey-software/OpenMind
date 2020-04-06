import GenericEntity from './GenericEntity.component';

import UrlContent from '@/components/UrlContent';

// URL is reserved
export default class URLEntity extends GenericEntity {
  component = UrlContent;  
  constructor(config) {
    // validate config against URLSchema
    super(config);
  }
  get type() {
    return ['URL'];
  }

  get url() {
    return this._config.data.url;
  }
  set url(_url) {
    this._config.data.url = _url;
  }

  get label() {
    return this._config.data.url;
  }

  get data() {
    return {
      url: this.url,
    };
  }
}
