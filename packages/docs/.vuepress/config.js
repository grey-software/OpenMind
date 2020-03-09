module.exports = {
    title: 'Open Mind',
    description: "We're creating an open standard for organizing learning and research notes using mind maps.",
    themeConfig: {
        nav: [
            { text: 'Use Cases', link: '/uses/' },
            { text: 'Standard', link: '/standard/' },
            { text: 'Components', link: '/components/' },
        ],
        sidebar: {
            '/uses/': [
                {
                    title: 'Use Cases',
                    sidebarDepth: 2,
                    children: [
                        '',
                        'research',
                        'language-learning',
                        'brainstorming',
                    ]
                }
            ],
            '/components/': [
                {
                    title: 'Components',
                    sidebarDepth: 2,
                    children: [
                        '',
                        'ContentType',
                        'OpenMindRepository'
                    ],
                },
            ],
            '/standard/': [
                {
                    title: 'Standard',
                    sidebarDepth: 2,
                    children: [
                        '',
                        'data-models/OpenMindFile',
                        'data-models/ContentTypes',
                    ],
                }
            ],
        },
    }
}
