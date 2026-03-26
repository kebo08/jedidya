const galleryBase = '/stitch-gallery';

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#featured-work' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Jedidiah Photography',
  title: 'The story lives in the pause between frames.',
  body:
    'An editorial portfolio shaped by coastal light, forest silence, and patient composition. Built for clients who want photographs that feel lived in, not staged.',
  primaryCta: { label: 'View selected work', href: '#featured-work' },
  secondaryCta: { label: 'Start a project', href: '#contact' },
  image: {
    src: `${galleryBase}/hero-dawn-lake.jpg`,
    alt: 'Misty blue mountains reflected in a calm lake at dawn',
  },
};

export const stats = [
  { value: '12+', label: 'Years behind the lens' },
  { value: '180+', label: 'Editorial and portrait sessions' },
  { value: '24', label: 'Countries and regions documented' },
  { value: '1', label: 'Consistent visual language' },
];

export const featuredWorks = [
  {
    title: 'Whispering Pines',
    category: 'Landscape series',
    year: '2024',
    description:
      'Layered fog, vertical trunks, and a muted forest palette tuned for long-scroll parallax storytelling.',
    image: {
      src: `${galleryBase}/foggy-pines.jpg`,
      alt: 'Ancient pine trees dissolving into thick morning fog',
    },
  },
  {
    title: 'Granite & Grace',
    category: 'Mountain detail',
    year: '2024',
    description:
      'A tighter frame that balances hard texture with soft atmospheric distance.',
    image: {
      src: `${galleryBase}/granite-peak.jpg`,
      alt: 'Jagged granite mountain peak with a dusting of snow',
    },
  },
  {
    title: 'Inner Light',
    category: 'Portrait session',
    year: '2023',
    description:
      'Natural window light, subdued color, and an intimate crop that feels cinematic without losing warmth.',
    image: {
      src: `${galleryBase}/portrait-window-light.jpg`,
      alt: 'Atmospheric portrait lit by soft natural window light',
    },
  },
];

export const galleryEntries = [
  {
    title: 'Blue Hour',
    tag: 'Reflections',
    image: {
      src: `${galleryBase}/hero-dawn-lake.jpg`,
      alt: 'Blue mountain lake mirrored at dawn',
    },
  },
  {
    title: 'Mist Field',
    tag: 'Atmosphere',
    image: {
      src: `${galleryBase}/misty-lake-cabin.jpg`,
      alt: 'Cabin and pine trees reflected in a misty alpine lake',
    },
  },
  {
    title: 'Woodland Beam',
    tag: 'Light study',
    image: {
      src: `${galleryBase}/redwood-rays.jpg`,
      alt: 'Light rays streaming through a redwood canopy',
    },
  },
  {
    title: 'Open Hills',
    tag: 'Terrain',
    image: {
      src: `${galleryBase}/rolling-hills.jpg`,
      alt: 'Soft rolling green hills beneath overcast light',
    },
  },
  {
    title: 'River Glint',
    tag: 'Movement',
    image: {
      src: `${galleryBase}/sunlit-river.jpg`,
      alt: 'Golden sunlight shimmering on moving river water',
    },
  },
  {
    title: 'Morning Grain',
    tag: 'Process',
    image: {
      src: `${galleryBase}/foggy-pines.jpg`,
      alt: 'Fog weaving through dense pine forest',
    },
  },
  {
    title: 'Portrait Study',
    tag: 'People',
    image: {
      src: `${galleryBase}/portrait-window-light.jpg`,
      alt: 'Portrait framed in moody natural window light',
    },
  },
  {
    title: 'Quiet Crest',
    tag: 'Peak line',
    image: {
      src: `${galleryBase}/granite-peak.jpg`,
      alt: 'Close detail of a granite mountain ridge against open sky',
    },
  },
];

export const about = {
  title: 'Photography shaped by silence, distance, and restraint.',
  body:
    'Jedidiah works in a visual register that borrows from editorial design and patient field observation. The result is a portfolio where the images do not sit in boxes; they move through space with the scroll.',
  image: {
    src: `${galleryBase}/foggy-pines.jpg`,
    alt: 'Fog moving through a stand of pines',
  },
};

export const contact = {
  heading: 'Plan the next shoot',
  body:
    'For portraits, landscapes, branding, and long-form editorial commissions.',
  email: 'hello@jedidiah.photography',
  location: 'Pacific Northwest, available for travel',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Behance', href: '#' },
    { label: 'Email', href: 'mailto:hello@jedidiah.photography' },
  ],
};

const siteContent = {
  navigation,
  hero,
  stats,
  featuredWorks,
  galleryEntries,
  about,
  contact,
};

export default siteContent;
