import React, { Component } from 'react';

import Graph from '../Graph';

class GraphViewer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Graph />
      </div>
    )
  }
}

export default GraphViewer;