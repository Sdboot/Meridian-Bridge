// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string;
  benefits?: string[];
  process?: ProcessStep[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

// Destination Types
export interface Destination {
  id: string;
  name: string;
  flag: string;
  description: string;
  opportunities: string[];
  visaPathways?: VisaPathway[];
  requirements?: Requirement[];
  benefits?: string[];
}

export interface VisaPathway {
  type: string;
  duration: string;
  eligibility: string;
}

export interface Requirement {
  title: string;
  items: string[];
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  country: string;
  title: string;
  image?: string;
  content: string;
  rating: number;
  destination: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  readTime: number;
  tags: string[];
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  countryOfInterest: string;
  serviceNeeded: string;
  message: string;
}

// Statistics Types
export interface Statistic {
  number: string;
  label: string;
  suffix: string;
}

// Resource Types
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'checklist' | 'template';
  country?: string;
  downloadUrl?: string;
  releaseDate: string;
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  specialization: string;
  bio: string;
  image?: string;
  email?: string;
  phone?: string;
}

// Generic Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination Types
export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  filter?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}
