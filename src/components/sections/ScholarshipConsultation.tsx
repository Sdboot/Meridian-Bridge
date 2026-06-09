'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Award, Globe, Users } from 'lucide-react';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';

interface ConsultationSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

export default function ScholarshipConsultation() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const consultationSlots: ConsultationSlot[] = [
    { id: '1', date: '2026-06-15', time: '10:00 AM', available: true },
    { id: '2', date: '2026-06-15', time: '2:00 PM', available: true },
    { id: '3', date: '2026-06-16', time: '10:00 AM', available: true },
    { id: '4', date: '2026-06-16', time: '3:00 PM', available: false },
    { id: '5', date: '2026-06-17', time: '11:00 AM', available: true },
    { id: '6', date: '2026-06-17', time: '4:00 PM', available: true },
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Scholarship Matching',
      description: 'Get matched with scholarships suited to your profile and qualifications',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Universities',
      description: 'Access to top-ranked universities offering Master\'s and PhD programs worldwide',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Guidance',
      description: 'One-on-one consultation with immigration and education specialists',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Application Support',
      description: 'Complete support from application to enrollment and visa processing',
    },
  ];

  const handleBooking = () => {
    if (selectedSlot) {
      setIsBooked(true);
      setTimeout(() => setIsBooked(false), 3000);
    }
  };

  return (
    <section className="section-padding bg-gradient-luxury">
      <div className="container-max">
        <SectionTitle
          title="Scholarships & Advanced Degrees"
          subtitle="Master's and PhD Programs with Full Support"
          centered={true}
        />

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-800/40 backdrop-blur-sm border border-gold-600/20 rounded-lg p-6 hover:border-gold-600/40 transition-colors"
            >
              <div className="text-gold-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-ivory mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Consultation Booking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-navy-800/60 backdrop-blur-sm border border-gold-600/30 rounded-lg p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-ivory mb-8 text-center">Book Your Consultation</h2>

          {/* Available Slots */}
          <div className="mb-8">
            <h3 className="text-ivory font-semibold mb-4 text-lg">Available Time Slots</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {consultationSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => slot.available && setSelectedSlot(slot.id)}
                  disabled={!slot.available}
                  className={`p-3 rounded-lg font-semibold transition-all text-sm ${
                    selectedSlot === slot.id
                      ? 'bg-gold-600 text-navy-900 scale-105'
                      : slot.available
                      ? 'bg-navy-700 text-ivory hover:bg-gold-600/20 hover:border-gold-600 border border-transparent'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50'
                  }`}
                >
                  <div className="font-semibold">{slot.time}</div>
                  <div className="text-xs opacity-75">{slot.date}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Success Message */}
          {isBooked && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg"
            >
              <p className="text-green-200 font-semibold">✓ Consultation slot selected! Complete your booking via the contact form.</p>
            </motion.div>
          )}

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleBooking}
              disabled={!selectedSlot}
              variant={selectedSlot ? 'gold' : 'outline'}
              size="lg"
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Selection
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact for More Info
            </Button>
          </div>
        </motion.div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center text-ivory"
          >
            <div className="text-5xl font-bold text-gold-600 mb-2">50+</div>
            <p className="text-gray-300">Partner Universities Worldwide</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-ivory"
          >
            <div className="text-5xl font-bold text-gold-600 mb-2">95%</div>
            <p className="text-gray-300">Scholarship Success Rate</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center text-ivory"
          >
            <div className="text-5xl font-bold text-gold-600 mb-2">1000+</div>
            <p className="text-gray-300">Students Supported</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
