'use client';

import { motion } from 'framer-motion';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Search, Calendar, FileText, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Complete Guide to Canadian Study Visas',
      description: 'Step-by-step guide for international students planning to study in Canada',
      type: 'guide',
      country: 'Canada',
      date: '2024-05-15',
      icon: BookOpen,
    },
    {
      id: 2,
      title: 'UK Visa Requirements Checklist',
      description: 'Essential documents and requirements for UK visa applications',
      type: 'checklist',
      country: 'United Kingdom',
      date: '2024-05-10',
      icon: FileText,
    },
    {
      id: 3,
      title: 'Australian Skilled Migration Handbook',
      description: 'Comprehensive guide for skilled professionals migrating to Australia',
      type: 'guide',
      country: 'Australia',
      date: '2024-05-05',
      icon: BookOpen,
    },
    {
      id: 4,
      title: 'US Work Visa Timeline & Process',
      description: 'Detailed timeline and process for H-1B and other work visas',
      type: 'template',
      country: 'United States',
      date: '2024-04-28',
      icon: FileText,
    },
    {
      id: 5,
      title: 'Settlement Guide: New to Canada',
      description: 'Complete resource for newcomers settling in Canada',
      type: 'guide',
      country: 'Canada',
      date: '2024-04-20',
      icon: BookOpen,
    },
    {
      id: 6,
      title: 'German Work Visa Application Form',
      description: 'Fillable template and instructions for German work visa',
      type: 'template',
      country: 'Germany',
      date: '2024-04-15',
      icon: FileText,
    },
  ];

  const blogs = [
    {
      id: 1,
      title: 'Top 5 Countries for International Students in 2024',
      excerpt: 'Discover the best destinations for higher education with expert insights...',
      category: 'Education',
      date: '2024-05-18',
      readTime: 5,
    },
    {
      id: 2,
      title: 'How to Prepare for Your Visa Interview',
      excerpt: 'Expert tips and common questions to help you ace your visa interview...',
      category: 'Visa Tips',
      date: '2024-05-15',
      readTime: 7,
    },
    {
      id: 3,
      title: 'Permanent Residency vs Work Visas: Which is Right for You?',
      excerpt: 'Understand the differences and choose the right pathway for your goals...',
      category: 'Immigration',
      date: '2024-05-12',
      readTime: 8,
    },
  ];

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              Knowledge Center
            </p>
            <h1 className="text-6xl font-display font-bold mb-6">
              Immigration Resources
            </h1>
            <p className="text-xl text-gray-200">
              Guides, templates, blogs, and expert insights to support your journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-ivory border-b border-gray-200">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-4 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search guides, templates, countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg rounded-lg border-2 border-gray-300 focus:border-teal-600 focus:outline-none transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold mb-2 text-charcoal">
            {filteredResources.length} {filteredResources.length === 1 ? 'Resource' : 'Resources'} Found
          </h2>
          <p className="text-gray-600 mb-8">Essential tools and guides for your immigration journey</p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover border className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-luxury rounded-lg">
                        <Icon size={24} className="text-gold-600" />
                      </div>
                      <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                        {resource.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold font-display mb-3 flex-grow">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-200 pt-4">
                      <span>{resource.country}</span>
                      <span>{new Date(resource.date).toLocaleDateString()}</span>
                    </div>

                    <Button href="#" variant="outline" size="sm" className="w-full mt-4">
                      Download
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-navy-700">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold-600 font-semibold uppercase tracking-widest mb-3">
              Latest Insights
            </p>
            <h2 className="text-5xl font-display font-bold text-ivory">
              Immigration <span className="text-gold-600">Blog</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="dark" className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gold-600">{blog.category}</span>
                    <span className="text-sm text-gray-400">{blog.readTime} min read</span>
                  </div>

                  <h3 className="text-xl font-semibold font-display text-ivory mb-3 flex-grow">
                    {blog.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-6">{blog.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-700 pt-4">
                    <span className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </span>
                  </div>

                  <Button href="#" variant="outline" size="sm" className="w-full mt-4">
                    Read Article
                  </Button>
                </Card>
              </motion.div>
            ))}
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
              Still Have <span className="text-gold-600">Questions?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our expert team for personalized guidance tailored to your specific needs.
            </p>
            <Button href="/contact" variant="gold" size="lg">
              Get Expert Help
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
