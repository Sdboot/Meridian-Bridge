// Brand Colors
export const BRAND_COLORS = {
  navy: '#0F2B4F',
  teal: '#1B7E8C',
  gold: '#D4AF37',
  goldBronze: '#B8860B',
  ivory: '#F8F7F2',
  cream: '#FAF8F3',
  charcoal: '#2a2a2a',
} as const;

// Navigation
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { label: 'Study Abroad', href: '/services/study-abroad' },
      { label: 'Student Visas', href: '/services/student-visas' },
      { label: 'Work Visa Processing', href: '/services/work-visa' },
      { label: 'Permanent Residency', href: '/services/permanent-residency' },
      { label: 'Family Sponsorship', href: '/services/family-sponsorship' },
      { label: 'Business Immigration', href: '/services/business-immigration' },
      { label: 'Skilled Migration', href: '/services/skilled-migration' },
    ],
  },
  {
    label: 'Destinations',
    href: '/destinations',
    submenu: [
      { label: 'Canada', href: '/destinations/canada' },
      { label: 'United Kingdom', href: '/destinations/uk' },
      { label: 'Australia', href: '/destinations/australia' },
      { label: 'United States', href: '/destinations/usa' },
      { label: 'Germany', href: '/destinations/germany' },
      { label: 'Ireland', href: '/destinations/ireland' },
      { label: 'New Zealand', href: '/destinations/nz' },
    ],
  },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
] as const;

// Services
export const SERVICES = [
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    description: 'Access premier educational institutions worldwide',
    icon: 'BookOpen',
  },
  {
    id: 'student-visas',
    title: 'Student Visa Assistance',
    description: 'Expert guidance through visa applications',
    icon: 'FileCheck',
  },
  {
    id: 'work-visa',
    title: 'Work Visa Processing',
    description: 'Navigate professional migration seamlessly',
    icon: 'Briefcase',
  },
  {
    id: 'permanent-residency',
    title: 'Permanent Residency',
    description: 'Build your new home internationally',
    icon: 'Home',
  },
  {
    id: 'family-sponsorship',
    title: 'Family Sponsorship',
    description: 'Reunite with loved ones abroad',
    icon: 'Users',
  },
  {
    id: 'business-immigration',
    title: 'Business Immigration',
    description: 'Expand your business globally',
    icon: 'Globe',
  },
  {
    id: 'skilled-migration',
    title: 'Skilled Migration',
    description: 'Leverage your expertise internationally',
    icon: 'Target',
  },
  {
    id: 'travel-advisory',
    title: 'Travel Advisory',
    description: 'Comprehensive travel planning support',
    icon: 'Plane',
  },
  {
    id: 'settlement-support',
    title: 'Settlement Support',
    description: 'Seamless integration in new countries',
    icon: 'MapPin',
  },
] as const;

// Destinations
export const DESTINATIONS = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    description: 'Premium education and career opportunities',
    opportunities: ['Study', 'Work', 'Permanent Residency', 'Business'],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'World-renowned institutions and culture',
    opportunities: ['Higher Education', 'Work Experience', 'Graduate Routes'],
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    description: 'Thriving lifestyle and economic growth',
    opportunities: ['Study', 'Skilled Migration', 'Permanent Residency'],
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    description: 'Innovation hub and career advancement',
    opportunities: ['F-1 Visas', 'H-1B Work Visas', 'Permanent Residency'],
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'Quality education and strong economy',
    opportunities: ['Tuition-free Education', 'Work Visa', 'EU Residency'],
  },
  {
    id: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    description: 'Tech hub with excellent quality of life',
    opportunities: ['Study', 'Critical Skills Employment', 'Residency'],
  },
  {
    id: 'nz',
    name: 'New Zealand',
    flag: '🇳🇿',
    description: 'Natural beauty and strong employment market',
    opportunities: ['Study', 'Skilled Migration', 'Permanent Residency'],
  },
] as const;

// Statistics
export const STATISTICS = [
  { number: '50K+', label: 'Clients Served', suffix: '' },
  { number: '15+', label: 'Countries', suffix: '' },
  { number: '95%', label: 'Success Rate', suffix: '' },
  { number: '20+', label: 'Years Experience', suffix: '' },
] as const;

// Contact Info
export const CONTACT_INFO = {
  email: 'bridgemeridiangaps@gmail.com',
  phone: '+1 (555) 123-4567',
  address: '123 Global Avenue, International District, NY 10001',
  whatsapp: '+1-555-123-4567',
} as const;

// Social Media
export const SOCIAL_MEDIA = [
  { name: 'Instagram', url: 'https://www.instagram.com/meridianbridge_?igsh=aDB4Y2ZjNjR5aXVw' },
  { name: 'X', url: 'https://x.com/MeridianBridge' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@meridianbridge_?_r=1&_t=ZN-96VyNfmEqbW' },
] as const;

// SEO
export const SEO = {
  title: 'MERIDIAN BRIDGE | Premium Immigration Consulting',
  description:
    'Connect with world-class immigration consultants. Access global opportunities for study, work, and residency. Expert guidance, proven success.',
  keywords: [
    'immigration consultant',
    'study abroad',
    'visa processing',
    'permanent residency',
    'immigration services',
    'global opportunities',
  ],
} as const;
