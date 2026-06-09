'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function WorkVisaPage() {
  const pageData = {
    title: 'Work Visa Processing',
    description:
      'Navigate the complexities of international work visas with expert guidance. From skilled worker visas to specialized employment programs, we help you secure work authorization and build your career abroad.',
    benefits: [
      'Expert guidance through complex visa requirements',
      'Access to 7+ destination countries with work opportunities',
      'Personalized visa strategy based on your qualifications',
      'Document preparation and application management',
      'Employer sponsorship facilitation where applicable',
      'Fast-track processing support',
    ],
    features: [
      'Comprehensive visa eligibility assessment',
      'Employment opportunity identification in target countries',
      'Required documentation preparation and compilation',
      'Online application submission and tracking',
      'Employer coordination and communication',
      'Interview preparation if required',
      'Post-approval support and settlement guidance',
    ],
    courses: [
      {
        title: 'IELTS/TOEFL Mastery',
        description: 'Comprehensive test preparation for international employment and studies',
        price: 1999,
        originalPrice: 3499,
        duration: '10 weeks',
        rating: 4.8,
      },
      {
        title: 'Master\u0027s Program Mastery',
        description: 'Professional development through advanced education abroad',
        price: 4999,
        originalPrice: 7999,
        duration: '12 weeks',
        rating: 4.9,
      },
    ],
  };

  return <ServicePageTemplate {...pageData} />;
}
