class OpenMindRepository {
  lastUpdated = null;
  currentSpace = null;
  constructor(config) {
    // initialize OpenMindRepository
      // initialize content and spaces
      // load default space
    this.lastUpdated = Date.now();
  }
  get content() {
    // return a map of {id: <GenericEntityInterface>}
  }

  loadSpace(space) {
    // precondition: space is an instance of a class that implements GenericSpace
    space.load()
  }

  get spaces() {
    // return a map of {id: <GenericSpaceInterface>}
  }
  getContentByType(type) {
    // return a map of {id: <GenericEntityInterface>}
  }
}