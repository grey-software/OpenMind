class Text extends GenericEntity {
  get type() {
    return ['Text'];
  }

  get text() {}
  set text(_text) {}

  get links() {
    // return an array of links.
    // In a text element, these are markdown []() or wiki [[]] style mentions of other pieces of content within this.text
  }

  get data() {
    return {
      text: this.text,
    };
  }
}