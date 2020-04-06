import { action, computed, observable } from "mobx";

import OpenMindRepository from './OpenMindRepository';

import exampleOms from './exampleOms';

class OpenMindApp {
  db = null;
  loadOpenMind = {
    example: () => {
      /**
       * Loads an example repository, for debugging.
       */
      this.db = new OpenMindRepository(exampleOms);
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