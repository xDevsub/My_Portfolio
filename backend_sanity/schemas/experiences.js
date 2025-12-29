export default {
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [{
                type: 'document',
                name: 'workExperience',
                fields: [
                    { name: 'name', type: 'string', title: 'Name' },
                    { name: 'company', type: 'string', title: 'Company' },
                    { name: 'desc', type: 'text', title: 'Description' },
                ]
            }]
        },
    ]
}