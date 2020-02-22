import React, { Component } from 'react';

import EditorJs from 'react-editor-js';

import './PageViewer.css'

class PageViewer extends Component {
  editorUpdate = async () => {
    const savedData = await this.editorInstance.save();
    console.log(savedData)
  }
  render() {
    let {title, blocks} = this.props.content;
    let editorData = {
      blocks,
    }
    return (
      <div className="PageViewer">
        <h1 className="pageTitle">{title}</h1>
        {/* <div>
          {blocks.map(b => (
            <div>{b.data.text}</div>
          ))}
        </div> */}
        <EditorJs instanceRef={instance => this.editorInstance = instance} data={editorData} onChange={this.editorUpdate}/>;
      </div>      
    );
  }
}

export default PageViewer;