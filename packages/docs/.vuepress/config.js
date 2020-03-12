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
                        'research/',
                        'understanding-language/',
                        'learning/',
                    ]
                }
            ],
            '/components/': [
                {
                    title: 'Components',
                    sidebarDepth: 2,
                    children: [
                        '',
                        'OpenMindRepository',
                        'ContentTypes',
                        'ContentViewers',
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
