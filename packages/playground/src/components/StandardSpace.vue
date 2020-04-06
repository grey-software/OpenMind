<template>
  <div id="cyto" ref="cytoRef" />
</template>


<script lang="ts">
import _ from "lodash";
import cytoscape from 'cytoscape';

import { Subject, ReplaySubject, fromEvent, iif, of } from 'rxjs';
import { delay, throttleTime, filter, timeInterval, map, mergeMap } from 'rxjs/operators';

import ContentMeta from "../types/ContentMeta";

import AppState from '@/store';

interface StandardSpaceData {
  meta: ContentMeta;
  data: {
    
  };
}
export default {
  methods: {
    addNode(content, {position}) {
      this.cyto.add({
        data: {
          id: content.id, 
          label: content.label,
        },
        position,
      })
    },
    updateSpace() {
      for (let [contentId, contentSpace] of Object.entries(this.content.data.content)) {
        let content = this.state.db.content[contentId];
        if (!content) continue;
        this.addNode(content, contentSpace);
      }
    },
    bindHandlers() {
      this.handlers = {
        nodeTap: new Subject(),
        nodeMouseover: new Subject(),
        nodeMouseout: new Subject(),
        nodesMove: new Subject(),
        edgeTap: new Subject(),
        edgeMouseover: new Subject(),
        backgroundTap: new Subject(),
        backgroundContextTap: new Subject(),
        backgroundDoubleTap: new Subject(),
      },
      this.handlers.backgroundDoubleTap = this.handlers.backgroundTap.pipe(
        timeInterval(),
        filter(i => i.interval < 250),
        map(i => i.value),
      );

      this.cyto.on('tap', 'node', e => this.handlers.nodeTap.next(e));
      this.cyto.on('tap', 'edge', e => this.handlers.edgeTap.next(e));
      this.cyto.on('tap', e => {
        if (e.target !== this.cyto) return;
        this.handlers.backgroundTap.next(e);
      });
      this.cyto.on('cxttap', e => {
        if (e.target == e.cy) this.handlers.backgroundContextTap.next(e);
      });
      this.cyto.on('dragfree', 'node', e => this.handlers.nodesMove.next(e));

      this.cyto.on('mouseover', 'node', e => this.handlers.nodeMouseover.next(e));
      this.cyto.on('mouseout', 'node', e => this.handlers.nodeMouseout.next(e));
      this.handlers.nodeMouseover.subscribe(e => {
        this.cyto.container().style.cursor = 'pointer';
      });
      this.handlers.nodeMouseout.subscribe(e => {
        this.cyto.container().style.cursor = '';
      });
    },
    unbindHandlers() {
      for (let handler in this.handlers) {
        delete this.handlers[handler];
      }
    },
    load() {
      this.updateSpace();
      this.bindHandlers();
      this.cyto.center();
    },
    unload() {
      this.unbindHandlers();
      this.cyto.elements().remove();
    },
  },
  async mounted() {
    let cyto = new cytoscape({
      container: this.$refs.cytoRef,
    });
    cyto.style([
      {
        selector: 'node',
        style: {
          label: 'data(label)'
        }
      }
    ]);
    console.log(cyto)
    this.cyto = cyto;
    this.handlers = {};
    this.load();
  },
  computed: {},
  watch: {
    content: {
      deep: true,
      handler: async function(val, oldVal) {
        if (val !== oldVal) await this.updateSpace();
      }
    }
  },
  props: {
    content: {
      type: Object as () => StandardSpaceData,
      default: ""
    }
  },
  data() {
    return {
      state: AppState,
    };
  }
};
</script>

<style scoped>
#cyto {
  height: 100%;
  width: 100%;
}
</style>