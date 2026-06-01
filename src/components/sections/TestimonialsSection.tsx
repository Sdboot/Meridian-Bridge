'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'India',
      destination: 'Canada',
      title: 'MBA Student',
      content:
        'Meridian Bridge made my study abroad journey seamless. From application to visa approval, their expertise and support were invaluable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      country: 'Egypt',
      destination: 'Australia',
      title: 'Software Engineer',
      content:
        'The skilled migration process seemed daunting, but their team guided me through every step. Now happily settled in Melbourne!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Maria Garcia',
      country: 'Brazil',
      destination: 'United Kingdom',
      title: 'Business Owner',
      content:
        'Exceptional service! They helped me navigate business immigration with professionalism and care. Highly recommended.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="section-padding bg-ivory">
      <div className="container-max">
        <SectionTitle
          subtitle="Success Stories"
          title="Client Testimonials"
          description="Hear from our satisfied clients across the globe"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card variant="light" className="p-8 h-full flex flex-col">
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold-600 text-gold-600" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.content}"</p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-teal-600">{testimonial.title}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.country} → {testimonial.destination}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
