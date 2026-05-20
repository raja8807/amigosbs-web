import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format' 
      });
    }

    // Configure the transporter using Brevo SMTP credentials from .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_Server || 'smtp-relay.brevo.com',
      port: parseInt(process.env.Port || '587', 10),
      secure: false, // Port 587 uses STARTTLS
      auth: {
        user: process.env.Login,
        pass: process.env.SMTP_KEY,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Amigos Contact Form" <${process.env.Login || 'reservations@amigosbs.com'}>`,
      to: 'reservations@amigosbs.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #e9021e; border-bottom: 2px solid #e9021e; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; white-space: pre-wrap; line-height: 1.5;">${message}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888; margin-bottom: 0;">This email was sent from the contact form on Amigos Business Solutions website.</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      message: 'Message sent successfully. We\'ll get back to you soon!',
      data: {
        name,
        email,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ 
      message: 'Internal server error. Failed to send message. Please try again later.' 
    });
  }
}
