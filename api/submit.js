export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { formType, name, email, phone, message, 'event-type': eventType, date, location } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  let emailSubject = 'Coach TJ Website Form Submission';
  if (formType === 'Group Mentorship') emailSubject = 'New 12-Month Academy Application';
  if (formType === 'Private One on One') emailSubject = 'New One-on-One Mentorship Enquiry';
  if (formType === 'Keynote Speaking') emailSubject = 'New Keynote Speaking Request';
  if (formType === 'speaking') emailSubject = 'Book Me Enquiry'; 


  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', 
        to: 'katlegojohnson30@gmail.com',         
        subject: emailSubject,
        html: `
          <h3>Form Type: ${formType ? formType.toUpperCase() : 'Not Specified'}</h3>
          <p><strong>Name:</strong> ${name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          
          ${formType === 'speaking' ? `
            <hr />
            <h4>Event Details:</h4>
            <p><strong>Event Type:</strong> ${eventType || 'Not provided'}</p>
            <p><strong>Event Date:</strong> ${date || 'Not provided'}</p>
            <p><strong>Event Location:</strong> ${location || 'Not provided'}</p>
            <hr />
          ` : ''}

          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to dispatch email via Resend.');
    }

    return res.status(200).json({ success: true, message: 'Submission successful!' });

  } catch (error) {
    console.error('Serverless route error:', error);
    return res.status(500).json({ error: 'Internal server error. Please try again.' });
  }
}
