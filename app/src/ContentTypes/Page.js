import Generic from './Generic';

class Page extends Generic {
  constructor (pageConfig, createNew) {
    super(pageConfig, createNew);
  }
  defaultViewer = null;
  
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
    
  }
  get links() {
    
  }

  get data() {
    return {
      title: this.title,
      blocks: this.blocks,
    }
  }
}

export default Page;