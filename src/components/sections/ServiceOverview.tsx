'use client';

import { motion } from 'framer-motion';
import Card from '@/components/common/Card';
import SectionTitle from '@/components/common/SectionTitle';
import { SERVICES } from '@/constants';
import * as Icons from 'lucide-react';

const ServiceOverview = () => {
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

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      BookOpen: <Icons.BookOpen size={32} />,
      FileCheck: <Icons.FileCheck size={32} />,
      Briefcase: <Icons.Briefcase size={32} />,
      Home: <Icons.Home size={32} />,
      Users: <Icons.Users size={32} />,
      Globe: <Icons.Globe size={32} />,
      Target: <Icons.Target size={32} />,
      Plane: <Icons.Plane size={32} />,
      MapPin: <Icons.MapPin size={32} />,
    };
    return icons[iconName] || <Icons.Globe size={32} />;
  };

  return (
    <section className="section-padding bg-ivory">
      <div className="container-max">
        <SectionTitle
          subtitle="What We Offer"
          title="Comprehensive Immigration Solutions"
          description="Expert guidance across all aspects of international mobility"
          highlight="Immigration Solutions"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card hover border className="p-8 h-full flex flex-col">
                <div className="text-teal-600 mb-4">{getIcon(service.icon)}</div>
                <h3 className="text-2xl font-semibold font-display mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <a href={`/services/${service.id}`} className="text-teal-600 font-semibold hover:text-teal-700 flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview;
