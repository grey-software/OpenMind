import React, { Component } from 'react';

import { Button } from '@material-ui/core'

import oms from '../../services/openMindService';

import defaultExample from '../../examples/test.oms.json';

import './UploadOverlay.scss';

class UploadOverlay extends Component {
  constructor(props) {
    super(props);
    this.oms = oms;
    this.fileRef = React.createRef();
  }
  uploadLocalFile = e => {
    let file = this.fileRef.current.files[0];
    this.oms.uploadOmsFile(file);
  }
  loadFromLocalStorage = e => {
    this.oms.retriveSaveFromLocalStorage();
  }
  tryExample = e => {
    this.oms.uploadOmsJson(defaultExample)
  }
  render() {
    let saveExists = this.oms.saveExistsInLocalStorage();
    return (
      <div className="uploadOverlay">
        <div className="uploadBox">
          <Button className="uploadButton" onClick={()=>this.fileRef.current.click()}>Upload</Button>
          {saveExists ? (
            <Button className="uploadButton" onClick={this.loadFromLocalStorage}>Load from memory</Button>
          ) : (
            <Button className="uploadButton" onClick={this.tryExample}>Try Default</Button>
          )}
        </div>
        <input type="file" ref={this.fileRef} accept="application/json" style={{"display": "none"}} onChange={this.uploadLocalFile} />
      </div>
    );
  }
}

export default UploadOverlay;