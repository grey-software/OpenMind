# OpenMind File

An OpenMind database can be described as a repository of content, including the spaces used to organize and visualize said content.

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