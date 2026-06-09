'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Clock, CheckCircle } from 'lucide-react';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  duration: string;
  students: number;
  rating: number;
  modules: string[];
  icon: React.ReactNode;
}

export default function ScholarshipCourses() {
  const courses: Course[] = [
    {
      id: 'course-1',
      title: 'Master\'s Program Mastery',
      description: 'Complete guide to securing admission to top-tier Master\'s programs globally',
      price: 4999,
      originalPrice: 7999,
      duration: '12 weeks',
      students: 2340,
      rating: 4.9,
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
      id: 'course-2',
      title: 'PhD Journey Blueprint',
      description: 'Expert strategies for PhD program admission and scholarship funding',
      price: 5999,
      originalPrice: 8999,
      duration: '14 weeks',
      students: 1890,
      rating: 4.95,
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
      id: 'course-3',
      title: 'Scholarship Secrets Unveiled',
      description: 'Find and secure scholarships worth $10,000+ for your studies abroad',
      price: 2999,
      originalPrice: 4999,
      duration: '8 weeks',
      students: 3450,
      rating: 4.85,
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
      id: 'course-4',
      title: 'IELTS/TOEFL Mastery',
      description: 'Comprehensive test preparation for international university admissions',
      price: 1999,
      originalPrice: 3499,
      duration: '10 weeks',
      students: 5620,
      rating: 4.8,
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
      id: 'course-5',
      title: 'Scholarships | Funding Blueprint Session',
      description: 'Comprehensive session on securing fully or partially funded Master\'s and PhD programs',
      price: 50000,
      originalPrice: 80000,
      duration: '1 session',
      students: 1240,
      rating: 4.9,
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
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-max">
        <SectionTitle
          title="Scholarship & Master's/PhD Courses"
          subtitle="Expert-Led Online Learning"
          description="Learn from professionals who've helped 5000+ students succeed in scholarships and admissions"
          centered={true}
        />

        {/* Why Choose Our Courses */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Award className="w-8 h-8 text-gold-600" />,
              title: 'Industry Experts',
              desc: 'Learn from immigration & education specialists',
            },
            {
              icon: <Users className="w-8 h-8 text-gold-600" />,
              title: '5000+ Students',
              desc: 'Trusted by students worldwide',
            },
            {
              icon: <Clock className="w-8 h-8 text-gold-600" />,
              title: 'Self-Paced',
              desc: 'Study at your own speed, lifetime access',
            },
            {
              icon: <CheckCircle className="w-8 h-8 text-gold-600" />,
              title: 'Certificate',
              desc: 'Completion certificate for applications',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-block mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-charcoal mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-gold-600 transition-all hover:shadow-xl group"
            >
              {/* Course Header */}
              <div className="bg-gradient-to-r from-navy-600 to-teal-600 p-6 text-ivory">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-gold-400">{course.icon}</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold-400">★</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-200 text-sm">{course.description}</p>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold">Duration</p>
                    <p className="text-charcoal font-semibold">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold">Students</p>
                    <p className="text-charcoal font-semibold">{course.students.toLocaleString()}+</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold">Rating</p>
                    <p className="text-charcoal font-semibold">{course.rating}/5</p>
                  </div>
                </div>

                {/* Modules */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-charcoal mb-3">What You&apos;ll Learn:</p>
                  <ul className="space-y-2">
                    {course.modules.slice(0, 3).map((module, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{module}</span>
                      </li>
                    ))}
                    {course.modules.length > 3 && (
                      <li className="text-sm text-gray-500 font-semibold">+ {course.modules.length - 3} more modules</li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-navy-600">₦{course.price.toLocaleString()}</span>
                    <span className="text-lg text-gray-400 line-through">₦{course.originalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-green-600 font-semibold">
                    Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://selar.com/4b2dl75u41?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASLmBZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafLb7bSA4-2rhqfCHGaENkSPPmd49KSwqTKRCAY5rfB3DeB8HnwKzkE0pIt-w_aem_E3o_VAGINcElKti1WEZk2A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-gold-600 to-goldBronze-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all text-center group/btn"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-navy-50 border-2 border-navy-200 rounded-lg p-8 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-gold-600 mb-2">5000+</p>
              <p className="text-charcoal font-semibold">Students Graduated</p>
              <p className="text-sm text-gray-600">From our comprehensive programs</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gold-600 mb-2">₦500M+</p>
              <p className="text-charcoal font-semibold">Scholarships Awarded</p>
              <p className="text-sm text-gray-600">To our course graduates</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gold-600 mb-2">95%</p>
              <p className="text-charcoal font-semibold">Success Rate</p>
              <p className="text-sm text-gray-600">Admission to dream programs</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-navy-600 to-teal-600 rounded-lg p-12 text-center text-ivory"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Future?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who&apos;ve achieved their scholarship and admission goals with our expert-led courses.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gold-600 text-navy-900 font-bold px-8 py-3 rounded-lg hover:bg-gold-500 transition-all">
              Browse All Courses
            </button>
            <Button href="/contact" variant="outline" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
