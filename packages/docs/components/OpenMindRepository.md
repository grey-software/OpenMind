# OpenMind repository

::: tip How we're describing these components
Instead of writing pseudocode, we used ECMAScript to describe the structure and functioning of the components.
:::

The OpenMind repository is the top level component in the model layer.

It has the following responsibilities:

* Parse an OpenMind File upon initialization
* Initialize content (including spaces)
* If a default space is specified, load it into the viewer

<<< @/../OpenMindComponents/OpenMindRepository.js