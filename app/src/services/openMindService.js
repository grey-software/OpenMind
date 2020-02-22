import cytoscape from 'cytoscape';

import { Subject, ReplaySubject } from 'rxjs';
import { delay, throttleTime, filter, timeInterval, map, mergeMap } from 'rxjs/operators';

import { decorate, observable, computed } from 'mobx';

import Complex from './Complex';

import defaultStyle from './defaultStyle';

class _OpenMindService {
  complex = null;
  loadedContent = [];
  activeLayout = null;
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
    this.cy.style(defaultStyle);
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
    if (this.activeLayout) this.activeLayout.unload();
    layout.load(this);
    this.activeLayout = layout;
  }
  loadContent(content) {
    if (this.loadedContent.indexOf(content) !== -1) return;
    this.loadedContent.push(content);
  }
  clickContent(contentId) {
    let content = this.complex.content[contentId];
    if (!content) return;
    if (content.isLayout) {
      this.loadLayout(content);
    } else {
      this.loadContent(content);
    }
  }
  uploadOmsFile = async file => {
    /**
     * Loads complex given file.
     */
    let json = await file.text();
    this.loadComplex(JSON.parse(json));
  }
  uploadOmsJson = async json => {
    /**
     * Loads complex given file.
     */
    if (typeof(json) !== 'object') json = JSON.parse(json)
    this.loadComplex(json);
  }
  downloadOmsJson = async () => {
    let json = this.complex.json;
    let blob = new Blob([json], {type: "application/json"});
    let url = URL.createObjectURL(blob);

    let dlNode = document.createElement('a');
    dlNode.setAttribute('href', url);
    dlNode.setAttribute('download', `example.oms.json`);
    dlNode.click();
  }
}

const OpenMindService = decorate(_OpenMindService, {
  complex: observable,
  complexLoaded: computed,
  loadedContent: observable,
});

let oms = new OpenMindService();

window.oms = oms;

export default oms;