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

  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      specialization: 'Immigration Law',
      bio: '20+ years of experience in international mobility and immigration consulting',
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Head of Services',
      specialization: 'Education Consultancy',
      bio: 'Expert in student visa pathways and educational placement',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Operations',
      specialization: 'Work Visas',
      bio: 'Specialist in skilled migration and employment-based immigration',
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Settlement Support Lead',
      specialization: 'Integration Programs',
      bio: 'Dedicated to ensuring smooth transitions and successful settlement',
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
                To empower individuals and families worldwide by providing expert guidance and comprehensive support for their international mobility journey, enabling them to access premium education, meaningful employment, and permanent residency opportunities in the world's leading destinations.
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
                To become the world's most trusted immigration consulting company, recognized for our excellence, integrity, and unwavering commitment to client success. We envision a world where global opportunities are accessible to deserving individuals regardless of their background.
              </p>
              <p className="text-lg text-gray-700">
                Through innovation and expertise, we're building bridges between aspirations and achievements.
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

      {/* Leadership Team */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <SectionTitle
            subtitle="Meet The Team"
            title="Our Leadership"
            description="Experienced professionals dedicated to your success"
            centered={true}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="overflow-hidden h-full">
                  <div className="bg-gradient-luxury h-40"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-display mb-1">{member.name}</h3>
                    <p className="text-teal-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gold-600 mb-3">{member.specialization}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
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
              With offices and partnerships across major immigration destinations, we're always close to our clients.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-2xl mx-auto mb-12"
            >
              {['Canada', 'UK', 'Australia', 'USA', 'Germany', 'Ireland', 'New Zealand', 'Singapore'].map(
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
