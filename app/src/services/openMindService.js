import cytoscape from 'cytoscape';

import Complex from './Complex';

class OpenMindService {
  constructor() {
    this.initializeCytoscape();
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
    } catch (e) {
      console.error(`Failed to generate complex: ${e}`)
    }
  }
  uploadOms = async file => {
    /**
     * Loads complex given file.
     */
    let json = await file.text();
    this.loadComplex(JSON.parse(json));
  }
}

let oms = new OpenMindService();

window.oms = oms;

export default oms;