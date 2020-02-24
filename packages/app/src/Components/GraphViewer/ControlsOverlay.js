import React, { Component } from 'react';
import { observer } from 'mobx-react';

import oms from '../../services/openMindService';

import Single from '../../ContentTypes/Single';

import './ControlsOverlay.scss';

class ControlsOverlay extends Component {
  constructor(props) {
    super(props)
    this.oms = oms;
  }
  setMessage = e => oms.draftMessage = e.target.value
  createMessage = () => {
    let s = Single.fromLine(oms.draftMessage);
    this.oms.complex.addContent(s);
    oms.draftMessage = '';
  }
  onOmniKeyPress = e => {
    if (e.key === 'Enter') {
      this.createMessage();
    }
  }
  downloadOMS = () => {
    this.oms.downloadOmsJson();
  }
  render() {
    return (
      <div className="controlsOverlay">
        <div className="omnibox">
          <input className="omniInput" onChange={this.setMessage} value={oms.draftMessage} onKeyPress={this.onOmniKeyPress}/>
          <button onClick={this.createMessage}>
            +
          </button>
        </div>
        <div>
        </div>
        <div>
          <button>
            Create post
          </button>
        </div>
        <div>
          <button onClick={this.downloadOMS}>
            Download
          </button>
        </div>
      </div>
    );
  }
}

export default observer(ControlsOverlay);