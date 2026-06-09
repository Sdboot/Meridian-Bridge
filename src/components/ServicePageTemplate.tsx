'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface ServicePageProps {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  courses: {
    title: string;
    description: string;
    price: number;
    originalPrice: number;
    duration: string;
    rating: number;
  }[];
}

export default function ServicePageTemplate({
  title,
  description,
  benefits,
  features,
  courses,
}: ServicePageProps) {
  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-500 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-ivory"
          >
            <h1 className="text-6xl font-display font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-6">What&apos;s Included</h2>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-gold-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="section-padding bg-navy-50">
        <div className="container-max">
          <SectionTitle
            title="Recommended Courses"
            subtitle="Enhance Your Knowledge"
            description="Take the next step with our expert-led courses"
            centered={true}
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-gold-600 transition-all hover:shadow-lg"
              >
                <div className="bg-gradient-to-r from-navy-600 to-teal-600 p-6 text-ivory">
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-200 text-sm">{course.description}</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-semibold">Duration</p>
                      <p className="text-charcoal font-semibold">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-semibold">Rating</p>
                      <p className="text-charcoal font-semibold">{course.rating}/5 ★</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-semibold">Price</p>
                      <p className="text-charcoal font-semibold">₦{course.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-navy-600">₦{course.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 line-through">₦{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-green-600 font-semibold">
                      Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                    </p>
                  </div>

                  <a
                    href="https://selar.com/4b2dl75u41?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASLmBZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafLb7bSA4-2rhqfCHGaENkSPPmd49KSwqTKRCAY5rfB3DeB8HnwKzkE0pIt-w_aem_E3o_VAGINcElKti1WEZk2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-gold-600 to-goldBronze-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all text-center"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts to discuss your unique needs.
            </p>
            <Button href="/contact" variant="gold" size="lg">
              Book Your Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
