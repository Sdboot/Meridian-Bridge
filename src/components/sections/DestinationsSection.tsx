'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { DESTINATIONS } from '@/constants';
import { ArrowRight } from 'lucide-react';

const DestinationsSection = () => {
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
          subtitle="Global Destinations"
          title="Explore Your Future Worldwide"
          description="Access premium opportunities across continents"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {DESTINATIONS.map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-luxury rounded-xl overflow-hidden h-full flex flex-col justify-between p-8 text-ivory hover:shadow-xl-luxury transition-all duration-300 cursor-pointer">
                <div>
                  <div className="text-5xl mb-4">{destination.flag}</div>
                  <h3 className="text-2xl font-semibold font-display mb-2">{destination.name}</h3>
                  <p className="text-gray-200 text-sm mb-4">{destination.description}</p>
                </div>

                <div>
                  <div className="space-y-2 mb-6">
                    {destination.opportunities.slice(0, 3).map((opp, idx) => (
                      <p key={idx} className="text-sm text-gold-600 flex items-center space-x-2">
                        <span>•</span>
                        <span>{opp}</span>
                      </p>
                    ))}
                  </div>
                  <a
                    href={`/destinations/${destination.id}`}
                    className="text-gold-600 font-semibold hover:text-gold-400 flex items-center space-x-2 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button href="/destinations" variant="secondary" size="lg">
            View All Destinations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
