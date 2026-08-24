export interface Project {
  id: string
  category: 'ads' | 'vsls'
  title: string
  gumletId: string
  thumbnail: string
  videoUrl: string
  horizontalThumbnail: boolean
  isVertical?: boolean
}

export interface Stat {
  value: string
  label: string
}

export interface WhyMeCard {
  number: string
  title: string
  description: string
}

export interface FaqItem {
  number: string
  question: string
  answer: string
}

export interface Logo {
  name: string
  svg: string
}

export interface LogoImage {
  name: string
  src: string
  scale?: number
}

export const projects: Project[] = [
  {
    id: '1',
    category: 'ads',
    title: 'AD 1',
    gumletId: '6a8b523eab2c54150e93ea94',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&q=80',
    videoUrl: 'https://play.gumlet.io/embed/6a8b523eab2c54150e93ea94',
    horizontalThumbnail: true,
  },
  {
    id: '2',
    category: 'ads',
    title: 'AD 2',
    gumletId: '6a8b5302cad008e012bd258b',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    videoUrl: 'https://play.gumlet.io/embed/6a8b5302cad008e012bd258b',
    horizontalThumbnail: true,
  },
  {
    id: '3',
    category: 'ads',
    title: 'AD 3',
    gumletId: '6a8b53c5cad008e012bd2875',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    videoUrl: 'https://play.gumlet.io/embed/6a8b53c5cad008e012bd2875',
    horizontalThumbnail: true,
  },
  {
    id: '4',
    category: 'vsls',
    title: 'VSL 1',
    gumletId: '6a8b524fcad008e012bd2313',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    videoUrl: 'https://play.gumlet.io/embed/6a8b524fcad008e012bd2313',
    horizontalThumbnail: true,
  },
  {
    id: '5',
    category: 'vsls',
    title: 'VSL 2',
    gumletId: '6a8b5138ab2c54150e93e745',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    videoUrl: 'https://play.gumlet.io/embed/6a8b5138ab2c54150e93e745',
    horizontalThumbnail: true,
  },
  {
    id: '6',
    category: 'ads',
    title: 'AD 4',
    gumletId: '6a8b50826946b9808fc53fb7',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&q=80',
    videoUrl: 'https://play.gumlet.io/embed/6a8b50826946b9808fc53fb7',
    horizontalThumbnail: true,
    isVertical: true,
  },
  {
    id: '7',
    category: 'ads',
    title: 'AD 5',
    gumletId: '6a8b50e16946b9808fc540c6',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    videoUrl: 'https://play.gumlet.io/embed/6a8b50e16946b9808fc540c6',
    horizontalThumbnail: true,
    isVertical: true,
  },
  {
    id: '8',
    category: 'vsls',
    title: 'VSL 3',
    gumletId: '6a8b51c9ab2c54150e93e942',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    videoUrl: 'https://play.gumlet.io/embed/6a8b51c9ab2c54150e93e942',
    horizontalThumbnail: true,
    isVertical: true,
  },
  {
    id: '9',
    category: 'vsls',
    title: 'VSL 4',
    gumletId: '6a8b51d56946b9808fc54416',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&q=80',
    videoUrl: 'https://play.gumlet.io/embed/6a8b51d56946b9808fc54416',
    horizontalThumbnail: true,
  },
]

export const stats: Stat[] = [
  { value: '500M+', label: 'Paid views generated' },
  { value: '100+', label: 'Clients served' },
  { value: '1000+', label: 'Projects completed' },
  { value: '8+', label: 'Years of experience' },
]

export const whyMeCards: WhyMeCard[] = [
  {
    number: '01',
    title: 'Performance',
    description:
      'I use performance analysis, research, and insights I\u2019ve gathered by completing 1000+ projects to make informed editing decisions. Everything I do is backed by data on what turns viewers into buyers, not my personal preference.',
  },
  {
    number: '02',
    title: 'Psychology',
    description:
      'High-converting editing is all about guiding the viewer\u2019s attention, thoughts, and emotions. Every editing decision I make is designed to influence what the viewer sees and feels, in a way that makes them take action.',
  },
  {
    number: '03',
    title: 'Personalization',
    description:
      'What works for a 6-figure E-com brand isn\u2019t going to work for a 9-figure financial service business. I take your demographic, your message, your product and craft an experience tailored to what will work for your specific business.',
  },
]

export const faqItems: FaqItem[] = [
  {
    number: '01',
    question: "What's the cost?",
    answer:
      'The cost depends on the scope of work, complexity and length of the project. Contact me to get a quote tailored to your needs.',
  },
  {
    number: '02',
    question: "What's the delivery time?",
    answer:
      'First versions of ads up to 5 minutes long are delivered within 48 hours. For bigger projects like VSLs or larger ad batches the delivery time will be confirmed after discussing the scope of work.',
  },
  {
    number: '03',
    question: 'Can you handle big files and high resolutions?',
    answer:
      "Absolutely! I've had the chance to work on 6K files shot on $100K RED cameras. I had projects where the files alone took up over 1TB of space. Doesn't matter if you need 1080p, 4K, or even 6K - I can handle it.",
  },
  {
    number: '04',
    question: "What if the video isn't up to my standards?",
    answer:
      "Simple. I will work on it until it is. My priority is making sure every project I work on is a success for both me and my clients. That's why revisions are included in the price.",
  },
]

export const logos: Logo[] = [
  {
    name: 'ExtraSeed',
    svg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="28" font-family="Arial Black" font-size="18" font-weight="900" fill="currentColor">ExtraSeed</text></svg>`,
  },
  {
    name: 'orbio',
    svg: `<svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="3"/><text x="38" y="27" font-family="Arial" font-size="16" font-weight="bold" fill="currentColor">orbio</text></svg>`,
  },
  {
    name: 'AMERICOR',
    svg: `<svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="28" font-family="Arial" font-size="16" font-weight="bold" fill="currentColor">AMERICOR</text></svg>`,
  },
  {
    name: 'matsdto',
    svg: `<svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="28" font-family="Arial" font-size="16" font-weight="bold" fill="currentColor">matsdto</text></svg>`,
  },
  {
    name: 'derila ergo',
    svg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="26" font-family="Georgia" font-size="14" font-style="italic" fill="currentColor">derila ergo</text></svg>`,
  },
  {
    name: 'Paid It Media',
    svg: `<svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="26" font-family="Arial" font-size="15" font-weight="bold" fill="currentColor">Paid It Media</text></svg>`,
  },
]

export const logoImages: LogoImage[] = [
  { name: 'Orbio World', src: '/assets/logos/normalized/logo-0.png' },
  { name: 'AuraSeed', src: '/assets/logos/normalized/logo-1.png' },
  { name: 'Americor', src: '/assets/logos/normalized/logo-2.png' },
  { name: 'Agen CFO', src: '/assets/logos/normalized/logo-3.png' },
  { name: 'Derila', src: '/assets/logos/normalized/logo-4.png' },
  { name: 'Client logo 6', src: '/assets/logos/normalized/logo-5.png' },
  { name: 'Matsato', src: '/assets/logos/normalized/logo-6.png' },
  { name: 'Paid House', src: '/assets/logos/normalized/logo-7.png' },
  { name: 'Client logo 9', src: '/assets/logos/normalized/logo-8.png' },
  { name: 'Client logo 10', src: '/assets/logos/normalized/logo-9.png' },
]

export const heroVideoUrl = 'https://play.gumlet.io/embed/6a8b5a10ab2c54150e940012'
export const heroThumbnail = 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=1200&q=80'
