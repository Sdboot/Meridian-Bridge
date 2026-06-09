'use server';

import { ContactFormInputs } from '@/components/common/ContactForm';

export async function submitContactFormToFormspree(data: ContactFormInputs) {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('serviceNeeded', data.serviceNeeded);
    formData.append('preferredDate', data.preferredDate);
    formData.append('preferredTime', data.preferredTime);
    formData.append('message', data.message);

    const response = await fetch('https://formspree.io/f/xdajqywd', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Server action error:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
}
