import GenericEntity from './GenericEntity.component';

export default class URLEntity extends GenericEntity {
  // URL is reserved
  constructor() {
    // validate config against URLSchema
  }
  get type() {
    return ['URL'];
  }

  get url() {}
  set url(_url) {}

  get data() {
    return {
      url: this.url,
    };
  }
}
