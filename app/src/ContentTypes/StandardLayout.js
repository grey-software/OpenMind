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
    
    let contentList = [];

    for (let id in this.positions) {
      let content = this.complex.content[id];
      this.cy.add({
        id: id,
        data: {id: id, label: content.label},
        position: this.positions[id],
      });
      contentList.push(content);
    }

    for (let content of contentList) {
      for (let link of content.links) {
        this.cy.add({
          data: {
            source: content.id,
            target: link.id,
          }
        })
      }
    }
  }
  unload(oms) {
    this.oms = null;
  }
}

export default StandardLayout;