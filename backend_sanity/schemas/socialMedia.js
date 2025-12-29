export default {
    name: 'socialMedia',
    title: 'Social Media',
    type: 'document',
    fields: [
        {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            description: 'Choose one: twitter, facebook, instagram',
            options: {
                list: [
                    { title: 'Twitter', value: 'twitter' },
                    { title: 'Facebook', value: 'facebook' },
                    { title: 'Instagram', value: 'instagram' }
                ]
            }
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'Full URL to your social media profile'
        }
    ]
}
