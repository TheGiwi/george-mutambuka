import dribbbleIcon from './icons/dribbble.svg'
import youtubeIcon from './icons/youtube.svg'

const links = [
  {
    children: `Home`,
    to: `/`,
  },
  {
    children: `Vector Projects`,
    to: `/vector`,
  },
  {
    children: '3D Projects',
    to: '/3d',
  },
  {
    children: `Contact`,
    to: `/contact`,
  },
  {
    children: 'Blog',
    to: '/blog',
  },
]

export const icons = [
  {
    icon: dribbbleIcon,
    href: 'https://dribbble.com/TheGiwi',
    alt: 'Dribbble',
  },
  {
    icon: youtubeIcon,
    href: 'https://www.youtube.com/channel/UC7sqF3SKz8PSNq8x7zCYI5A',
    alt: 'YouTube',
  },
]

export default links
