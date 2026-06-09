'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function PermanentResidencyPage() {
  const pageData = {
    title: 'Permanent Residency',
    description:
      'Build your new life abroad with permanent residency. We guide you through pathways like skilled immigration, family sponsorship alternatives, and residency programs to establish long-term stability in your chosen country.',
    benefits: [
      'Multiple permanent residency pathways explored',
      'Points assessment and qualification verification',
      'Long-term residency planning and strategy',
      'Document compilation and application management',
      'Government liaison and communication',
      'Comprehensive settlement planning',
    ],
    features: [
      'Initial qualification and eligibility assessment',
      'Residency pathway selection based on your profile',
      'Skills assessment and credential recognition support',
      'Documentation preparation and verification',
      'Online application management and tracking',
      'Medical and security screening guidance',
      'Post-approval settlement and orientation support',
    ],
    courses: [
      {
        title: 'Master\u0027s Program Mastery',
        description: 'Strengthen your qualifications for permanent residency programs',
        price: 4999,
        originalPrice: 7999,
        duration: '12 weeks',
        rating: 4.9,
      },
      {
        title: 'IELTS/TOEFL Mastery',
        description: 'Language proficiency for permanent residency applications',
        price: 1999,
        originalPrice: 3499,
        duration: '10 weeks',
        rating: 4.8,
      },
    ],
  };

  return <ServicePageTemplate {...pageData} />;
}
