'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function BusinessImmigrationPage() {
  const pageData = {
    title: 'Business Immigration',
    description:
      'Expand your business globally and establish operations in new markets. We provide comprehensive guidance on investor visas, entrepreneur programs, and business immigration pathways tailored to your venture.',
    benefits: [
      'Business visa and investor programs expertise',
      'Global market expansion guidance',
      'Investment requirement consultation',
      'Business plan development support',
      'Corporate structure optimization',
      'Post-establishment business support',
    ],
    features: [
      'Business immigration pathway analysis',
      'Investment amount and requirement assessment',
      'Business plan development and documentation',
      'Financial documentation preparation',
      'Corporate structure and compliance guidance',
      'Application submission and monitoring',
      'Business establishment and operational support',
    ],
    courses: [
      {
        title: 'Master\u0027s Program Mastery',
        description: 'Advanced business knowledge for international ventures',
        price: 4999,
        originalPrice: 7999,
        duration: '12 weeks',
        rating: 4.9,
      },
      {
        title: 'IELTS/TOEFL Mastery',
        description: 'Business communication in English for global operations',
        price: 1999,
        originalPrice: 3499,
        duration: '10 weeks',
        rating: 4.8,
      },
    ],
  };

  return <ServicePageTemplate {...pageData} />;
}
