export default {
  id: "example-oms",
  name: "Example OpenMind Repository",
  defaultSpace: "space-1",
  content: {
    'text-1': {
      meta: {
        is: ['Text'],
        id: 'text-1',
        creationTime: 1586155025575
      },
      data: {
        text: "Hello world."
      }
    },
    'url-1': {
      meta: {
        is: ['URL'],
        id: 'url-1',
        creationTime: 1586155025575
      },
      data: {
        url: "https://blog.ycombinator.com/why-toys/"
      }
    },
    'pdf-1': {
      meta: {
        is: ['PDF'],
        id: 'pdf-1',
        creationTime: 1586155025575
      },
      data: {
        url: "https://bitcoin.com/bitcoin.pdf"
      }
    },
    'space-1': {
      meta: {
        is: ['StandardSpace', 'Space'],
        id: 'space-1',
        creationTime: 1586155025560,
      },
      data: {
        name: 'Default Space',
        content: {
          "url-1": {
            position: {
              x: 124,
              y: 57,
            }
          },
          "pdf-1": {
            position: {
              x: 194,
              y: 17,
            }
          },
          "text-1": {
            position: {
              x: 264,
              y: 57,
            }
          },
        }
      }
    },
    'space-2': {
      meta: {
        is: ['StandardSpace', 'Space'],
        id: 'space-2',
        creationTime: 1586155025560,
      },
      data: {
        name: 'New Space',
        content: {
          "space-1": {
            position: {
              x: 200,
              y: 200,
            }
          }
        }
      }
    }
  }
}