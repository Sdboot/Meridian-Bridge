'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import { Search, BookOpen, Award, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface Resource {
  id: string;
  title: string;
  description: string;
  rating: number;
  students: number;
  modules: string[];
  icon: React.ReactNode;
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const resources: Resource[] = [
    {
      id: 'resource-1',
      title: 'Master\'s Program Mastery',
      description: 'Complete guide to securing admission to top-tier Master\'s programs globally',
      rating: 4.9,
      students: 2340,
      icon: <BookOpen className="w-6 h-6" />,
      modules: [
        'University selection strategy',
        'Personal statement crafting',
        'Application timeline planning',
        'Interview preparation',
        'Financial planning & budgeting',
        'Post-admission steps',
      ],
    },
    {
      id: 'resource-2',
      title: 'PhD Journey Blueprint',
      description: 'Expert strategies for PhD program admission and scholarship funding',
      rating: 4.95,
      students: 1890,
      icon: <Award className="w-6 h-6" />,
      modules: [
        'Research proposal development',
        'PhD program evaluation',
        'Advisor-student relationship',
        'Funding sources & grant writing',
        'Visa & immigration for PhD',
        'Career planning post-PhD',
      ],
    },
    {
      id: 'resource-3',
      title: 'Scholarship Secrets Unveiled',
      description: 'Find and secure scholarships worth $10,000+ for your studies abroad',
      rating: 4.85,
      students: 3450,
      icon: <Award className="w-6 h-6" />,
      modules: [
        'Scholarship database navigation',
        'Eligibility assessment',
        'Application optimization',
        'Essay writing for scholarships',
        'Interview techniques',
        'Negotiation strategies',
      ],
    },
    {
      id: 'resource-4',
      title: 'IELTS/TOEFL Mastery',
      description: 'Comprehensive test preparation for international university admissions',
      rating: 4.8,
      students: 5620,
      icon: <BookOpen className="w-6 h-6" />,
      modules: [
        'Test structure & scoring',
        'Reading strategies',
        'Writing excellence',
        'Speaking confidence',
        'Listening mastery',
        'Full practice exams',
      ],
    },
    {
      id: 'resource-5',
      title: 'Scholarships | Funding Blueprint Session',
      description: 'Comprehensive session on securing fully or partially funded Master\'s and PhD programs',
      rating: 4.9,
      students: 1240,
      icon: <Award className="w-6 h-6" />,
      modules: [
        'Scholarship identification strategies',
        'Profile competitiveness assessment',
        'Funding source exploration',
        'Application optimization',
        'Interview preparation for scholarships',
        'Financial planning for studies',
      ],
    },
    {
      id: 'resource-6',
      title: 'Study Abroad Comprehensive Preparation',
      description: 'Complete preparation guide for students planning to study abroad',
      rating: 4.88,
      students: 2950,
      icon: <BookOpen className="w-6 h-6" />,
      modules: [
        'Country selection guide',
        'University comparison tools',
        'Visa requirements overview',
        'Financial planning',
        'Preparation timeline',
        'Success tips from alumni',
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-gold-600 font-semibold uppercase tracking-widest mb-3">
              Knowledge Center
            </p>
            <h1 className="text-6xl font-display font-bold mb-6">
              Immigration Resources
            </h1>
            <p className="text-xl text-gray-200">
              Guides, templates, blogs, and expert insights to support your journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-ivory border-b border-gray-200">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-4 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg rounded-lg border-2 border-gray-300 focus:border-teal-600 focus:outline-none transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid - Course Style */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-gold-600 transition-all hover:shadow-xl group"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-navy-600 to-teal-600 p-6 text-ivory">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-gold-400">{resource.icon}</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-gold-400">★</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-200 text-sm">{resource.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-semibold">Students</p>
                      <p className="text-charcoal font-semibold">{resource.students.toLocaleString()}+</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-semibold">Rating</p>
                      <p className="text-charcoal font-semibold">{resource.rating}/5</p>
                    </div>
                  </div>

                  {/* Modules */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-charcoal mb-3">What You&apos;ll Learn:</p>
                    <ul className="space-y-2">
                      {resource.modules.slice(0, 3).map((module, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{module}</span>
                        </li>
                      ))}
                      {resource.modules.length > 3 && (
                        <li className="text-sm text-gray-500 font-semibold">+ {resource.modules.length - 3} more modules</li>
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://selar.com/4b2dl75u41?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASLmBZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA01NjcwNjczNDMzNTI0MjcAAafLb7bSA4-2rhqfCHGaENkSPPmd49KSwqTKRCAY5rfB3DeB8HnwKzkE0pIt-w_aem_E3o_VAGINcElKti1WEZk2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-gold-600 to-goldBronze-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all text-center group/btn"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-600 to-teal-600">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              Ready to <span className="text-gold-600">Transform Your Future?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who&apos;ve achieved their scholarship and admission goals with our expert-led resources.
            </p>
            <Button href="/contact" variant="gold" size="lg">
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
