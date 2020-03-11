import React from 'react';
import Generic from './Generic';

import PageViewer from '../Components/Viewers/PageViewer';

class Page extends Generic {
  constructor (pageConfig, createNew) {
    super(pageConfig, createNew);
  }
  defaultViewer=PageViewer;

  get types() {
    return ['Page'];
  }

  get title() {
    return this._config.data.title;
  }
  set title(title) {
    this._config.data.title = title;
  }

  get blocks() {
    return this._config.data.blocks;
  }
  set blocks(blocks) {
    this._config.data.blocks = blocks;
  }
  
  get label() {
    return this.title;
  }

  get links() {
    let links = [];
    for (let block of this.blocks) {
      if (block.type == 'link') {
        links.push({
          id: block.data.id,
        })
      }
    }
    return links;
  }

  get data() {
    return {
      title: this.title,
      blocks: this.blocks,
    }
  }
}

export default Page;