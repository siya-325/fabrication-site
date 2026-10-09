export const siteConfig = {
  name: 'RF',
  legalName: 'RF Fabrication',
  tagline: 'Material intelligence. Built to last.',
  description: 'A fabrication studio making architectural metalwork, bespoke interiors, and things built for a lifetime.',
  email: 'hello@forge17.co',
  phone: '+1 312 555 0170',
  address: '4101 West Fulton Street\nChicago, IL 60624',
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
  ],
}

export const services = [
  { number: '01', title: 'Architectural metalwork', description: 'Staircases, screens, railings, and structural details that give a building its character.' },
  { number: '02', title: 'Custom fabrication', description: 'From a single sculptural piece to a production run, we turn drawings into exacting objects.' },
  { number: '03', title: 'Installation & finish', description: 'A considered final mile: site coordination, precise installation, and finishes that age well.' },
]

export const projects = [
  { number: '01', title: 'House No. 14', category: 'Residential / Brass & steel', image: '/images/hero/fabrication-hero.png' },
  { number: '02', title: 'The Assembly', category: 'Hospitality / Blackened steel', image: '/images/hero/fabrication-hero.png' },
  { number: '03', title: 'Northline', category: 'Commercial / Aluminum', image: '/images/hero/fabrication-hero.png' },
]

export const navigation = siteConfig.nav

export const testimonials = []
export const faqs = []
export const constants = { siteUrl: 'https://forge17.co' }

export type Service = (typeof services)[number]
export type Project = (typeof projects)[number]
export type NavigationItem = (typeof navigation)[number]
