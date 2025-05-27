import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const airtableData = {
      records: [
        {
          fields: {
            'Property Type': data.propertyType,
            'Property Size': data.propertySize === 'other' ? data.otherSize : data.propertySize,
            'Has Basement': data.hasBasement,
            'Service Type': data.serviceType,
            'Full Name': data.fullName,
            'Email': data.email,
            'Phone Number': data.phoneNumber,
            'Submission Date': new Date().toISOString()
          }
        }
      ]
    };

    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Questionnaire`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(airtableData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Airtable');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
} 