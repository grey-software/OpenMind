import React, { Component } from 'react';

import { observer } from "mobx-react"

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
        {!this.oms.complexLoaded && <UploadOverlay />}
      </div>
    )
  }
}

export default observer(GraphViewer);