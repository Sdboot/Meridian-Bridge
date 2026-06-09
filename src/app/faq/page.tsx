'use client';

import { motion } from 'framer-motion';
import FAQAccordion from '@/components/common/FAQAccordion';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { FAQ } from '@/types';

export default function FAQPage() {
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
    {
      id: '7',
      question: 'What are the financial requirements for permanent residency?',
      answer:
        'Financial requirements vary significantly by country and immigration program. Generally, you&apos;ll need to demonstrate sufficient funds for settlement and initial living expenses. We&apos;ll provide specific requirements based on your chosen destination and program.',
      category: 'PR',
    },
    {
      id: '8',
      question: 'Can I work while studying internationally?',
      answer:
        'Most countries allow international students to work part-time during studies and full-time during holidays. Work hours are typically limited to 20 hours per week during term time. We provide detailed guidelines specific to your destination country.',
      category: 'Study',
    },
    {
      id: '9',
      question: 'What is the cost of your consulting services?',
      answer:
        'Our service fees are transparent and vary based on the complexity of your case and the services required. We offer flexible payment plans and provide a detailed quote during your initial consultation. Book a free initial assessment to discuss pricing.',
      category: 'Services',
    },
    {
      id: '10',
      question: 'How do I schedule a consultation with your team?',
      answer:
        'You can book a consultation by visiting our contact page, filling out the form with your preferred date and time, and submitting it. Our team will confirm your session and connect with you at the scheduled time via email, phone, or video call.',
      category: 'Services',
    },
    {
      id: '11',
      question: 'What if my visa application is rejected?',
      answer:
        'If an application is rejected, we conduct a thorough analysis of the rejection reasons and develop a comprehensive strategy for reapplication. Many rejections can be successfully addressed with proper documentation and presentation. We support you through appeals or new applications.',
      category: 'Visas',
    },
    {
      id: '12',
      question: 'Do you offer services for all countries?',
      answer:
        'We specialize in major destination countries including Canada, UK, Australia, USA, Germany, Ireland, and New Zealand. We also have expertise with several other countries. Contact us to confirm if we serve your desired destination.',
      category: 'Services',
    },
  ];

  const categories = ['All', 'Visas', 'Study', 'Work', 'PR', 'Family', 'Business', 'Services', 'Timelines', 'Settlement'];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-600 font-semibold uppercase tracking-widest mb-3">
              Knowledge Hub
            </p>
            <h1 className="text-6xl font-display font-bold mb-6">
              Frequently Asked <span className="text-gold-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Find answers to common questions about immigration consulting, visa processes, and your journey abroad
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-navy-700">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-gold-600 font-semibold uppercase tracking-widest mb-3 text-center">
                Browse by Category
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-lg border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-navy-700 transition-all duration-300 font-semibold"
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <FAQAccordion faqs={faqs} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ivory">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">Didn&apos;t Find Your Answer?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of immigration experts is ready to help you with personalized guidance and support
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Book a Session
              </Button>
              <Button href="/resources" variant="outline" size="lg">
                Explore Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
