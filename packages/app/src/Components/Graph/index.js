import React, { Component } from 'react';

import './style.css';

import oms from '../../services/openMindService'

class Graph extends Component {
  constructor(props) {
    super(props);
    this.cyElement = React.createRef();
  }
  async componentDidMount() {
    oms.mountCyto(this.cyElement.current);
  }
  render() {
    return (
      <div>
        <div id="cyElement" ref={this.cyElement}/>
      </div>
    );
  }
}

export default Graph;
