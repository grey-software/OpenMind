import cytoscape from 'cytoscape';

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