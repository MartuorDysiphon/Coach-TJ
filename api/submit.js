// api/submit.js
export default async function handler(req, res) {
  // 1. Enforce POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { formType, name, email, phone, message } = req.body;

  // Simple required validation
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  // 2. Dynamically change the email subject based on which form was submitted
  let emailSubject = 'New Website Form Submission';
  if (formType === 'group') emailSubject = 'New 12-Month Academy Application';
  if (formType === 'oneonone') emailSubject = 'New One-on-One Mentorship Enquiry';
  if (formType === 'keynote') emailSubject = 'New Keynote Speaking Request';

  try {
    // 3. Post to Resend API using standard global fetch
    const response = await fetch('https://resend.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Website Form <onboarding@resend.dev>', // Keep this default for Resend free tier
        to: 'katlegojohnson@gmail.com',         // CHANGE THIS to your actual email address
        subject: emailSubject,
        html: `
          <h3>Form Type: ${formType ? formType.toUpperCase() : 'Not Specified'}</h3>
          <p><strong>Name:</strong> ${name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to dispatch email via Resend.');
    }

    // Return a success JSON payload to your React frontend
    return res.status(200).json({ success: true, message: 'Submission successful!' });

  } catch (error) {
    console.error('Serverless route error:', error);
    return res.status(500).json({ error: 'Internal server error. Please try again.' });
  }
}