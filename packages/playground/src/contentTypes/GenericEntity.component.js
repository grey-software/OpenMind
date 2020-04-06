export default class GenericEntity {
  constructor(config) {
    // validate config against GenericEntitySchema
  }
  get id() {}
  get authors() {}
  get creationTime() {}

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