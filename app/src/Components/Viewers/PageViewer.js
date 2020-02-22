import React, { Component } from 'react';

import EditorJs from 'react-editor-js';

import './PageViewer.css'

class PageViewer extends Component {
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
        <EditorJs data={editorData} />;
      </div>      
    );
  }
}

export default PageViewer;