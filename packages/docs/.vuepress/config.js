module.exports = {
    title: 'Open Mind',
    description: "We're creating an open standard for organizing learning and research notes using mind maps.",
    themeConfig: {
        nav: [
            { text: 'Use Cases', link: '/use-cases/' },
            { text: 'Standard', link: '/standard/' },
            { text: 'Components', link: '/components/' },
        ],
        sidebar: {
            '/components/': [
                {
                    title: 'Components',
                    sidebarDepth: 2,
                    children: [
                        '',
                        'ContentType',
                        'OpenMindRepository'
                    ]
                }
            ]
        },
    }
}
