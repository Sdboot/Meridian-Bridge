'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import { ArrowRight } from 'lucide-react';

const ConsultationCTA = () => {
  return (
    <section className="section-padding bg-gradient-luxury relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 -right-20 w-40 h-40 bg-gold-600 rounded-full opacity-10"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-ivory mb-6">
            Ready to Start Your <span className="text-gold-600">Journey?</span>
          </h2>

          <p className="text-xl text-gray-200 mb-8">
            Book a consultation with our experts today. We'll assess your goals and create a customized immigration plan tailored to your needs.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button href="/contact" variant="gold" size="lg" className="inline-flex items-center space-x-2">
              <span>Book Now</span>
              <ArrowRight size={20} />
            </Button>
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="text-ivory hover:text-gold-600 font-semibold flex items-center space-x-2 transition-colors">
              <span>Chat on WhatsApp</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
