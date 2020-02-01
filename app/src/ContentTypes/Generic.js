import uuidv4 from 'uuid';
import objectHash from 'object-hash';

class Generic {
  static view = null;
  constructor(config, createNew) {
    /**
     * @param {any} config - A json representation of a Generic
     * @param {boolean} createNew - If true, generates a new instance, assigning an ID and creationTime
     */
    if (new.target === Generic) throw new TypeError("Generic is an abstract type.");
    if (createNew) {
      if (config.meta.id) console.warn('Ignoring meta.id because createNew is enabled');
      let newId = uuidv4();
      console.log(`Generated new id: ${newId}`);
      config.meta.id = newId
      config.meta.createdAt = Date.now();
    }
    this._config = config;
  }
  get types() {
    return [];
  }
  get id() {
    return this._config.meta.id;
  }
  set id(val) {
    this._config.meta.id = val;
  }
  get createdAt() {
    return this._config.meta.createdAt;
  }
  set createdAt(val) {
    this._config.meta.createdAt = val;
  }
  get createdBy() {
    return this._config.meta.createdBy;
  }
  set createdBy(val) {
    if (!Array.isArray(val)) throw new Error('createdBy must be an array');
    this._config.meta.createdBy = val;
  }
  get meta() {
    let meta = {
      is: this.types,
      id: this.id,
      createdAt: this.createdAt,
      createdBy: this.createdBy,
    };
    if (this._config.meta.visibility) meta.visibility = this.visibility;
    return meta;
  }
  get data() {
    return {};
  }
  get drop() {
    return {
      meta: this.meta,
      data: this.data,
    };
  }
}

export default Generic;