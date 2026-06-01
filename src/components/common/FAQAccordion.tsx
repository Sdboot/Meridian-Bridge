'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FAQ } from '@/types';

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-ivory transition-colors"
            aria-expanded={activeId === faq.id}
          >
            <span className="text-lg font-semibold text-charcoal text-left">{faq.question}</span>
            <ChevronDown
              size={24}
              className={`flex-shrink-0 text-gold-600 transition-transform ${
                activeId === faq.id ? 'rotate-180' : ''
              }`}
            />
          </button>

          {activeId === faq.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-6 py-4 bg-cream border-t border-gray-200"
            >
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;
