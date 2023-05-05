export const article = {
    name: 'article',
    title: 'Article',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
        },
        {
            name: 'articleURL',
            title: 'Article URL',
            type: 'url'
        },
    ]
}