export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'home' },
        { type: 'partners.what' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
