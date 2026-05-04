import type { SiteConfig } from '@/lib/types';

export const photographerConfig: SiteConfig = {
  meta: {
    name: 'Nadia Osei',
    role: 'Editorial & Portrait Photographer',
    location: 'Nairobi, Kenya',
    siteTitle: 'Nadia Osei — Editorial Photographer',
    siteDescription:
      'Lagos born, Nairobi based editorial and portrait photographer. Creating images for international publications, brands and individuals.',
  },

  theme: {
    accent: '#C4A265',
    accentSecondary: '#E8D5B0',
    accentGlow: 'rgba(196, 162, 101, 0.25)',
    creativeType: 'photographer',
  },

  nav: {
    links: [
      { label: 'Work', href: '#portfolio' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: 'Book a Session', href: '#contact' },
  },

  hero: {
    badge: 'Booking portrait and editorial sessions',
    headline: 'Moments made',
    headlineAccent: 'eternal',
    subheadline: 'Editorial & Portrait Photographer · Nairobi, Kenya',
    description:
      'I photograph the quiet drama of human presence. Editorial campaigns, intimate portraits, brand storytelling — images that outlast the moment and carry the full weight of who a person is.',
    primaryCta: { label: 'View Portfolio', href: '#portfolio' },
    secondaryCta: { label: 'Book a Session', href: '#contact' },
    backgroundImage:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1920&q=80',
    stats: [
      { value: '400+', label: 'Sessions' },
      { value: '25+', label: 'Publications' },
      { value: '8', label: 'Years' },
    ],
    scrollLabel: 'Explore the work',
  },

  about: {
    headline: 'The eye behind',
    subheadline: 'the lens',
    body: [
      'I am Nadia — born in Lagos, raised between Lagos and London, and now based in Nairobi where East African light and energy have completely changed how I see. My work lives at the intersection of editorial precision and genuine human connection. I am drawn to people as they actually are, not as they think they should look.',
      'After training in fine arts at UAL and assisting on editorial shoots across London and Accra, I came back to the continent with a clearer eye and a deeper sense of what African beauty looks like when it is not being translated for someone else\'s audience. The work is for the people in it as much as it is for anyone looking at it.',
    ],
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80',
    quote: 'Every face has a story that deserves to be told honestly.',
    quoteAuthor: 'Nadia Osei',
    highlights: [
      { label: 'Years Active', value: '8' },
      { label: 'Sessions Completed', value: '400+' },
      { label: 'Publication Credits', value: '25+' },
      { label: 'Countries Shot In', value: '12' },
    ],
    cta: { label: 'Read Full Story', href: '#contact' },
  },

  portfolio: {
    headline: 'Selected work',
    subheadline: 'Editorial · Portrait · Brand',
    tabs: [
      { id: 'editorial', label: 'Editorial' },
      { id: 'portrait', label: 'Portrait' },
      { id: 'brand', label: 'Brand' },
    ],
    items: {
      editorial: [
        {
          id: 'ed-1',
          type: 'image',
          title: 'Golden Hour',
          subtitle: 'Vogue Africa · 2024',
          thumbnail:
            'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
          year: '2024',
        },
        {
          id: 'ed-2',
          type: 'image',
          title: 'Nairobi Modern',
          subtitle: 'Arise Magazine · 2024',
          thumbnail:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
          year: '2024',
        },
        {
          id: 'ed-3',
          type: 'image',
          title: 'The Still Hour',
          subtitle: 'Dazed & Confused · 2023',
          thumbnail:
            'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80',
          year: '2023',
        },
        {
          id: 'ed-4',
          type: 'image',
          title: 'Coastal Light',
          subtitle: 'AnOther Magazine · 2023',
          thumbnail:
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
          year: '2023',
        },
        {
          id: 'ed-5',
          type: 'image',
          title: 'Afternoon Study',
          subtitle: 'ELLE · 2023',
          thumbnail:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
          year: '2023',
        },
        {
          id: 'ed-6',
          type: 'image',
          title: 'Light and Shadow',
          subtitle: 'Numero · 2022',
          thumbnail:
            'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=800&q=80',
          year: '2022',
        },
      ],
      portrait: [
        {
          id: 'pt-1',
          type: 'image',
          title: 'Amara',
          subtitle: 'Personal portrait series',
          thumbnail:
            'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
          year: '2024',
        },
        {
          id: 'pt-2',
          type: 'image',
          title: 'Kofi',
          subtitle: 'Actor portfolio',
          thumbnail:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
          year: '2024',
        },
        {
          id: 'pt-3',
          type: 'image',
          title: 'Zawadi',
          subtitle: 'Musician portrait',
          thumbnail:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
          year: '2024',
        },
        {
          id: 'pt-4',
          type: 'image',
          title: 'The Sculptor',
          subtitle: 'Artist portrait series, Nairobi',
          thumbnail:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80',
          year: '2023',
        },
      ],
      brand: [
        {
          id: 'br-1',
          type: 'image',
          title: 'Adele Dejak',
          subtitle: 'Campaign imagery · Nairobi',
          thumbnail:
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
          year: '2024',
        },
        {
          id: 'br-2',
          type: 'image',
          title: 'Katungulu Mwendwa',
          subtitle: 'Lookbook production',
          thumbnail:
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
          year: '2024',
        },
        {
          id: 'br-3',
          type: 'image',
          title: 'Suave Kenya',
          subtitle: 'Brand identity imagery',
          thumbnail:
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
          year: '2023',
        },
        {
          id: 'br-4',
          type: 'image',
          title: 'Christie Brown',
          subtitle: 'Editorial and e-commerce · Accra',
          thumbnail:
            'https://images.unsplash.com/photo-1507920676663-2e5f9fb0c5be?w=800&q=80',
          year: '2023',
        },
      ],
    },
  },

  services: {
    headline: 'Work together',
    subheadline: 'What I offer',
    description:
      'Every project starts with a conversation. I want to understand what you are trying to say before we pick up a camera.',
    items: [
      {
        title: 'Portrait Session',
        description:
          'For individuals who want images that actually look like them — not a version of themselves filtered through someone else\'s idea of beautiful.',
        price: 'From $850',
        priceNote: '2 hour session · 25 edited images',
        features: [
          '2 hour studio or location session',
          'Professional direction throughout',
          '25 fully edited high resolution images',
          'Private online gallery',
          'Print licensing included',
        ],
        cta: { label: 'Book Session', href: '#contact' },
      },
      {
        title: 'Editorial Shoot',
        description:
          'Full editorial productions for magazines, online publications and creative personal projects. From concept to final delivery.',
        price: 'From $2,800',
        priceNote: 'Full day · complete production',
        features: [
          'Full day production, up to 10 hours',
          'Concept and mood board development',
          'Location scouting and permits',
          '60+ edited final images',
          'Usage rights for publication',
        ],
        cta: { label: 'Book Session', href: '#contact' },
        highlight: true,
      },
      {
        title: 'Brand Photography',
        description:
          'Visual storytelling for fashion labels, lifestyle brands and creative businesses. Campaign to content library.',
        price: 'From $4,500',
        priceNote: 'Custom packages available',
        features: [
          'Multi day shoot options',
          'Full brand imagery library',
          'Product and lifestyle photography',
          'Social content assets included',
          'Commercial licensing',
        ],
        cta: { label: 'Get a Quote', href: '#contact' },
      },
    ],
    footerNote: 'All sessions include a pre-shoot consultation call.',
  },

  socialProof: {
    headline: 'Trust and recognition',
    subheadline: 'The work speaks for itself',
    stats: [
      { value: '400', suffix: '+', label: 'Sessions Completed' },
      { value: '25', suffix: '+', label: 'Publication Credits' },
      { value: '12', label: 'Countries Worked In' },
      { value: '96', suffix: '%', label: 'Client Return Rate' },
    ],
    logos: [
      { name: 'Vogue Africa' },
      { name: 'Arise Magazine' },
      { name: 'Dazed & Confused' },
      { name: 'ELLE' },
      { name: 'AnOther Mag' },
      { name: 'Numero' },
    ],
    testimonials: [
      {
        quote:
          'Nadia has this gift for making you forget the camera is there. The portraits she made for me are the most honest photographs I have ever seen of myself.',
        author: 'Zawadi M.',
        role: 'Musician and recording artist',
      },
      {
        quote:
          'We have worked with many photographers. Nadia\'s editorial eye is genuinely different. She understands what African beauty looks like without translating it for someone else.',
        author: 'Ama D.',
        role: 'Creative Director, Adele Dejak',
      },
      {
        quote:
          'Professionalism, artistry and real human warmth in every session. I come back to Nadia because nobody else makes my clients look this alive.',
        author: 'Marcus O.',
        role: 'Talent Manager',
      },
    ],
  },

  contact: {
    headline: 'Start a',
    subheadline: 'conversation',
    description:
      'Whether you are booking a session, pitching an editorial or just want to say hello — I would genuinely love to hear from you.',
    email: 'hello@nadiaosei.com',
    bookingUrl: 'https://calendly.com/nadiaosei',
    bookingLabel: 'Schedule a Consultation',
    socials: [
      { platform: 'Instagram', href: '#', handle: '@nadia.osei' },
      { platform: 'Behance', href: '#', handle: 'nadia-osei' },
      { platform: 'LinkedIn', href: '#', handle: 'Nadia Osei' },
      { platform: 'Pinterest', href: '#', handle: 'nadiaosei' },
    ],
  },

  footer: {
    tagline: 'Photographing people as they actually are.',
    links: [
      { label: 'Work', href: '#portfolio' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    socials: [
      { platform: 'Instagram', href: '#' },
      { platform: 'Behance', href: '#' },
      { platform: 'LinkedIn', href: '#' },
    ],
    copyright: '© 2025 Nadia Osei. All rights reserved.',
  },
};
