export interface Project {
  id: string
  category: 'ads' | 'vsls'
  title: string
  thumbnail: string
  videoUrl: string
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

export const projects: Project[] = [
  {
    id: '1',
    category: 'ads',
    title: 'Product Launch Ad',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: '2',
    category: 'vsls',
    title: 'Sales Video Letter',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: '3',
    category: 'ads',
    title: 'Brand Awareness Campaign',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
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
    title: 'Buyer psychology',
    description:
      'Every frame is crafted to trigger emotion and drive action. I dont just edit — I convert viewers into customers.',
  },
  {
    number: '02',
    title: 'Express delivery',
    description:
      'Fast turnaround without sacrificing quality. Your campaign launches on time, every time.',
  },
  {
    number: '03',
    title: 'Tailored strategy',
    description:
      'No cookie-cutter templates. Each video is built around your product, audience, and business goals.',
  },
]

export const faqItems: FaqItem[] = [
  {
    number: '01',
    question: "What's the cost?",
    answer:
      'Pricing varies based on project scope, length, and complexity. I offer custom packages tailored to your needs. Reach out for a free quote.',
  },
  {
    number: '02',
    question: "What's the delivery time?",
    answer:
      'Standard delivery is 5–7 business days. Rush turnaround available for urgent campaigns at an additional fee.',
  },
  {
    number: '03',
    question: 'Can you handle big files and high resolutions?',
    answer:
      'Absolutely. I work with 4K+ footage, large file sizes, and all major formats. Your quality stays intact end-to-end.',
  },
  {
    number: '04',
    question: "What if the video isn't up to my standards?",
    answer:
      'I offer unlimited revisions until youre 100% satisfied. Your satisfaction is my priority — I dont rest until its right.',
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

export const heroVideoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
export const heroThumbnail = 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=1200&q=80'
