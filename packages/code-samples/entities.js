class GenericEntity {
  constructor(config) {
    // validate config against GenericEntitySchema
  }
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
    };
  }
  get json() {
    return {
      data: this.data,
      meta: this.meta
    };
  }
}

class GenericSpace extends GenericEntity {
  constructor(config) {
    // validate config against GenericSpaceSchema
  }
  get type() {
    return ['Space'];
  }
  load() {}
  unload() {}
}

class StandardSpace extends GenericSpace {
  constructor() {
    // validate config against StandardSpaceSchema
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
  }
  get data() {
    return {
      content: this.content
    }
  }
}


class VideoYouTube extends GenericEntity {
  constructor() {
    // validate config against VideoYouTubeSchema
  }
  get type() {
    return ['Video', 'VideoYouTube'];
  }
  get videoId() {}
  set videoId(_videoId) {}

  get data() {
    return {
      videoId: this.videoId,
    };
  }
}

class URLEntity extends GenericEntity {
  // URL is reserved
  constructor() {
    // validate config against URLSchema
  }
  get type() {
    return ['URL'];
  }

  get url() {}
  set url(_url) {}

  get data() {
    return {
      url: this.url,
    };
  }
}

class Message extends GenericEntity {
  get type() {
    return ['Message'];
  }

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