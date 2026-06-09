'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';
import TikTokIcon from '@/components/icons/TikTokIcon';
import { CONTACT_INFO, NAVIGATION_ITEMS, SOCIAL_MEDIA } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return <Instagram size={20} />;
      case 'x':
      case 'twitter':
        return <Twitter size={20} />;
      case 'tiktok':
        return <TikTokIcon size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-navy-700 text-ivory">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="relative w-14 h-14 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="MERIDIAN BRIDGE"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold font-display mb-2">MERIDIAN BRIDGE</h3>
              <p className="text-gray-300">
                Connecting Potential. Building Futures. Premium immigration consulting for global opportunities.
              </p>
            </div>
            <div className="flex space-x-4">
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:text-gold-600 transition-colors"
                >
                  {getIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-600">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-gold-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-600">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/services/study-abroad" className="hover:text-gold-600 transition-colors">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="/services/student-visas" className="hover:text-gold-600 transition-colors">
                  Student Visas
                </Link>
              </li>
              <li>
                <Link href="/services/work-visa" className="hover:text-gold-600 transition-colors">
                  Work Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/services/permanent-residency"
                  className="hover:text-gold-600 transition-colors"
                >
                  Permanent Residency
                </Link>
              </li>
              <li>
                <Link href="/services/family-sponsorship" className="hover:text-gold-600 transition-colors">
                  Family Sponsorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-600">Contact Us</h4>
            <div className="space-y-4 text-gray-300">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start space-x-3 hover:text-gold-600 transition-colors">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start space-x-3 hover:text-gold-600 transition-colors">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-600 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {currentYear} MERIDIAN BRIDGE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gold-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gold-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
