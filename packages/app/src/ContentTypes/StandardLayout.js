import _ from 'lodash';

import GenericLayout from './GenericLayout';

class StandardLayout extends GenericLayout {
  subscriptions = {}
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
  get label() {
    return `🌀 ${this.id.split('-')[0]}`;
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
  refreshGraph = () => {
    this.cy.elements().remove();
    let contentList = [];
    
    for (let id in this.positions) {
      let content = this.complex.content[id];
      this.cy.add({
        id: id,
        data: {id: id, label: content.label},
        position: _.cloneDeep(this.positions[id]),
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
  load = (oms) => {
    this.oms = oms;
    
    this.refreshGraph();
    
    this.subscriptions.nodeTap = this.oms.nodeTap.subscribe(e => {
      let id = e.target.id();
      this.oms.clickContent(id);
      if (!this.oms) return;
      this.oms.draftMessage = this.oms.draftMessage + `[](${id})`;
    });
    this.subscriptions.nodesMove = this.oms.nodesMove.subscribe(e => {
      let positions = {};
      this.cy.nodes().forEach(n => {
        positions[n.id()] = n.position();
      });
      positions = _.cloneDeep(positions);
      this.positions = positions;
    });
    this.subscriptions.graphKeydownObserver = this.oms.graphKeydownObserver.subscribe(e => {
      if (e.key === 'Delete') {
        this.removeSelectedNodes();
      }
    })
  }
  removeSelectedNodes = () => {
    let selectedElements = this.cy.$(':selected');
    let selectedIds = selectedElements.map(e => e.id());
    for (let id of selectedIds) {
      delete this.positions[id];
    }
    this.refreshGraph();
  }
  positionContent = content => {
    if (this.positions[content.id]) return;
    let position = {x: 0, y: 0};
    this.positions[content.id] = position;
    this.refreshGraph();
  }
  unload(oms) {
    this.cy.elements().remove();
    for (let subscriptionId of Object.keys(this.subscriptions)) {
      this.subscriptions[subscriptionId].unsubscribe();
      delete this.subscriptions[subscriptionId];
    }
    this.oms = null;
  }
  get unpositionedContent() {
    let unp = {};
    for (let id in this.complex.content) {
      if (!this.positions[id]) {
        unp[id] = this.complex.content[id];
      }
    }
    return unp;
  }
  static fromScratch() {
    return new StandardLayout({
      meta: {
        is: ['Layout', 'StandardLayout'],
      },
      data: {
        positions: {},
      },
    }, true);
  }
}

export default StandardLayout;