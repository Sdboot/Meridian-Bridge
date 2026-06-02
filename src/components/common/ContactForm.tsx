'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from './Button';
import { useState } from 'react';
import { submitContactFormToFormspree } from '@/app/actions';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Phone must be at least 10 characters'),
  countryOfInterest: z.string().min(1, 'Please select a country'),
  serviceNeeded: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormInputs) => Promise<void>;
  isLoading?: boolean;
}

const ContactForm = ({ onSubmit, isLoading: externalLoading = false }: ContactFormProps) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleFormSubmit = async (data: ContactFormInputs) => {
    try {
      setInternalLoading(true);
      setSubmissionError(null);
      setSubmissionSuccess(false);

      // Call server action to submit to Formspree
      await submitContactFormToFormspree(data);

      setSubmissionSuccess(true);
      reset();

      // Clear success message after 5 seconds
      setTimeout(() => setSubmissionSuccess(false), 5000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while submitting the form';
      console.error('Form submission error:', error);
      setSubmissionError(errorMessage);
    } finally {
      setInternalLoading(false);
    }
  };

  const isLoading = externalLoading || internalLoading;

  const countries = [
    'Canada',
    'United Kingdom',
    'Australia',
    'United States',
    'Germany',
    'Ireland',
    'New Zealand',
  ];

  const services = [
    'Study Abroad',
    'Student Visa Assistance',
    'Work Visa Processing',
    'Permanent Residency',
    'Family Sponsorship',
    'Business Immigration',
    'Skilled Migration',
    'Settlement Support',
  ];

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Success Message */}
      {submissionSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 font-semibold">✓ Form submitted successfully! We'll be in touch soon.</p>
        </div>
      )}

      {/* Error Message */}
      {submissionError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 font-semibold">Error: {submissionError}</p>
        </div>
      )}
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-charcoal">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register('name')}
          aria-invalid={!!errors.name}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-charcoal">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          aria-invalid={!!errors.email}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-charcoal">
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          {...register('phone')}
          aria-invalid={!!errors.phone}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Country of Interest */}
      <div>
        <label htmlFor="countryOfInterest" className="block text-sm font-semibold mb-2 text-charcoal">
          Country of Interest *
        </label>
        <select
          id="countryOfInterest"
          {...register('countryOfInterest')}
          aria-invalid={!!errors.countryOfInterest}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.countryOfInterest && (
          <p className="text-red-600 text-sm mt-1">{errors.countryOfInterest.message}</p>
        )}
      </div>

      {/* Service Needed */}
      <div>
        <label htmlFor="serviceNeeded" className="block text-sm font-semibold mb-2 text-charcoal">
          Service Needed *
        </label>
        <select
          id="serviceNeeded"
          {...register('serviceNeeded')}
          aria-invalid={!!errors.serviceNeeded}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceNeeded && (
          <p className="text-red-600 text-sm mt-1">{errors.serviceNeeded.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-charcoal">
          Message *
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your immigration goals..."
          rows={5}
          {...register('message')}
          aria-invalid={!!errors.message}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isLoading}
        className="w-full"
        ariaLabel="Submit consultation form"
      >
        {isLoading ? 'Submitting...' : 'Book Consultation'}
      </Button>
    </form>
  );
};

export default ContactForm;
