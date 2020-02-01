import React, { Component } from 'react';

import { Button } from '@material-ui/core'

import oms from '../../services/openMindService';

import './styles.scss';

class UploadOverlay extends Component {
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
      <div className="uploadOverlay">
        <div className="uploadBox">
          <Button className="uploadButton" onClick={()=>this.fileRef.current.click()}>Upload</Button>
        </div>
        <input type="file" ref={this.fileRef} accept="application/json" style={{"display": "none"}} onChange={this.uploadLocalFile} />
      </div>
    );
  }
}

export default UploadOverlay;