import { action, computed, observable } from "mobx";

import OpenMindRepository from './OpenMindRepository';

export default class OpenMindApp {
  db = null;
  loadOpenMind = {
    example: () => {
      /**
       * Loads an example repository, for debugging.
       */
      this.db = new OpenMindRepository({

      });
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
    localStore: () => {
      /** 
       * Loads an OpenMind from localStore 
       */
    }
  }
}