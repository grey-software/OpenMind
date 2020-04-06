import { action, computed, observable } from "mobx";

class OpenMindRepository {
  lastUpdated = null;
  currentSpace = null;
  constructor(config) {
    this._config = config;
    this._content = {};
    this.lastUpdated = Date.now();
    this.initializeContent();
    // load default space
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
  getContentByType(type) {
    let content = {}
    for (let id in this._content) {
      let c = this._content[id];
      if (c.meta.is.indexOf(type) !== -1) content[id] = c;
    }
    return content;
  }
  get spaces() {
    /**
     * Returns a map of id: Space
     * @return {id: <GenericSpaceInterface>}
     */
    return this.getContentByType('Space');
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
}

export default OpenMindRepository;