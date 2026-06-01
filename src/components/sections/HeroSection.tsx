'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import { Globe, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Professional Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-navy-700/70" />
      
      {/* Subtle Accent Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left accent */}
        <div className="absolute -left-40 top-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
        {/* Right accent */}
        <div className="absolute -right-40 bottom-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-center md:text-left"
        >
          {/* Subheading */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start space-x-2 mb-6">
            <Globe size={20} className="text-gold-600" />
            <span className="text-gold-600 font-semibold uppercase tracking-widest">
              Global Opportunities
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold text-ivory mb-6 leading-tight"
          >
            Connecting Potential. <br />
            <span className="text-gold-600">Building Futures.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8"
          >
            Helping students, professionals, entrepreneurs and families access global opportunities without boundaries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <Button href="/contact" variant="gold" size="lg" className="inline-flex items-center space-x-2">
              <span>Book Consultation</span>
              <ArrowRight size={20} />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-gold-600 mb-2">50K+</p>
              <p className="text-gray-300">Clients Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gold-600 mb-2">95%</p>
              <p className="text-gray-300">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gold-600 mb-2">20+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gold-600 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-gold-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
