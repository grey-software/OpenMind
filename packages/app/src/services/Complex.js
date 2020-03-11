import ValidateComplex from './ValidateComplex';

import { InitializeContent } from '../ContentTypes';
import StandardLayout from '../ContentTypes/StandardLayout';

const proxyConfig = setterCallback => {
  let _proxyConfig = {
    get(target, key) {
      if (typeof target[key] === 'object' && target[key] !== null) {
        return new Proxy(target[key], _proxyConfig)
      } else {
        return target[key];
      }
    },
    set(obj, prop, value) {
      setterCallback(...arguments)
      return Reflect.set(...arguments)
    }
  }
  return _proxyConfig;
}

/**
 * Represents an OpenMind file
 */
class Complex {
  constructor(config, oms) {
    this.oms = oms;
    ValidateComplex.validateOrThrowError(config)
    this._complex = new Proxy(config, proxyConfig(() => this.oms.complexUpdate.next()));
    this._content = {};
    for (let id in this._complex.content) {
      let content = this._complex.content[id];
      this._content[id] = InitializeContent(content);
    }
  }
  get content() {
    let c = {};
    for (let id in this._complex.content) {
      c[id] = this._content[id];
    }
    return c;
  }
  addContent(content) {
    this._content[content.id] = content;
    this._complex.content[content.id] = content.drop;
  }
  createNewStandardLayout = async () => {
    let s = StandardLayout.fromScratch();
    this.addContent(s);
    this.oms.loadLayout(s);
  }
  get defaultLayout() {
    /**
     * Gets the default layout from content.
     * 
     * Note: This function is temporary, pending complete implementation of paths.
     */
    let content = this.content;
    for (let id in content) {
      if (new Set(content[id].meta.is).has('Layout')) {
        return content[id];
      }
    }
  }
  get json() {
    return JSON.stringify(this._complex);
  }
}

export default Complex