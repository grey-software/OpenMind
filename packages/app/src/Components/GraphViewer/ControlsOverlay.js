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
  downloadOMS = () => {
    this.oms.downloadOmsJson();
  }
  render() {
    return (
      <div className="controlsOverlay">
        <div>
          <input className="omniInput" onChange={this.setMessage} value={oms.draftMessage} />
        </div>
        <div>
          <button onClick={this.createMessage}>
            Create message
          </button>
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