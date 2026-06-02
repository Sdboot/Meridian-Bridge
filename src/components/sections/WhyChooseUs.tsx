'use client';

import { motion } from 'framer-motion';
import Card from '@/components/common/Card';
import { CheckCircle, Globe, Zap, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Expert Guidance',
      description: 'Over 20 years of experience in immigration consulting with proven success',
      icon: Award,
    },
    {
      title: 'Global Network',
      description: 'Partnerships with premier institutions across 15+ countries worldwide',
      icon: Globe,
    },
    {
      title: 'Fast Processing',
      description: 'Efficient handling of applications with high approval rates',
      icon: Zap,
    },
    {
      title: 'Personalized Support',
      description: 'Customized solutions tailored to your unique immigration goals',
      icon: CheckCircle,
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

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
            Why Meridian Bridge
          </p>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-ivory mb-6">
            Trusted by <span className="text-gold-600">Thousands</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="dark" className="p-8 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-600">
                        <IconComponent size={24} className="text-navy-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-ivory mb-2">{reason.title}</h3>
                      <p className="text-gray-300">{reason.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
