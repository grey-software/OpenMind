import Generic from './Generic';

class Single extends Generic {
  constructor (singleConfig, createNew) {
    super(singleConfig, createNew);
  }
  
  get types() {
    return ['Single'];
  }

  get line() {
    return this._config.data.line;
  }
  set line(val) {
    this._config.data.line = val;
  }
  
  get label() {
    return this.line.replace(/(?:__|[*#])|\[(.*?)\]\((.*?)\)/g, '$1')
  }
  get links() {
    let inlineLinksRegex = /(?:__|[*#])|\[(.*?)\]\((.*?)\)/g;
    let mdLinks = this.line.matchAll(inlineLinksRegex);
    let links = [];
    for (let mdLink of mdLinks) {
      let {1: text, 2: id} = mdLink;
      links.push({
        id,
        text,
      });
    }
    this.line.replace(inlineLinksRegex, '');
    return links;
  }

  get data() {
    return {
      line: this.line,
    }
  }
}

export default Single;