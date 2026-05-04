import type { SiteConfig } from '@/lib/types';

export const djConfig: SiteConfig = {
  meta: {
    name: 'AMARA',
    alias: 'AMARA',
    role: 'Electronic Music Producer & Live Performer',
    location: 'Nairobi, Kenya',
    siteTitle: 'AMARA — Electronic Music Producer',
    siteDescription:
      'Nairobi born electronic music producer and live performer. Booking enquiries for clubs, festivals and private events worldwide.',
  },

  theme: {
    accent: '#7C5FF0',
    accentSecondary: '#4FC3F7',
    accentGlow: 'rgba(124, 95, 240, 0.35)',
    creativeType: 'dj',
  },

  nav: {
    links: [
      { label: 'Music', href: '#portfolio' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: 'Book Now', href: '#contact' },
  },

  hero: {
    badge: 'Available for bookings worldwide',
    headline: 'THE SOUND',
    headlineAccent: 'THAT MOVES YOU',
    subheadline: 'Electronic Music Producer · Nairobi, Kenya',
    description:
      'Crafting immersive sonic landscapes born from Nairobi\'s underground scene and refined on dancefloors across three continents. From intimate club nights to mainstage festival moments.',
    primaryCta: { label: 'Book a Show', href: '#contact' },
    secondaryCta: { label: 'Listen Now', href: '#portfolio' },
    backgroundImage:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80',
    stats: [
      { value: '150+', label: 'Shows Played' },
      { value: '20M+', label: 'Streams' },
      { value: '25+', label: 'Countries' },
    ],
    scrollLabel: 'Scroll to explore',
  },

  about: {
    headline: 'The architect',
    subheadline: 'of sound',
    body: [
      'AMARA grew up in Nairobi\'s Westlands district, where matatu music, underground raves and the rhythm of city life became the foundation of a sound unlike anything coming out of East Africa at the time. What started as a weekly residency at a Nairobi rooftop eventually became a passport to stages across Europe, the US and beyond.',
      'A decade on, AMARA\'s music sits at the intersection of African electronic tradition and contemporary club culture. Deeply rooted in where it came from, and completely at home wherever it lands. Every set is a conversation between where the music is from and where the crowd is going.',
    ],
    image:
      'https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?w=900&q=80',
    quote: 'The dancefloor does not lie.',
    quoteAuthor: 'AMARA',
    highlights: [
      { label: 'Years Active', value: '10' },
      { label: 'Labels Released On', value: '6' },
      { label: 'Festivals', value: '40+' },
      { label: 'Residencies', value: '3' },
    ],
    cta: { label: 'Full Bio', href: '#contact' },
  },

  portfolio: {
    headline: 'The work',
    subheadline: 'Tracks, sets and moments',
    tabs: [
      { id: 'tracks', label: 'Tracks' },
      { id: 'sets', label: 'Live Sets' },
      { id: 'gallery', label: 'Gallery' },
    ],
    items: {
      tracks: [
        {
          id: 'track-1',
          type: 'audio',
          title: 'Savanna Protocol',
          subtitle: 'Original Mix',
          thumbnail:
            'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&q=80',
          src: '',
          duration: '7:42',
          genre: 'Afro Techno',
          year: '2024',
        },
        {
          id: 'track-2',
          type: 'audio',
          title: 'Rift Valley',
          subtitle: 'Extended Mix',
          thumbnail:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
          src: '',
          duration: '9:15',
          genre: 'Progressive',
          year: '2024',
        },
        {
          id: 'track-3',
          type: 'audio',
          title: 'Nairobi At 3AM',
          subtitle: 'Club Edit',
          thumbnail:
            'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
          src: '',
          duration: '6:30',
          genre: 'Dark Electro',
          year: '2023',
        },
        {
          id: 'track-4',
          type: 'audio',
          title: 'Uhuru Nights',
          subtitle: 'Original Mix',
          thumbnail:
            'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80',
          src: '',
          duration: '8:01',
          genre: 'Afro House',
          year: '2023',
        },
      ],
      sets: [
        {
          id: 'set-1',
          type: 'video',
          title: 'Berghain Closing Set',
          subtitle: 'Berlin · June 2024',
          thumbnail:
            'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
          videoId: 'dQw4w9WgXcQ',
          duration: '3h 20m',
          year: '2024',
        },
        {
          id: 'set-2',
          type: 'video',
          title: 'Nyege Nyege Festival',
          subtitle: 'Jinja, Uganda · September 2024',
          thumbnail:
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
          videoId: 'dQw4w9WgXcQ',
          duration: '2h 00m',
          year: '2024',
        },
        {
          id: 'set-3',
          type: 'video',
          title: 'Fabric London Boiler Room',
          subtitle: 'London · January 2024',
          thumbnail:
            'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80',
          videoId: 'dQw4w9WgXcQ',
          duration: '1h 45m',
          year: '2024',
        },
      ],
      gallery: [
        {
          id: 'gallery-1',
          type: 'image',
          title: 'Nyege Nyege 2024',
          thumbnail:
            'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
          year: '2024',
        },
        {
          id: 'gallery-2',
          type: 'image',
          title: 'Studio Session, Nairobi',
          thumbnail:
            'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
          year: '2024',
        },
        {
          id: 'gallery-3',
          type: 'image',
          title: 'Fabric London',
          thumbnail:
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
          year: '2024',
        },
        {
          id: 'gallery-4',
          type: 'image',
          title: 'Movement Detroit',
          thumbnail:
            'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=800&q=80',
          year: '2023',
        },
        {
          id: 'gallery-5',
          type: 'image',
          title: 'Blankets and Wine, Nairobi',
          thumbnail:
            'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80',
          year: '2023',
        },
        {
          id: 'gallery-6',
          type: 'image',
          title: 'Tresor Berlin',
          thumbnail:
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
          year: '2023',
        },
      ],
    },
  },

  services: {
    headline: 'Work with me',
    subheadline: 'How we can collaborate',
    description:
      'Every show is built around the room, the crowd and the moment. No two sets are the same.',
    items: [
      {
        title: 'Club Night',
        description:
          'Intimate venue sets tailored to the space — building tension, releasing energy and leaving the room transformed.',
        price: 'From €2,500',
        priceNote: '+ travel and accommodation',
        features: [
          '2 to 6 hour live set',
          'Modular live setup available',
          'Full technical rider provided',
          'Setlist curated per venue',
          'Pre show venue consultation',
        ],
        cta: { label: 'Enquire', href: '#contact' },
      },
      {
        title: 'Festival / Mainstage',
        description:
          'Built for scale. Visual sync, live elements and the kind of crowd command that comes from doing this on three continents.',
        price: 'From €8,000',
        priceNote: 'Full quote available',
        features: [
          'Full production rider',
          'Visual and lighting sync',
          'Up to 90 minute mainstage set',
          'Press and promo materials',
          'Dedicated stage manager',
        ],
        cta: { label: 'Enquire', href: '#contact' },
        highlight: true,
      },
      {
        title: 'Private Event',
        description:
          'Bespoke experiences for brand activations, product launches and private celebrations. Worldwide.',
        price: 'On request',
        priceNote: 'Custom packages available',
        features: [
          'Custom set duration',
          'Genre and mood brief',
          'Branded visual package',
          'NDA available',
          'Global availability',
        ],
        cta: { label: 'Enquire', href: '#contact' },
      },
    ],
    footerNote:
      'All bookings are by direct enquiry. You will hear back within 48 hours.',
  },

  socialProof: {
    headline: 'The numbers',
    subheadline: 'A decade of impact',
    stats: [
      { value: '20', suffix: 'M+', label: 'Total Streams' },
      { value: '150', suffix: '+', label: 'Shows Worldwide' },
      { value: '25', suffix: '+', label: 'Countries' },
      { value: '10', label: 'Years Active' },
    ],
    logos: [
      { name: 'Berghain' },
      { name: 'Fabric' },
      { name: 'Nyege Nyege' },
      { name: 'Movement' },
      { name: 'Sonar' },
      { name: 'Blankets & Wine' },
    ],
    testimonials: [
      {
        quote:
          'AMARA delivered one of the most technically precise and emotionally devastating sets we have hosted. The crowd did not want it to end.',
        author: 'Marco T.',
        role: 'Resident Advisor · Berghain Resident',
      },
      {
        quote:
          'Effortless professionalism and a genuine understanding of the room. Every booking is seamless from first email to last track.',
        author: 'Lisa K.',
        role: 'Booking Manager, Nyege Nyege Festival',
      },
      {
        quote:
          'There is something in AMARA\'s music that feels specific — you can hear where it comes from. And that is exactly what makes it universal.',
        author: 'James R.',
        role: 'Creative Director, Movement Festival',
      },
    ],
  },

  contact: {
    headline: 'Let\'s create',
    subheadline: 'something unforgettable',
    description:
      'For booking enquiries, collaborations or press — reach out directly. All enquiries get a response within 48 hours.',
    email: 'bookings@amara-music.com',
    bookingUrl: 'https://calendly.com/amara-music',
    bookingLabel: 'Schedule a Call',
    socials: [
      { platform: 'Instagram', href: '#', handle: '@amara.music' },
      { platform: 'SoundCloud', href: '#', handle: 'amara-official' },
      { platform: 'Spotify', href: '#', handle: 'AMARA' },
      { platform: 'Facebook', href: '#', handle: 'AMARAmusic' },
    ],
  },

  footer: {
    tagline: 'Built for the dancefloor.',
    links: [
      { label: 'Music', href: '#portfolio' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    socials: [
      { platform: 'Instagram', href: '#' },
      { platform: 'SoundCloud', href: '#' },
      { platform: 'Spotify', href: '#' },
    ],
    copyright: '© 2025 AMARA. All rights reserved.',
  },
};
