import GenericSpace from './GenericSpace.component';

import StandardSpaceComponent from '@/components/StandardSpace';

export default class StandardSpace extends GenericSpace {
  component = StandardSpaceComponent;
  componentStyle = "height:100vh;width:100vw";
  constructor(config) {
    // validate config against StandardSpaceSchema
    super(config);
  }
  get type() {
    return ['Space', 'StandardSpace'];
  }
  get content() {
    // return all content belonging to this space, coupled with the metadata
    /*
    return {
      [id]: {
        element: <content>
        position: {x, y}
      }
    }
     */
    return this._config.data.content;
  }
  set content(_content) {
    /**
     * Sets content spaces
     */
    this._config.data.content = _content;
  }

  get links() {
    /**
     * Return {
     *  [source]: {[target]: {<metadata>}}
     * }
     */
    return this._config.data.links;
  }
  set links(_links) {
    this._config.data.links = _links;
  }
  get linksFlat() {
    /**
     * Returns flattened links as an array
     */
    let links = this.links;
    let linksArray = [];
    for (let sourceId in links) {
      let targets = links[sourceId];
      for (let targetId in targets) {
        linksArray.push({
          source: sourceId,
          target: targetId,
          metadata: targets[targetId],
        });
      }
    }
    return linksArray;
  }
  
  get name() {
    return this._config.data.name;
  }
  set name(_name) {
    this._config.data.name = _name;
  }

  get label() {
    return this.name;
  }

  setContentById(id, contentSpace) {
    this._config.data.content[id] = contentSpace;
  }
  setContentPositions(contentPositions) {
    /**
     * Repositions the content within the space
     * contentPositions is an array containing {id, position: {x, y}}
     */
    for (let {id, position} of contentPositions) {
      try {
        this._config.data.content[id].position = position;
      } catch (e) {console.error(e)}
    }
  }
  get data() {
    return {
      content: this.content,
      name: this.name,
    }
  }
  load() {
    // create a graph instance
    // Go through each id, {element, position} pair in this.content and position them on the graph
  }
  unload() {
    // unload the graph
  }
}