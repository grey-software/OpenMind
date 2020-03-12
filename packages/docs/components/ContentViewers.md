# Content Viewers

::: tip How we're describing these components
Instead of writing pseudocode, we used ECMAScript to describe the structure and functioning of the components.
:::

A content type is associated to a content viewer. This is the OpenMind equivalent of an OS file-type association.


## Text Viewer

The simplest form of content involves rendering blocks of text. 

A viewer/editor would include features to link to any other piece of content, and render such links inline, with hover previews. Wikipedia (Mediawiki) recently enabled rich previews that let people peek into another page without navigating to it.

## Video Viewer (YouTube)

Viewing a YouTube video natively requires invoking the [YouTube embed API](https://developers.google.com/youtube/iframe_api_reference) to render the familiar YouTube player. 

Additional features implemented by a viewer would include the way to annotate videos at certain timestamps, and link them to other content.


## PDF Viewer

Viewing a PDF involves several tasks

* Rendering the PDF (the default viewer on browser may suffice)
* Adding the ability for users to add annotations and links to other OpenMind content