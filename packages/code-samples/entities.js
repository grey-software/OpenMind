class GenericEntity {
  static validators = [{}]
  get id() {}
  get authors() {}
  get creationTime() {}

  get type() {
    return [];
  }
  
  get data() {
    return {} // overridden in abstract
  }
  get meta() {
    return {
      id: this.id,
      is: this.type,
      creationTime: this.creationTime,
      authors: this.authors,
    }
  }
  get json() {
    return {
      data: this.data,
      meta: this.meta
     }
  }
  validate() {
    this.validators
  }
}

class GenericSpace extends GenericEntity {
  load() {}
  unload() {}
}

class StandardSpace extends GenericSpace {
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
  }
  get data() {
    return {
      content: this.content
    }
  }
}

class Message extends GenericEntity {
  get text() {}
  set text(_text) {}

  get data() {
    return {
      text: this.text,
    };
  }
}

class OMInstance {
  get content() {
    // return a map of {id: <content>}
  }

  get spaces() {
    // return a map of {id: <content:space>}
  }
  getContentByType(type) {
    // return a map of {id: <content:type>}
  }
}