---
sidebar: auto
---

This page mirrors the data models in structure.

# Abstracts

Features of the abstract data types

## Generic Entity
<<< @/../ContentTypeComponents/GenericEntity.component.js

## Generic Space
<<< @/../ContentTypeComponents/GenericSpace.component.js


# Implementations

Features of implementations

## Standard Space

<<< @/../ContentTypeComponents/StandardSpace.component.js

## Text

<<< @/../ContentTypeComponents/Text.component.js

## URLs

<<< @/../ContentTypeComponents/URLEntity.component.js

## Video (YouTube)

<<< @/../ContentTypeComponents/VideoYouTube.component.js


<script>

import ContentTypeComponents from '../../../ContentTypeComponents';

export default {
  data: () => ({
    ...ContentTypeComponents,
  }),
}
</script>