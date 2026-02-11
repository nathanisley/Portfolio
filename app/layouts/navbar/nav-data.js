import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: config.linkedin,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: config.github,
    icon: 'github',
  },
  {
    label: 'Discogs',
    url: config.discogs,
    icon: 'discogs',
  },
  {
    label: 'Bandcamp',
    url: config.bandcamp,
    icon: 'bandcamp',
  },
];
