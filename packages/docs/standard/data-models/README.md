---
sidebar: auto
---

# Data Model (Schema)

## The abstracts

### Entity

OpenMind consists of Content (like URLs, text, and PDFs) organized in Spaces. Both are first class entities.

<!-- <pre><code class="language-json">{{schema.GenericEntitySchema}}</code></pre> -->
<Prism language="javascript">{{ schema.GenericEntitySchema }}</Prism>

### Space

A space can be visualized.

<!-- <pre><code class="language-json">{{schema.GenericSpaceSchema}}</code></pre> -->
<Prism language="javascript">{{ schema.GenericSpaceSchema }}</Prism>

## Implementations

### The Standard Space

The standard space:

* Maps content to nodes (1 content = 1 node)
* Positions a subset of content (the space stores their (x, y) position)

<!-- <pre><code class="language-xml">{{schema.StandardSpaceSchema}}</code></pre> -->
<Prism language="javascript">{{ schema.StandardSpaceSchema }}</Prism>

### Text Content

<!-- <pre><code class="language-json">{{schema.TextSchema}}</code></pre> -->
<Prism language="javascript">{{ schema.TextSchema }}</Prism>

### URL Content

<!-- <pre><code class="language-json">{{schema.URLSchema}}</code></pre> -->
<Prism language="javascript">{{ schema.URLSchema }}</Prism>

### Video Content

<!-- <pre><code class="language-json">{{schema.VideoYouTubeSchema}}</code></pre> -->
<Prism language="javascript">{{ schema.VideoYouTubeSchema }}</Prism>

<script>
import GenericEntitySchema from '../../../code-samples/GenericEntitySchema.json';

import GenericSpaceSchema from '../../../code-samples/GenericSpaceSchema.json';
import StandardSpaceSchema from '../../../code-samples/StandardSpaceSchema.json';

import TextSchema from '../../../code-samples/TextSchema.json';
import URLSchema from '../../../code-samples/URLSchema.json';
import VideoYouTubeSchema from '../../../code-samples/VideoYouTubeSchema.json';

import 'prismjs'
// import 'prismjs/themes/prism.css'

import Prism from 'vue-prism-component';

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
  },
  components: {
    Prism,
  }
}
</script>