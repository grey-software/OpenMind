import Generic from './Generic';

class Single extends Generic {
  constructor (singleConfig, createNew) {
    super(singleConfig, createNew);
  }
  get types() {
    return ['Single'];
  }
}

export default Single;