import { action, computed, observable } from "mobx";

import { InitializeContent } from './InitializeContent';

class OpenMindRepository {
  lastUpdated = null;
  currentSpace = null;
  constructor(config) {
    this._config = config;
    this._content = {};
    this._loadedContent = [];
    this.lastUpdated = Date.now();
    this.initializeContent();
    // load default space
  }
  initializeContent() {
    for (let id in this._config.content) {
      let content = this._config.content[id];
      this._content[id] = InitializeContent(content);
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

  get layers() {
    let layers = []
    if (this.currentSpace) layers.push(this.currentSpace)
    layers.push(...this._loadedContent);
    return layers;
  }

  get currentSpaceName() {
    if (!this.currentSpace) return '';
    return this.currentSpace.id;
  }

  createContent(content) {
    /**
     * @param {GenericEntityInterface} content
     * Adds content to the repository. Content could be a space.
     */
  }
  changeSpace(space) {
    this.unloadSpace()
    this.loadSpace(space)
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
  loadContent(content) {
    if (this._loadedContent.find(c => c.id == content.id)) return;
    this._loadedContent.push(content);
  }
}

export default OpenMindRepository;