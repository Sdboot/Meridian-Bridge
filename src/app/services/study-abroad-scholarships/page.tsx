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
        title: 'Scholarships | Funding Blueprint Session',
        description: 'This session is designed for students seeking fully or partially funded Master\'s or PhD programs, applicants struggling to identify relevant scholarships, candidates unsure how competitive their profile is for funding, individuals planning to study abroad but constrained by finances, researchers exploring grants and assistantships, and professionals considering funded academic programs.',
        price: 50000,
        originalPrice: 80000,
        duration: '1 session',
        rating: 4.9,
      },
    ],
  };

  return <ServicePageTemplate {...pageData} />;
}
