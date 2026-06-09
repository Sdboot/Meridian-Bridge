'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/common/ContactForm';
import Card from '@/components/common/Card';
import { CONTACT_INFO } from '@/constants';
import { Mail } from 'lucide-react';

export default function ContactPage() {

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_INFO.email,
      action: `mailto:${CONTACT_INFO.email}`,
      actionText: 'Send Email',
    },
  ];

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
              Get In Touch
            </p>
            <h1 className="text-6xl font-display font-bold mb-6">
              Contact <span className="text-gold-600">MERIDIAN BRIDGE</span>
            </h1>
            <p className="text-xl text-gray-200">
              We&apos;re here to answer your questions and guide you to your next opportunity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Reach out through any of these channels. Our team is here to assist you 24/7.
                </p>
              </div>

              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card hover border className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-luxury rounded-lg flex-shrink-0">
                          <Icon size={24} className="text-gold-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-charcoal mb-2">{method.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{method.value}</p>
                          <a
                            href={method.action}
                            target={method.title === 'WhatsApp' ? '_blank' : undefined}
                            rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                            className="text-teal-600 hover:text-teal-700 font-semibold text-sm"
                          >
                            {method.actionText} →
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="p-8 md:p-12">
                <h2 className="text-3xl font-display font-bold mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll respond promptly to your inquiry.
                </p>
                <ContactForm />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              Have <span className="text-gold-600">Questions?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Check out our frequently asked questions for quick answers.
            </p>
            <a href="/faq" className="inline-block px-8 py-3 bg-gold-600 text-navy-700 font-semibold rounded-lg hover:bg-gold-700 transition-colors">
              View FAQs →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
