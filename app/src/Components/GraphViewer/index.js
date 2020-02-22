import React, { Component } from 'react';

import { observer } from "mobx-react"

import Graph from '../Graph';

import oms from '../../services/openMindService';

// Overlays
import UploadOverlay from './UploadOverlay';
import ControlsOverlay from './ControlsOverlay';

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
        {this.oms.loadedContent.map(c => {
          let Viewer = c.defaultViewer
          if (!Viewer) return;
          return (
            <Viewer content={c} />
          )
        })}
        <ControlsOverlay />
      </div>
    )
  }
}

export default observer(GraphViewer);