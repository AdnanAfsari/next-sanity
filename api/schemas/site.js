import { FaSitemap } from 'react-icons/fa'

export default {
  name: 'site',
  title: 'Site',
  type: 'document',
  icon: FaSitemap,
  fields: [
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
  ],
  preview: {
    select: {
      title: 'Menu',
      type: 'type',
    },
  },
}
