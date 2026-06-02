'use client';

import { motion } from 'framer-motion';
import FAQAccordion from '@/components/common/FAQAccordion';
import { FAQ } from '@/types';

const FAQSection = () => {
  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'What documents do I need for a student visa application?',
      answer:
        'The required documents vary by destination, but typically include: passport, academic transcripts, proof of financial support, IELTS/TOEFL scores, acceptance letter from institution, and completed application forms. Our consultants will provide a detailed checklist specific to your chosen country.',
      category: 'Visas',
    },
    {
      id: '2',
      question: 'How long does the visa application process take?',
      answer:
        'Processing times vary by country and visa type. Generally, student visas take 4-8 weeks, work visas take 8-12 weeks, and permanent residency can take 6-18 months. We work to expedite your application and keep you updated throughout the process.',
      category: 'Timelines',
    },
    {
      id: '3',
      question: 'Can you help with family sponsorship?',
      answer:
        'Yes, family sponsorship is one of our core services. We guide families through the entire process, from eligibility assessment to final visa approval. Our team ensures all documentation is properly prepared and submitted.',
      category: 'Family',
    },
    {
      id: '4',
      question: 'What is the success rate for permanent residency applications?',
      answer:
        'We maintain a 95% success rate for permanent residency applications. Our thorough preparation and expert guidance significantly increase approval chances. Each case is carefully assessed and strategically prepared.',
      category: 'PR',
    },
    {
      id: '5',
      question: 'Do you offer post-arrival settlement support?',
      answer:
        'Yes! We provide comprehensive settlement support including orientation, housing assistance, job search guidance, and integration programs. Our commitment extends beyond visa approval to ensure your successful transition.',
      category: 'Settlement',
    },
    {
      id: '6',
      question: 'Can entrepreneurs apply for business immigration?',
      answer:
        'Absolutely. We specialize in business immigration for entrepreneurs looking to establish operations abroad. We guide you through startup visa programs, business investment visas, and self-employment routes.',
      category: 'Business',
    },
  ];

  return (
    <section className="section-padding bg-navy-700">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 font-semibold uppercase tracking-widest mb-3">
            Common Questions
          </p>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-ivory mb-6">
            Frequently Asked <span className="text-gold-600">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
