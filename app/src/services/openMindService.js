import cytoscape from 'cytoscape';

import { Subject, ReplaySubject } from 'rxjs';
import { delay, throttleTime, filter, timeInterval, map, mergeMap } from 'rxjs/operators';

import { decorate, observable, computed } from 'mobx';

import Complex from './Complex';

class _OpenMindService {
  complex = null;
  constructor() {
    this.initializeCytoscape();
  }
  get complexLoaded() {
    return !!this.complex;
  }
  initializeCytoscape() {
    /**
     * Initializes cytoscape with default style and settings
     */
    this.cy = new cytoscape({
      wheelSensitivity: 0.1,
    });
    this.cy.style({});
    this.setGraphBindings();
  }
  setGraphBindings() {
    /**
     * Binds cytoscape events.
     */
    // Subjects
    this.nodeTap = new Subject();
    this.nodeMouseover = new Subject();
    this.nodeMouseout = new Subject();

    this.nodesMove = new Subject(); // node.dragfree

    this.edgeTap = new Subject();
    this.edgeMouseover = new Subject();

    this.backgroundTap = new Subject();
    this.backgroundDoubleTap = this.backgroundTap.pipe(
      timeInterval(),
      filter(i => i.interval < 250),
      map(i => i.value),
    );
    this.backgroundContextTap = new Subject();

    // Bindings to cytoscape

    this.cy.on('tap', 'node', e => this.nodeTap.next(e));
    this.cy.on('tap', 'edge', e => this.edgeTap.next(e));
    this.cy.on('tap', e => {
      if (e.target == e.cy) this.backgroundTap.next(e);
    });
    this.cy.on('cxttap', e => {
      if (e.target == e.cy) this.backgroundContextTap.next(e);
    });
    this.cy.on('dragfree', 'node', e => this.nodesMove.next(e));

    this.cy.on('mouseover', 'node', e => this.nodeMouseover.next(e));
    this.cy.on('mouseout', 'node', e => this.nodeMouseout.next(e));
    this.nodeMouseover.subscribe(e => {
      this.cy.container().style.cursor = 'pointer';
    });
    this.nodeMouseout.subscribe(e => {
      this.cy.container().style.cursor = '';
    });
  }
  mountCyto(el) {
    /**
     * Mounts cytoscape on given element
     */
    this.cy.mount(el)
  }
  loadComplex(complexConfig) {
    /**
     * Load a complex, given a config
     */
    try {
      this.complex = new Complex(complexConfig);
      if (this.complex.defaultLayout) {
        this.loadLayout(this.complex.defaultLayout);
      }
    } catch (e) {
      console.error(`Failed to generate complex: ${e}`)
    }
  }
  loadLayout(layout) {
    layout.load(this);
  }
  uploadOms = async file => {
    /**
     * Loads complex given file.
     */
    let json = await file.text();
    this.loadComplex(JSON.parse(json));
  }
}

const OpenMindService = decorate(_OpenMindService, {
  complex: observable,
  complexLoaded: computed,
});

let oms = new OpenMindService();

window.oms = oms;

export default oms;