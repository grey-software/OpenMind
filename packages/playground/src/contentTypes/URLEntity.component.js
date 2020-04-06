import GenericEntity from './GenericEntity.component';

export default class URLEntity extends GenericEntity {
  // URL is reserved
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

  get data() {
    return {
      url: this.url,
    };
  }
}
