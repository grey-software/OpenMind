import GenericEntity from './GenericEntity.component';

export default class Text extends GenericEntity {
  constructor(config) {
    super(config);
  }
  get type() {
    return ['Text'];
  }

  get text() {
    return this._config.data.text;
  }
  set text(_text) {
    this._config.data.text = _text;
  }

  get links() {
    return [];
    // return an array of links.
    // In a text element, these are markdown []() or wiki [[]] style mentions of other pieces of content within this.text
  }

  get data() {
    return {
      text: this.text,
    };
  }
}