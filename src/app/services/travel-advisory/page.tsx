'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function TravelAdvisoryPage() {
  const pageData = {
    title: 'Travel Advisory',
    description:
      'Plan your international travel with confidence. From visa requirements to travel logistics, we provide comprehensive support for seamless global mobility and exploration.',
    benefits: [
      'Visa requirement analysis for your destination',
      'Travel planning and itinerary support',
      'Documentation and permit guidance',
      'Travel insurance and health requirement information',
      'Currency and financial planning advice',
      'Real-time travel updates and support',
    ],
    features: [
      'Destination-specific visa requirement assessment',
      'Travel documentation checklist preparation',
      'Travel insurance recommendations',
      'Health and vaccination requirement guidance',
      'Currency exchange and financial planning support',
      'Accommodation and logistics recommendations',
      'Emergency support and travel assistance network',
    ],
    courses: [
      {
        title: 'IELTS/TOEFL Mastery',
        description: 'Communication skills for international travel',
        price: 1999,
        originalPrice: 3499,
        duration: '10 weeks',
        rating: 4.8,
      },
      {
        title: 'Scholarship Secrets Unveiled',
        description: 'Discover travel opportunities and educational programs worldwide',
        price: 2999,
        originalPrice: 4999,
        duration: '8 weeks',
        rating: 4.85,
      },
    ],
  };

  return <ServicePageTemplate {...pageData} />;
}
