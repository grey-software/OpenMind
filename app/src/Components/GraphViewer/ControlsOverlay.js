import React, { Component } from 'react';

import oms from '../../services/openMindService';

import Single from '../../ContentTypes/Single';

import './ControlsOverlay.scss';

class ControlsOverlay extends Component {
  constructor(props) {
    super(props)
    this.oms = oms;
  }
  state = {
    message: '',
  }
  setMessage = e => this.setState({message: e.target.value});
  createMessage = () => {
    let s = Single.fromLine(this.state.message);
    this.oms.complex.addContent(s);
  }
  downloadOMS = () => {
    this.oms.downloadOmsJson();
  }
  render() {
    return (
      <div className="controlsOverlay">
        <div>
          <input className="" onChange={this.setMessage} value={this.state.message} />
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

export default ControlsOverlay;