import GenericLayout from './GenericLayout';

class StandardLayout extends GenericLayout {
  constructor (layoutConfig, createNew) {
    super(layoutConfig, createNew);
  }
  isLayout = true;
  get types() {
    return ['Layout', 'StandardLayout'];
  }
  get positions() {
    return this._config.data.positions;
  }
  set positions(val) {
    this._config.data.positions = val;
  }
  get data() {
    return {
      positions: this.positions,
    };
  }
  get cy() {
    return this.oms.cy;
  }
  get complex() {
    return this.oms.complex;
  }
  mutate({mutation}) {
    console.log(mutation);
  }
  load(oms) {
    this.oms = oms;
    
    for (let id in this.complex.content) {
      let pos = this.positions[id];
      if (!pos) continue;
      this.cy.add({
        id: id,
        data: {},
        position: pos,
      })
    }
  }
  unload(oms) {
    this.oms = null;
  }
}

export default StandardLayout;