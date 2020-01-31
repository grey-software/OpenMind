import ValidateComplex from './ValidateComplex';

/**
 * Represents an OpenMind file
 */
class Complex {
  constructor(config) {
    ValidateComplex.validateOrThrowError(config)
    this._complex = config;
  }
  get content() {
    return this._complex.content;
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