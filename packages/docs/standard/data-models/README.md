---
sidebar: auto
---

# Data Model

## The abstracts

OpenMind consists of Content and Spaces. Both are first class entities. 

### Entity

<pre><code class="language-json">{{schema.GenericEntitySchema}}</code></pre>

### Space

The Generic space is another abstract type that inherits from 

<pre><code class="language-json">{{schema.GenericSpaceSchema}}</code></pre>

## Implementations

### The Standard Space

<pre><code class="language-json">{{schema.StandardSpaceSchema}}</code></pre>

### Text

<pre><code class="language-json">{{schema.TextSchema}}</code></pre>

### URL

<pre><code class="language-json">{{schema.URLSchema}}</code></pre>

### Video

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