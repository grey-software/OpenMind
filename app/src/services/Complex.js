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
}

export default Complex