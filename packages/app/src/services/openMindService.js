import cytoscape from 'cytoscape';

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
}

let oms = new OpenMindService();

export default oms;