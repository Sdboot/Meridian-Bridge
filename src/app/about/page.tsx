'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Globe, Target, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting opportunity seekers with destinations worldwide',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering premium service at every touchpoint',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparent and ethical practices',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting each other on the journey to success',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-600 font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h1 className="text-6xl font-display font-bold mb-6">
              About <span className="text-gold-600">MERIDIAN BRIDGE</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Transforming lives by connecting aspirations with global opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To empower individuals and families worldwide by providing expert guidance and comprehensive support for their international mobility journey, enabling them to access premium education, meaningful employment, and permanent residency opportunities in the world&apos;s leading destinations.
              </p>
              <p className="text-lg text-gray-700">
                We believe every person has the potential to build a better future across borders. Our mission is to remove barriers and create pathways to success.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                To become the world&apos;s most trusted immigration consulting company, recognized for our excellence, integrity, and unwavering commitment to client success. We envision a world where global opportunities are accessible to deserving individuals regardless of their background.
              </p>
              <p className="text-lg text-gray-700">
                Through innovation and expertise, we&apos;re building bridges between aspirations and achievements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-navy-700">
        <div className="container-max">
          <SectionTitle
            subtitle="What We Stand For"
            title="Our Core Values"
            description="Guiding principles that define everything we do"
            centered={true}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="dark" className="p-8 text-center h-full">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gold-600 rounded-lg">
                        <Icon size={32} className="text-navy-700" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-ivory mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <SectionTitle
            subtitle="Our Expertise"
            title="PhD Holders & Post-Graduate Professionals"
            description="Distinguished expertise and academic excellence at every level"
            centered={true}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16"
          >
            <Card hover className="p-12 bg-white border-2 border-gold-600/20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold font-display text-navy-900 mb-4 flex items-center gap-3">
                    <span className="text-gold-600 text-3xl">●</span>
                    Credential Excellence
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our team comprises PhD holders and post-graduate professionals with advanced qualifications in immigration law, international relations, education policy, and migration studies. Each team member brings rigorous academic training combined with extensive practical experience in global immigration consulting.
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-gold-600/0 via-gold-600/50 to-gold-600/0"></div>

                <div>
                  <h3 className="text-2xl font-semibold font-display text-navy-900 mb-4 flex items-center gap-3">
                    <span className="text-gold-600 text-3xl">●</span>
                    Building Our Dream Team
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We are actively seeking to expand our exceptional team and are open to integrating experienced immigration lawyers and specialized consultants. If you are a qualified immigration attorney or consultant with a passion for transforming lives through global mobility solutions, we would welcome the opportunity to collaborate with you.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold font-display text-navy-900 mb-4 flex items-center gap-3">
                    <span className="text-gold-600 text-3xl">●</span>
                    Our Commitment
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We maintain the highest standards of professional integrity, continuous learning, and client-centered excellence. Our multidisciplinary approach ensures comprehensive solutions tailored to each client&apos;s unique immigration objectives.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Global Network */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gold-600 font-semibold uppercase tracking-widest mb-3">
              Global Presence
            </p>
            <h2 className="text-5xl font-display font-bold mb-6">
              Operating in <span className="text-gold-600">15+ Countries</span>
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              With partnerships across major immigration destinations, we&apos;re committed to supporting your success globally.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-2xl mx-auto mb-12"
            >
              {['Canada', 'Australia', 'Germany', 'Ireland', 'New Zealand', 'Netherlands', 'Spain', 'France', 'Italy'].map(
                (country) => (
                  <div key={country} className="p-4 bg-navy-700/50 rounded-lg backdrop-blur">
                    <p className="font-semibold">{country}</p>
                  </div>
                )
              )}
            </motion.div>

            <Button href="/contact" variant="gold" size="lg">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
