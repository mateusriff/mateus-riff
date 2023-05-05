export const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'projectURL',
            title: 'Project URL',
            type: 'url'
        },
        {
            name: 'githubURL',
            title: 'GitHub URL',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
        },
        {
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
    ]
}