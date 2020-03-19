class GenericSpace extends GenericEntity {
  constructor(config) {
    // validate config against GenericSpaceSchema
  }
  get type() {
    return ['Space'];
  }
  load() {
    // Defines how the space will be loaded
    throw new Error("The method 'load' must be implemented")
  }
  unload() {
    // Unloads the space and performs any clean up.
    throw new Error("The method 'unload' must be implemented")
  }
}
