import Generic from '../Generic';

class GenericLayout extends Generic {
  constructor (layoutConfig, createNew) {
    /**
     * @param {any} layoutConfig - A json representation of a layout
     * @param {boolean} createNew - Whether a new instance is being created (in which case an id and a creation date is generated)
     */
    if (new.target === GenericLayout) throw new TypeError("GenericLayout is an abstract type.");
    super(layoutConfig, createNew);
  }
  isLayout = true;
  get types() {
    return ['Layout'];
  }
  get data() {
    return {};
  }
  mutate({mutation}) {
    throw new Error('Not implemented');
  }
  load(oms) {
    throw new Error('Not implemented');
  }
  unload(oms) {
    throw new Error('Not implemented');
  }
}

export default GenericLayout;