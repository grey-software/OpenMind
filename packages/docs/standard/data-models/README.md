---
sidebar: auto
---

# Data Model

## The abstracts

### Entity

OpenMind consists of Content (like URLs, text, and PDFs) organized in Spaces. Both are first class entities.

<pre><code class="language-json">{{schema.GenericEntitySchema}}</code></pre>

### Space

A space can be visualized.

<pre><code class="language-json">{{schema.GenericSpaceSchema}}</code></pre>

## Implementations

### The Standard Space

The standard space:

* Maps content to nodes (1 content = 1 node)
* Positions a subset of content (the space stores their (x, y) position)

<pre><code class="language-json">{{schema.StandardSpaceSchema}}</code></pre>

### Text Content

<pre><code class="language-json">{{schema.TextSchema}}</code></pre>

### URL Content

<pre><code class="language-json">{{schema.URLSchema}}</code></pre>

### Video Content

<pre><code class="language-json">{{schema.VideoYouTubeSchema}}</code></pre>

<script>
import GenericEntitySchema from '../../../code-samples/GenericEntitySchema.json';

import GenericSpaceSchema from '../../../code-samples/GenericSpaceSchema.json';
import StandardSpaceSchema from '../../../code-samples/StandardSpaceSchema.json';

import TextSchema from '../../../code-samples/TextSchema.json';
import URLSchema from '../../../code-samples/URLSchema.json';
import VideoYouTubeSchema from '../../../code-samples/VideoYouTubeSchema.json';

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
      }
    }
  }
}
</script>