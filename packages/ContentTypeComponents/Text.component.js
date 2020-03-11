class Text extends GenericEntity {
  get type() {
    return ['Text'];
  }

  get text() {}
  set text(_text) {}

  get data() {
    return {
      text: this.text,
    };
  }
}