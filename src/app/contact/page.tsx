'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/common/ContactForm';
import Card from '@/components/common/Card';
import { CONTACT_INFO } from '@/constants';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (data: Record<string, unknown>) => {
    // Simulate form submission
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_INFO.email,
      action: `mailto:${CONTACT_INFO.email}`,
      actionText: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: CONTACT_INFO.phone,
      action: `tel:${CONTACT_INFO.phone}`,
      actionText: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: CONTACT_INFO.whatsapp,
      action: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`,
      actionText: 'Chat on WhatsApp',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: CONTACT_INFO.address,
      action: '#',
      actionText: 'Get Directions',
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

              {/* Business Hours */}
              <Card variant="dark" className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold-600 rounded-lg flex-shrink-0">
                    <Clock size={24} className="text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ivory mb-2">Business Hours</h3>
                    <p className="text-gray-300 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="p-8 md:p-12">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-block p-4 bg-green-50 rounded-full mb-4"
                    >
                      <svg
                        className="w-12 h-12 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-charcoal mb-2">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We&apos;ve received your inquiry and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => window.location.reload()}
                      className="text-teal-600 hover:text-teal-700 font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-display font-bold mb-2">Send us a Message</h2>
                    <p className="text-gray-600 mb-8">
                      Fill out the form below and we&apos;ll respond promptly to your inquiry.
                    </p>
                    <ContactForm onSubmit={handleSubmit} />
                  </>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-navy-700">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-display font-bold text-ivory mb-3">
              Our <span className="text-gold-600">Offices</span>
            </h2>
            <p className="text-xl text-gray-300">
              Visit us at our headquarters for in-person consultations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-luxury rounded-xl overflow-hidden h-80"
          >
            {/* Map placeholder - Replace with actual Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-ivory">
                <MapPin size={48} className="mx-auto mb-4 text-gold-600" />
                <p className="text-lg font-semibold mb-2">MERIDIAN BRIDGE Headquarters</p>
                <p className="text-gray-300">{CONTACT_INFO.address}</p>
                <p className="text-gray-400 text-sm mt-2">
                  [Google Maps integration coming soon]
                </p>
              </div>
            </div>
          </motion.div>
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
              Check out our frequently asked questions or browse our resources section.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/resources" className="text-ivory hover:text-gold-600 font-semibold">
                View Resources →
              </a>
              <a href="/#faq" className="text-ivory hover:text-gold-600 font-semibold">
                Go to FAQ →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
