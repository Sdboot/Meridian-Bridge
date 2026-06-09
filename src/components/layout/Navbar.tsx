'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/constants';
import { NavItem } from '@/types';
import Button from '@/components/common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-700 shadow-lg-luxury' : 'bg-ivory border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group transition-opacity hover:opacity-80">
            {/* Logo Image */}
            <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="/logo.png"
                alt="MERIDIAN BRIDGE"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Company Name - Hidden on Mobile */}
            <div className="hidden sm:flex flex-col">
              <span
                className={`text-sm font-semibold tracking-wider transition-colors ${
                  scrolled ? 'text-ivory' : 'text-navy-700'
                }`}
              >
                MERIDIAN
              </span>
              <span
                className={`text-xs font-light tracking-wider transition-colors ${
                  scrolled ? 'text-teal-300' : 'text-teal-600'
                }`}
              >
                BRIDGE
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-1 ${
                    scrolled
                      ? 'text-ivory hover:bg-teal-600'
                      : 'text-charcoal hover:bg-gray-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {'submenu' in item && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown */}
                {'submenu' in item && (
                  <div className="absolute left-0 mt-0 w-48 bg-navy-700 rounded-lg shadow-lg-luxury opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
                    {(item.submenu as unknown as NavItem[]).map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-3 text-ivory hover:bg-teal-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button href="/contact" variant="gold" size="md">
              Book a Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="w-full flex items-center justify-between px-4 py-2 text-charcoal hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span>{item.label}</span>
                  {'submenu' in item && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {'submenu' in item && openDropdown === item.label && (
                  <div className="ml-4 space-y-2 mt-2">
                    {(item.submenu as unknown as NavItem[]).map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-charcoal hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href="/contact" variant="gold" size="md" className="w-full">
              Book a Session
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
