'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function StudyAbroadScholarshipsPage() {
  const pageData = {
    title: 'Study Abroad & Scholarships',
    description:
      'Access premier educational institutions worldwide and secure scholarships to fund your dreams. We guide you through university selection, application processes, and scholarship opportunities to make your international education affordable and achievable.',
    benefits: [
      'Access to 50+ partner universities globally',
      'Personalized university matching based on your profile',
      'Comprehensive scholarship identification and application support',
      'Visa application guidance for student visas',
      'Pre-departure orientation and settlement support',
      '95% scholarship success rate for qualified candidates',
    ],
    features: [
      'Initial educational assessment and career counseling',
      'University selection based on academic profile and preferences',
      'Application document preparation and review',
      'Scholarship database search and eligibility assessment',
      'Interview preparation for both universities and scholarship bodies',
      'Visa application and immigration support',
      'Post-admission support and settlement planning',
    ],
    courses: [
      {
        title: 'Master\'s Program Mastery',
        description: 'Complete guide to securing admission to top-tier Master\'s programs globally',
        price: 4999,
        originalPrice: 7999,
        duration: '12 weeks',
        rating: 4.9,
      },
      {
        title: 'Scholarship Secrets Unveiled',
        description: 'Find and secure scholarships worth $10,000+ for your studies abroad',
        price: 2999,
        originalPrice: 4999,
        duration: '8 weeks',
        rating: 4.85,
      },
    ],
  };

  return <ServicePageTemplate {...pageData} />;
}
