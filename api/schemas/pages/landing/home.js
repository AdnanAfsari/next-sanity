import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'home',
  title: 'Home',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'body',
      title: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'body',
      media: 'image',
    },
  },
}
