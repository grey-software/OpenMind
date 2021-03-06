/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import TextContent from '../../src/components/TextContent.vue'

export default {
  component: TextContent,
  title: 'Text',
  decorators: [withKnobs({escapeHTML: false})],
}

export const withText = () => {
  return ({
    components: { TextContent },
    props: {
      content: {
        default: {
          meta: {},
          data: {
            text: text("Text", "Complex systems are chiefly concerned with the behaviors and properties of systems. A system, broadly defined, is a set of entities that, through their interactions, relationships, or dependencies, form a unified whole. It is always defined in terms of its boundary, which determines the entities that are or are not part of the system. Entities lying outside the system then become part of the system's environment."),
          }
        }
      }
    },
    template: `<TextContent :content="content" />`,
  })
}

export const withMarkdown = () => {
  return ({
    components: { TextContent },
    props: {
      content: {
        default: {
          meta: {},
          data: {
            markdown: text("Markdown", "**Complex systems** are chiefly concerned with the behaviors and properties of *systems*. A system, broadly defined, is a set of entities that, through their interactions, relationships, or dependencies, form a unified whole. It is always defined in terms of its *boundary*, which determines the entities that are or are not part of the system. Entities lying outside the system then become part of the system's *environment*."),
          }
        }
      }
    },
    template: `<TextContent :content="content" />`,
  })
}

export const withWikitext = () => {
  return ({
    components: { TextContent },
    props: {
      content: {
        default: {
          meta: {},
          data: {
            wikitext: text("Wikitext", "*Complex systems* are chiefly concerned with the behaviors and properties of _[https://en.wikipedia.org/wiki/System systems]_. A system, broadly defined, is a set of entities that, through their interactions, relationships, or dependencies, form a unified whole. It is always defined in terms of its _boundary_, which determines the entities that are or are not part of the system. Entities lying outside the system then become part of the system's _environment_."),
          }
        }
      }
    },
    template: `<TextContent :content="content" />`,
  })
}