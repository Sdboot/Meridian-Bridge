'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function SkilledMigrationPage() {
  const pageData = {
    title: 'Skilled Migration',
    description:
      'Leverage your expertise and qualifications to pursue career opportunities abroad. We help skilled professionals navigate migration programs and secure pathways to international employment and residency.',
    benefits: [
      'Comprehensive skills assessment and verification',
      'Occupation matching with global demand',
      'Points system optimization for skilled visas',
      'Professional credential recognition guidance',
      'Career advancement opportunity identification',
      'Long-term migration pathway planning',
    ],
    features: [
      'Skills assessment and career analysis',
      'Occupation and industry demand research',
      'Credential recognition and equivalency guidance',
      'Application priority determination',
      'Documentation preparation and submission',
      'Interview and assessment preparation',
      'Job matching and employer connection support',
    ],
    courses: [
      {
        title: 'Master\u0027s Program Mastery',
        description: 'Professional development for global career advancement',
        price: 4999,
        originalPrice: 7999,
        duration: '12 weeks',
        rating: 4.9,
      },
      {
        title: 'IELTS/TOEFL Mastery',
        description: 'Professional language proficiency for international roles',
        price: 1999,
        originalPrice: 3499,
        duration: '10 weeks',
        rating: 4.8,
      },
    ],
  };

  return <ServicePageTemplate {...pageData} />;
}
