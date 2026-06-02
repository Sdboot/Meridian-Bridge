'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-luxury flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="text-8xl font-bold text-gold-600 mb-2">404</div>
        </motion.div>

        <h1 className="text-4xl font-display font-bold text-ivory mb-4">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-200 mb-8">
          Sorry, we couldn't find the page you're looking for. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="gold" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
