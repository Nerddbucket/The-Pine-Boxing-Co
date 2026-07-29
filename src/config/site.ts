export const site = {
  name: 'The Pines Boxing Co.',
  shortName: 'THE PINES',
  subtitle: 'BOXING CO.',
  tagline: 'Stronger body. Sharper mind. One round at a time.',
  url: 'https://www.thepinesboxingco.com',
  locale: 'en-US',

  nav: [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CLASSES', href: '#classes' },
    { label: 'SCHEDULE', href: '#schedule' },
    { label: 'CONTACT', href: '#contact' },
  ],

  zenplanner: {
    host: 'https://studio.zenplanner.com',
    scriptPath: 'zenplanner/studio/target/zp-widget-direct.js',
    partitionApiKey: 'f8a09dbf-b010-44f5-b82e-99063e244391',
    calendar: {
      module: 'calendar',
      widgetInstanceId: '15c8cf65-daed-4b5c-94fe-e7e28cfe92db',
    },
  },

  schedule: {
    title: 'CLASS SCHEDULE',
    description: 'Browse upcoming classes and book your spot online.',
  },

  ctas: {
    heroPrimary: { label: 'OUR CLASSES', href: '#classes' },
  },

  hero: {
    line1: 'STRONGER BODY. SHARPER MIND.',
    line2: 'ONE ROUND AT A TIME.',
    description:
      'The Pines Boxing Co. is a community-focused boxing gym built for beginners and experienced fighters alike. Train with purpose, build confidence, and leave every session stronger than you arrived.',
    image: '/hero-boxing.png',
  },

  about: {
    title: 'ABOUT THE GYM',
    description:
      'We combine classic boxing fundamentals with modern conditioning so every member can train safely, progress steadily, and stay motivated. Whether you want fitness, competition prep, or stress relief — you belong here.',
    features: [
      { icon: 'gloves', label: 'BOXING FUNDAMENTALS' },
      { icon: 'heavy-bag', label: 'HEAVY BAG TRAINING' },
      { icon: 'cardio', label: 'CONDITIONING & CARDIO' },
      { icon: 'strength', label: 'STRENGTH & ENDURANCE' },
      { icon: 'group', label: 'GROUP CLASSES' },
      { icon: 'mindset', label: 'DISCIPLINE, CONFIDENCE, CONSISTENCY' },
    ],
    tagline: ['NO EXPERIENCE NEEDED.', 'ALL FITNESS LEVELS WELCOME.'],
  },

  mission: {
    title: 'OUR MISSION',
    body: 'Our mission is to make boxing accessible, challenging, and rewarding for everyone who walks through our doors. We focus on technique, effort, and respect — creating a space where members push limits while supporting one another.',
    lines: ['TRAIN HARD. STAY HUMBLE.', 'KEEP MOVING FORWARD.'],
  },

  classes: {
    title: 'OUR CLASSES',
    description: 'From fundamentals to fight prep, every class is coached with structure and intent.',
    items: [
      {
        name: 'BOXING FUNDAMENTALS',
        description: 'Learn stance, footwork, and basic combinations in a beginner-friendly format.',
      },
      {
        name: 'HEAVY BAG & MITTS',
        description: 'Build power, timing, and accuracy with bag work and partner drills.',
      },
      {
        name: 'CONDITIONING',
        description: 'High-energy rounds focused on cardio, core, and full-body endurance.',
      },
      {
        name: 'SPARRING (INVITE ONLY)',
        description: 'Controlled sparring for experienced members with coach supervision.',
      },
    ],
  },

  contact: {
    email: 'info@pinesboxing.com',
    phones: ['(910) 246-8429'],
    address: '120 W Morganton Rd, Southern Pines, NC 28387',
    hours: 'Mon–Fri 5:00 AM – 9:00 AM & 4:00 PM – 9:00 PM · Sat 8:00 AM – 1:00 PM · Sun Closed',
  },

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },

  logo: {
    src: '/logo.png',
    alt: 'The Pines Boxing Co. — Train Hard, Fight Smart',
  },

  seo: {
    title: 'The Pines Boxing Co. | Boxing Gym',
    description:
      'Train boxing fundamentals, heavy bag work, and conditioning at The Pines Boxing Co. All fitness levels welcome.',
    ogImage: '/logo-full.png',
  },
} as const;

export type SiteConfig = typeof site;
