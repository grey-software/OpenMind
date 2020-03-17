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
  createContent(content) {
    /**
     * @param {GenericEntityInterface} content
     * Adds content to the repository. Content could be a space.
     */
  }

  loadSpace(space) {
    // precondition: space is an instance of a class that implements GenericSpace
    space.load();
    this.currentSpace = space;
  }

  get spaces() {
    // return a map of {id: <GenericSpaceInterface>}
  }
  getContentByType(type) {
    // return a map of {id: <GenericEntityInterface>}
  }
}