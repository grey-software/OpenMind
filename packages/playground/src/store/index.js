import { action, computed, observable } from "mobx";

import {Subject} from 'rxjs';

import OpenMindRepository from './OpenMindRepository';

import exampleOms from './exampleOms';

class OpenMindApp {
  keyboardEvents = new Subject();
  db = null;
  loadOpenMind = {
    example: () => {
      /**
       * Loads an example repository, for debugging.
       */
      this.db = new OpenMindRepository(exampleOms, this);
    },
    json: (json) => {
      /**
       * Loads an OpenMind repository from a json object.
       */
      this.db = new OpenMindRepository(json, this);
    },
    github: () => {
      /**
       * Loads an OpenMind repository from GitHub
       */
    },
    file: () => {
      /**
       * Loads an OpenMind from a json file
       */
    },
    localStorage: () => {
      /** 
       * Loads an OpenMind from localStore 
       */
    }
  }
}

// OpenMindApp is a singleton
export default new OpenMindApp();