export const site = {
  name: 'The Pines Boxing Co.',
  shortName: 'THE PINES',
  subtitle: 'BOXING CO.',
  tagline: 'Stronger body. Sharper mind. One round at a time.',
  url: 'https://thepinesboxing.com',
  locale: 'en-US',
  draft: false,

  nav: [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CLASSES', href: '#classes' },
    { label: 'SCHEDULE', href: '#schedule' },
    { label: 'MEMBERSHIP', href: '#membership' },
    { label: 'CONTACT', href: '#contact' },
  ],

  scheduling: {
    ownerId: '39358236',
    href: 'https://app.acuityscheduling.com/schedule.php?owner=39358236&ref=booking_button',
    buttonLabel: 'Schedule Appointment',
    cssUrl: 'https://embed.acuityscheduling.com/embed/button/39358236.css',
    scriptUrl: 'https://embed.acuityscheduling.com/embed/button/39358236.js',
  },

  ctas: {
    header: { label: 'JOIN TODAY' },
    heroPrimary: { label: 'OUR CLASSES', href: '#classes' },
    heroSecondary: { label: 'SCHEDULE APPOINTMENT' },
  },

  hero: {
    line1: 'STRONGER BODY. SHARPER MIND.',
    line2: 'ONE ROUND AT A TIME.',
    description:
      'The Pines Boxing Co. is a community-focused boxing gym built for beginners and experienced fighters alike. Train with purpose, build confidence, and leave every session stronger than you arrived.',
    video: '/hero-video.mov',
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
    summerCamp: {
      title: 'SUMMER YOUTH CAMP',
      tagline: 'Kids learn boxing fundamentals in a fun, structured summer program.',
      description:
        'Our summer youth camp introduces kids to boxing basics — stance, footwork, hand wraps, bag work, and conditioning — in a safe, coach-led environment. No experience required. All skill levels welcome.',
      ages: 'Ages 8–14',
      season: 'June through August',
      schedule: 'Mon–Fri · 9:00 AM – 12:00 PM',
      highlights: [
        'Beginner-friendly boxing fundamentals',
        'Age-appropriate bag work and drills',
        'Fitness, coordination, and confidence building',
        'Experienced coaches · small group sizes',
      ],
      cta: { label: 'REGISTER FOR CAMP' },
    },
  },

  schedule: {
    title: 'CLASS SCHEDULE',
    description: 'Sample weekly schedule — update times in site.ts when the client confirms.',
    days: [
      { day: 'MON', times: ['6:00 AM Fundamentals', '12:00 PM Conditioning', '6:30 PM Bag Work'] },
      { day: 'TUE', times: ['6:00 AM Conditioning', '5:30 PM Fundamentals'] },
      { day: 'WED', times: ['6:00 AM Fundamentals', '12:00 PM Bag Work', '6:30 PM Conditioning'] },
      { day: 'THU', times: ['6:00 AM Bag Work', '5:30 PM Conditioning'] },
      { day: 'FRI', times: ['6:00 AM Fundamentals', '12:00 PM Open Gym', '5:30 PM Bag Work'] },
      { day: 'SAT', times: ['9:00 AM All Levels', '11:00 AM Conditioning'] },
      { day: 'SUN', times: ['10:00 AM Open Gym'] },
    ],
  },

  membership: {
    title: 'MEMBERSHIP',
    description: 'Simple options to get started. No long-term contracts on intro plans.',
    tiers: [
      {
        name: 'DROP-IN',
        price: '$25',
        period: 'per session',
        features: ['Single class access', 'Great for first-timers', 'Full facility access'],
      },
      {
        name: 'UNLIMITED',
        price: '$149',
        period: 'per month',
        features: ['Unlimited group classes', 'Open gym access', 'Member events', 'Best value'],
        highlighted: true,
      },
      {
        name: '10-CLASS PACK',
        price: '$199',
        period: 'pack',
        features: ['10 classes', '3-month expiration', 'Flexible scheduling'],
      },
    ],
  },

  contact: {
    email: 'info@pinesboxing.com',
    phone: '(555) 123-4567',
    address: '120 W Morganton Rd, Southern Pines, NC 28387',
    hours: 'Mon–Fri 5:30 AM – 8:00 PM · Sat 8:00 AM – 1:00 PM · Sun 9:00 AM – 12:00 PM',
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
      'Train boxing fundamentals, heavy bag work, and conditioning at The Pines Boxing Co. All fitness levels welcome. Join today.',
    ogImage: '/logo-full.png',
  },
} as const;

export type SiteConfig = typeof site;
