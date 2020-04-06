export default {
  id: "example-oms",
  name: "Example OpenMind Repository",
  content: {
    'content-1': {
      meta: {
        is: ['Text'],
        id: 'content-1',
        creationTime: 1586155025575
      },
      data: {
        text: "Hello world."
      }
    },
    'space-1': {
      meta: {
        is: ['StandardSpace', 'Space'],
        id: 'space-1',
        creationTime: 1586155025560,
      },
      data: {
        content: {
          "content-1": {
            position: {
              x: 124,
              y: 27,
            }
          }
        }
      }
    }
  }
}