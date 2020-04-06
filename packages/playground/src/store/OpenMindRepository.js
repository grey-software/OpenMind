import { action, computed, observable } from "mobx";

class OpenMindRepository {
  lastUpdated = null;
  currentSpace = null;
  constructor(config) {
    // initialize OpenMindRepository
      // initialize content and spaces
      // load default space
    this._config = config;
    this._content = {};
    this.lastUpdated = Date.now();
    this.initializeContent();
  }
  initializeContent() {
    for (let id in this._config.content) {
      this._content[id] = this._config.content[id];
    }
  }
  get id() {
    /** Gets OpenMind repository id */
    return this._config.id;
  }
  get name() {
    /** Gets OpenMind repository name */
    return this._config.name;
  }
  set name(_name) {
    /** Sets OpenMind repository name */
    this._config.name = _name;
  }
  get content() {
    /**
     * Returns a map of id: Content
     * @return {id: <GenericEntityInterface>}
     */
    return this._content;
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
  unloadSpace() {
    if (!this.currentSpace) return;
    this.currentSpace.unload();
    this.currentSpace = null;
  }

  get spaces() {
    return {} //temp
    // return a map of {id: <GenericSpaceInterface>}
  }
  getContentByType(type) {
    // return a map of {id: <GenericEntityInterface>}
  }
}

export default OpenMindRepository;