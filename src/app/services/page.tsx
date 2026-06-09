'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ScholarshipConsultation from '@/components/sections/ScholarshipConsultation';
import { SERVICES } from '@/constants';
import * as Icons from 'lucide-react';

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      BookOpen: <Icons.BookOpen size={40} />,
      FileCheck: <Icons.FileCheck size={40} />,
      Briefcase: <Icons.Briefcase size={40} />,
      Home: <Icons.Home size={40} />,
      Users: <Icons.Users size={40} />,
      Globe: <Icons.Globe size={40} />,
      Target: <Icons.Target size={40} />,
      Plane: <Icons.Plane size={40} />,
      MapPin: <Icons.MapPin size={40} />,
    };
    return icons[iconName] || <Icons.Globe size={40} />;
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-gold-600 font-semibold uppercase tracking-widest mb-3">
              Our Expertise
            </p>
            <h1 className="text-6xl font-display font-bold mb-6">
              Immigration Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive solutions tailored to your unique immigration needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover border className="p-8 h-full flex flex-col">
                  <div className="text-teal-600 mb-4">{getIcon(service.icon)}</div>
                  <h3 className="text-2xl font-semibold font-display mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                      Our comprehensive approach includes:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <Icons.Check size={16} className="text-teal-600 flex-shrink-0 mt-1" />
                        <span>Initial assessment & consultation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icons.Check size={16} className="text-teal-600 flex-shrink-0 mt-1" />
                        <span>Documentation preparation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icons.Check size={16} className="text-teal-600 flex-shrink-0 mt-1" />
                        <span>Application submission</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icons.Check size={16} className="text-teal-600 flex-shrink-0 mt-1" />
                        <span>Follow-up & support</span>
                      </li>
                    </ul>
                  </div>

                  <Button
                    href={`/services/${service.id}`}
                    variant="outline"
                    size="md"
                    className="w-full mt-6"
                  >
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-navy-700">
        <div className="container-max">
          <SectionTitle
            subtitle="How We Work"
            title="Our Process"
            description="Streamlined steps from consultation to success"
            centered={true}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { step: '01', title: 'Consultation', desc: 'Assess your needs and goals' },
              { step: '02', title: 'Planning', desc: 'Create tailored strategy' },
              { step: '03', title: 'Execution', desc: 'Prepare and submit application' },
              { step: '04', title: 'Success', desc: 'Achieve your goals & settle' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-ivory"
              >
                <div className="text-5xl font-bold text-gold-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scholarship Consultation Section */}
      <ScholarshipConsultation />

      {/* CTA */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our immigration experts today.
            </p>
            <Button href="/contact" variant="gold" size="lg">
              Book Your Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
