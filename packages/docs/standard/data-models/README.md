---
sidebar: auto
---

# Data Model (Schema)

## The abstracts

### Entity

OpenMind consists of Content (like URLs, text, and PDFs) organized in Spaces. Both are first class entities.

<SchemaExample v-bind:schema="schema.GenericEntitySchema" v-bind:example="example.GenericEntityExample" />

### Space

A space can be visualized.

<SchemaExample v-bind:schema="schema.GenericSpaceSchema" v-bind:example="example.GenericSpaceExample" />

## Implementations

### The Standard Space

The standard space:

* Maps content to nodes (1 content = 1 node)
* Positions a subset of content (the space stores their (x, y) position)

<SchemaExample v-bind:schema="schema.StandardSpaceSchema" v-bind:example="example.StandardSpaceExample" />

### Text Content

<SchemaExample v-bind:schema="schema.TextSchema" v-bind:example="example.TextExample" />

### URL Content

<SchemaExample v-bind:schema="schema.URLSchema" v-bind:example="example.URLExample" />

### Video Content

<SchemaExample v-bind:schema="schema.VideoYouTubeSchema" v-bind:example="example.VideoYouTubeExample" />

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