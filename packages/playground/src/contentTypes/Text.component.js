import GenericEntity from './GenericEntity.component';

import TextContent from '@/components/TextContent';

export default class Text extends GenericEntity {
  component = TextContent;
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

  get markdown() {
    return this._config.data.markdown;
  }
  set markdown(_markdown) {
    this._config.data.markdown = _markdown;
  }

  get wikitext() {
    return this._config.data.wikitext;
  }
  set wikitext(_wikitext) {
    this._config.data.wikitext = _wikitext;
  }

  get links() {
    return [];
    // return an array of links.
    // In a text element, these are markdown []() or wiki [[]] style mentions of other pieces of content within this.text
  }

  get data() {
    return {
      text: this.text,
      markdown: this.markdown,
      wikitext: this.wikitext,
    };
  }
}