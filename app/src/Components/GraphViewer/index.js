import React, { Component } from 'react';

import Graph from '../Graph';

import oms from '../../services/openMindService';

class GraphViewer extends Component {
  constructor(props) {
    super(props);
    this.oms = oms;
    this.fileRef = React.createRef();
  }
  uploadLocalFile = e => {
    let file = this.fileRef.current.files[0];
    this.oms.uploadOms(file);
  }
  render() {
    return (
      <div>
        <div onClick={()=>this.fileRef.current.click()}>Upload</div>
        <Graph />
        <input type="file" ref={this.fileRef} accept="application/json" style={{"display": "none"}} onChange={this.uploadLocalFile} />
      </div>
    )
  }
}

export default GraphViewer;