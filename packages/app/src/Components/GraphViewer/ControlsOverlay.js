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
  state = {
    showUnpositionedPrompt: false,
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
  newStandardLayout = () => {
    this.oms.complex.createNewStandardLayout({switch:true});
  }
  contentClick = content => {
    this.setState({showUnpositionedPrompt: false});
    if (!this.oms.activeLayout) return;
    this.oms.activeLayout.positionContent(content);
  }
  render() {
    let unpositionedContent = {};
    if (this.oms.activeLayout) {
      unpositionedContent = this.oms.activeLayout.unpositionedContent
    }
    let unpositionedCount = Object.keys(unpositionedContent).length;
    return (
      <div className="controlsOverlay">
        {this.state.showUnpositionedPrompt && (
          <div className="unpositionedPrompt">
            {Object.keys(unpositionedContent).map(k => {
              let content = unpositionedContent[k];
              return (
                <div className="row" onClick={()=>this.contentClick(content)}>{content.label}</div>
              )
            })}
          </div>
        )}
        <div className="bottomDock">
          <div className="omnibox">
            <input className="omniInput" onChange={this.setMessage} value={oms.draftMessage} onKeyPress={this.onOmniKeyPress}/>
            <button onClick={this.createMessage}>
              +
            </button>
            <button onClick={this.newStandardLayout}>
              P
            </button>
            {/* <button onClick={this.downloadOMS}>
              D
            </button> */}
          </div>
          {unpositionedCount > 0 && (
            <div className="contentImport" onClick={()=>this.setState({showUnpositionedPrompt: true})}>
              +{unpositionedCount}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default observer(ControlsOverlay);