import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServiceOverview from '@/components/sections/ServiceOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import DestinationsSection from '@/components/sections/DestinationsSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ConsultationCTA from '@/components/sections/ConsultationCTA';

export const metadata: Metadata = {
  title: 'MERIDIAN BRIDGE | Premium Immigration Consulting',
  description:
    'Connect with world-class immigration consultants. Access global opportunities for study, work, and residency. Expert guidance, proven success.',
  openGraph: {
    title: 'MERIDIAN BRIDGE | Premium Immigration Consulting',
    description: 'Connect with world-class immigration consultants for global opportunities',
    url: 'https://meridianbridge.com',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceOverview />
      <WhyChooseUs />
      <DestinationsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <FAQSection />
      <ConsultationCTA />
    </>
  );
}
