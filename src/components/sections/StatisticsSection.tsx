'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import { STATISTICS } from '@/constants';

const StatisticsSection = () => {
  return (
    <section className="section-padding bg-gradient-luxury">
      <div className="container-max">
        <SectionTitle
          subtitle="Our Impact"
          title="Transforming Lives Globally"
          description="Proven track record of success"
          centered={true}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {STATISTICS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-ivory"
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold font-display text-gold-600 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-xl text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
