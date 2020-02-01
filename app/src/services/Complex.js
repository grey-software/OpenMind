import ValidateComplex from './ValidateComplex';

import { InitializeContent } from '../ContentTypes';

/**
 * Represents an OpenMind file
 */
class Complex {
  constructor(config) {
    ValidateComplex.validateOrThrowError(config)
    this._complex = config;
    this._content = {};
    for (let id in this._complex.content) {
      let content = this._complex.content[id];
      this._content[id] = InitializeContent(content);
    }
  }
  get content() {
    let c = {};
    for (let id in this._complex.content) {
      c[id] = this._content[id];
    }
    return c;
  }
  get defaultLayout() {
    /**
     * Gets the default layout from content.
     * 
     * Note: This function is temporary, pending complete implementation of paths.
     */
    let content = this.content;
    for (let id in content) {
      if (new Set(content[id].meta.is).has('Layout')) {
        return content[id];
      }
    }
  }
}

export default Complex