---
sidebar: auto
---

# Data Model (Schema)

<aside class="note">For readability, this page shows examples by default. You can view the schemas, which are rigorously defined in json-schema v7</aside>

## The abstracts


### Entity

OpenMind consists of Content (like URLs, text, and PDFs) organized in Spaces. Both are first class entities.

<SchemaExample v-bind:schema="schema.GenericEntitySchema" v-bind:example="example.GenericEntityExample" />

### Space

A space is an entity that is meant to be visualized.

<SchemaExample v-bind:schema="schema.GenericSpaceSchema" v-bind:example="example.GenericSpaceExample" />

## Implementations

### The Standard Space

The standard space:

* Maps content to nodes (1 content = 1 node)
* Positions a subset of content (the space stores their (x, y) position)

An example implementation would load the standard space by first generating the subset of content, generating all the links, and rendering them on a canvas or DOM using the `position` provided

<SchemaExample v-bind:schema="schema.StandardSpaceSchema" v-bind:example="example.StandardSpaceExample" />

### Text Content

The simplest (non-abstract) type. A piece of text.

<SchemaExample v-bind:schema="schema.TextSchema" v-bind:example="example.TextExample" />

### URL Content

A URL.

Once OpenMind has a URL, it opens up a host of possibilities.

* The URL itself can be parsed for its domain. A sample usecase is querying your OpenMind for domains you frequently link to.
* The website at the URL can be crawled for its [Open Graph](https://ogp.me/) and meta tags.
* The website at the URL can be crawled for all its content, generating a local cache (which you could search)
* You can continue crawling links on the target URL to gather information 'in the viscinity'.

<SchemaExample v-bind:schema="schema.URLSchema" v-bind:example="example.URLExample" />

### Video Content (YouTube)

A YouTube video (stores only the id). An implementation would know to use the [YouTube embed API](https://developers.google.com/youtube/iframe_api_reference) with the `videoId` to render a video player.

<SchemaExample v-bind:schema="schema.VideoYouTubeSchema" v-bind:example="example.VideoYouTubeExample" />

<style>
aside.note {
  padding: 1.5em;
  background: #f8f8f8;
}
</style>

<script>

// Schemas
import GenericEntitySchema from '../../../code-samples/GenericEntity.schema.json';

import GenericSpaceSchema from '../../../code-samples/GenericSpace.schema.json';
import StandardSpaceSchema from '../../../code-samples/StandardSpace.schema.json';

import TextSchema from '../../../code-samples/Text.schema.json';
import URLSchema from '../../../code-samples/URL.schema.json';
import VideoYouTubeSchema from '../../../code-samples/VideoYouTube.schema.json';

// Examples
import GenericEntityExample from '../../../code-samples/GenericEntity.example.json';

import GenericSpaceExample from '../../../code-samples/GenericSpace.example.json';
import StandardSpaceExample from '../../../code-samples/StandardSpace.example.json';

import TextExample from '../../../code-samples/Text.example.json';
import URLExample from '../../../code-samples/URL.example.json';
import VideoYouTubeExample from '../../../code-samples/VideoYouTube.example.json';

import SchemaExample from './SchemaExample';

export default {
  data () {
    return {
      schema: {
        GenericEntitySchema,
        GenericSpaceSchema,
        StandardSpaceSchema,
        TextSchema,
        URLSchema,
        VideoYouTubeSchema,
      },
      example: {
        GenericEntityExample,
        GenericSpaceExample,
        StandardSpaceExample,
        TextExample,
        URLExample,
        VideoYouTubeExample,
      }
    }
  },
  components: {
    SchemaExample,
  }
}
</script>