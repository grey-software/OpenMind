import _ from 'lodash';
import Joi from '@hapi/joi';

/**
 * Verifies if a JSON string follows OMS
 */

class ValidateComplex {
  static schema = Joi.object({
    id: Joi.string(),
    content: Joi.object(),
  });
  static validate(omsJson) {
    return this.schema.validate(omsJson);
  }
  static validateOrThrowError(omsJson) {
    let validation = this.validate(omsJson);
    if (validation.error) throw validation.error;
    return validation;
  }
}

export default ValidateComplex;