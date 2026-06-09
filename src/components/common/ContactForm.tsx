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
  serviceNeeded: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  isLoading?: boolean;
}

const ContactForm = ({ isLoading: externalLoading = false }: ContactFormProps) => {
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
          <p className="text-green-700 font-semibold">✓ Form submitted successfully! We&apos;ll be in touch soon.</p>
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
          className="w-full rounded-lg border border-gray-300 px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>



      {/* Service Needed */}
      <div>
        <label htmlFor="serviceNeeded" className="block text-sm font-semibold mb-2 text-charcoal">
          Service Needed *
        </label>
        <select
          id="serviceNeeded"
          {...register('serviceNeeded')}
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

      {/* Preferred Date */}
      <div>
        <label htmlFor="preferredDate" className="block text-sm font-semibold mb-2 text-charcoal">
          Preferred Session Date *
        </label>
        <input
          id="preferredDate"
          type="date"
          {...register('preferredDate')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.preferredDate && <p className="text-red-600 text-sm mt-1">{errors.preferredDate.message}</p>}
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="preferredTime" className="block text-sm font-semibold mb-2 text-charcoal">
          Preferred Session Time *
        </label>
        <input
          id="preferredTime"
          type="time"
          {...register('preferredTime')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime.message}</p>}
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
        {isLoading ? 'Submitting...' : 'Book a Session'}
      </Button>
    </form>
  );
};

export default ContactForm;
