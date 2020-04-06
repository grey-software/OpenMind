export default class GenericEntity {
  component = null;
  componentStyle = '';
  constructor(config) {
    // validate config against GenericEntitySchema
    this._config = config;
  }
  get id() {
    return this._config.meta.id;
  }
  get authors() {
    return this._config.meta.authors;
  }
  get creationTime() {
    return this._config.meta.creationTime;
  }

  get type() {
    return [];
  }
  
  get links() {
    /**
     * Returns an array of what the entity links to, as a function of its data.
     * @return [{id, ...[other meta data about the link]}]
     */
    return [];
  }

  get data() {
    return {} // overridden in abstract
  }
  get meta() {
    return {
      id: this.id,
      is: this.type,
      creationTime: this.creationTime,
      authors: this.authors,
    };
  }
  get json() {
    return {
      data: this.data,
      meta: this.meta
    };
  }
}