class GenericSpace extends GenericEntity {
  constructor(config) {
    // validate config against GenericSpaceSchema
  }
  get type() {
    return ['Space'];
  }
  load() {}
  unload() {}
}
