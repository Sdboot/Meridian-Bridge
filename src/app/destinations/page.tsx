'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { DESTINATIONS } from '@/constants';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function DestinationsPage() {
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
              Global Opportunities
            </p>
            <h1 className="text-6xl font-display font-bold mb-6">
              Premium Destinations
            </h1>
            <p className="text-xl text-gray-200">
              Explore your path to international success across continents
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {DESTINATIONS.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:auto-cols-reverse' : ''
                }`}
              >
                {/* Content */}
                <div>
                  <div className="text-6xl mb-4">{destination.flag}</div>
                  <h2 className="text-5xl font-display font-bold mb-4">{destination.name}</h2>
                  <p className="text-xl text-gray-600 mb-6">{destination.description}</p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-semibold text-charcoal">Key Opportunities:</h3>
                    {destination.opportunities.map((opp, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle size={20} className="text-teal-600 flex-shrink-0" />
                        <span className="text-gray-700">{opp}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="inline-flex items-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={20} />
                  </Button>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card variant="dark" className="h-full p-8 bg-gradient-luxury">
                    <div className="text-center text-ivory">
                      <div className="text-7xl mb-6">{destination.flag}</div>
                      <h3 className="text-3xl font-display font-bold mb-4">{destination.name}</h3>

                      <div className="space-y-6 mt-8">
                        <div>
                          <p className="text-gold-600 font-semibold mb-3">Primary Benefits</p>
                          <ul className="space-y-2 text-sm text-gray-200">
                            {destination.opportunities.map((opp, idx) => (
                              <li key={idx}>• {opp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Button
                        href={`/contact?destination=${destination.id}`}
                        variant="gold"
                        size="md"
                        className="w-full mt-8"
                      >
                        Explore Details
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-navy-700">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-display font-bold text-ivory mb-3">
              Quick <span className="text-gold-600">Comparison</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full text-ivory">
              <thead>
                <tr className="border-b border-gold-600">
                  <th className="text-left py-4 px-4 font-semibold">Country</th>
                  <th className="text-left py-4 px-4 font-semibold">Popular Route</th>
                  <th className="text-left py-4 px-4 font-semibold">Processing Time</th>
                  <th className="text-left py-4 px-4 font-semibold">Success Rate</th>
                </tr>
              </thead>
              <tbody>
                {DESTINATIONS.map((dest) => (
                  <tr key={dest.id} className="border-b border-gray-700 hover:bg-navy-600/50">
                    <td className="py-4 px-4">
                      <span className="mr-2">{dest.flag}</span>
                      {dest.name}
                    </td>
                    <td className="py-4 px-4">{dest.opportunities[0]}</td>
                    <td className="py-4 px-4">6-12 months</td>
                    <td className="py-4 px-4">
                      <span className="text-gold-600 font-semibold">95%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-max text-center text-ivory">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              Choose Your <span className="text-gold-600">Destination</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Ready to explore new horizons? Our experts will guide you through every step of the process.
            </p>
            <Button href="/contact" variant="gold" size="lg">
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
