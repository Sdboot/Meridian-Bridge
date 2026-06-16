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
      const errorText = await response.text();
      console.error('Formspree error response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });
      throw new Error(`Formspree error: ${response.status} ${response.statusText}`);
    }

    // Formspree returns a success response, don't try to parse it as JSON
    console.log('Form submitted successfully to Formspree');
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Server action error:', errorMessage, error);
    throw new Error(`Failed to submit form: ${errorMessage}`);
  }
}
