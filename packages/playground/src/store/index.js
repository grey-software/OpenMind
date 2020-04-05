import { action, computed, observable } from "mobx";

import OpenMindRepository from './OpenMindRepository';

export default class OpenMindApp {
  db = null
  loadOpenMind = {
    example: () => {
      this.db = new OpenMindRepository({
        
      });
    },
  }
}