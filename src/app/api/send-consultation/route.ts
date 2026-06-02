import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, countryOfInterest, serviceNeeded, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !countryOfInterest || !serviceNeeded || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send to Formspree
    const formspreeEndpoint = 'https://formspree.io/f/xdajqywd';
    
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('email', email);
    params.append('phone', phone);
    params.append('countryOfInterest', countryOfInterest);
    params.append('serviceNeeded', serviceNeeded);
    params.append('message', message);

    console.log('Sending to Formspree:', {
      name,
      email,
      phone,
      countryOfInterest,
      serviceNeeded,
    });

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    console.log('Formspree response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Formspree error:', errorText, response.status);
      return NextResponse.json(
        { error: `Formspree error: ${response.status}` },
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log('Formspree success:', result);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server error' },
      { status: 500 }
    );
  }
}
