import React, { Component } from 'react';

import Graph from '../Graph';

import oms from '../../services/openMindService';

// Overlays
import UploadOverlay from './UploadOverlay';

class GraphViewer extends Component {
  constructor(props) {
    super(props);
    this.oms = oms;
  }  
  render() {
    return (
      <div>
        <Graph />
        <UploadOverlay />
      </div>
    )
  }
}

export default GraphViewer;