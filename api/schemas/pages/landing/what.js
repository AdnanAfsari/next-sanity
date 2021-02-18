import { FaQuestionCircle } from 'react-icons/fa'

export default {
  name: 'partners.what',
  title: 'What',
  type: 'object',
  icon: FaQuestionCircle,
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'whatIsFPL',
      title: 'What Is FPL?',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'whatIsFPL',   
    },
  },
}
