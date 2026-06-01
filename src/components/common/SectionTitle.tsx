'use client';

import { motion } from 'framer-motion';
import { useAnimation } from '@/hooks/useAnimation';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  highlight?: string;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  centered = true,
  highlight,
}: SectionTitleProps) => {
  const { containerVariants, itemVariants } = useAnimation();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`${centered ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-gold-600 font-semibold uppercase tracking-widest mb-3"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-display font-bold mb-6">
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <span className="text-gradient">{highlight}</span>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {description && (
        <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
