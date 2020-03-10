# OpenMind File

An OpenMind database can be described as a repository of content, including the spaces used to organize and visualize said content.

At the level of the data structure, we don't draw distinction between spaces and other content (like text, PDFs, audio, video). A space visualizes content, and the connections between it. 

<SchemaExample :schema="schema.OpenMindFileSchema" :example="example.OpenMindFileExample" />

<script>
import OpenMindFileSchemaExamples from '../../../OpenMindFileSchemaExamples';  

import SchemaExample from './SchemaExample';

export default {
  data () {
    return {
      ...OpenMindFileSchemaExamples,
    }
  },
  components: {
    SchemaExample,
  }
}
</script>