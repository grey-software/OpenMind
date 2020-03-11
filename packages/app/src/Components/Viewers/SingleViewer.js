import React, { Component } from 'react';

import './SingleViewer.css'

class SingleViewer extends Component {
  render() {
    let {line} = this.props.content;
    return (
      <div className="SingleViewer">
        <div>{line}</div>
      </div>      
    );
  }
}

export default SingleViewer;