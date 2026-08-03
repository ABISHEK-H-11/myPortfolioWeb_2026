import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  const { name, email, message } = req.body || {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ success: false, error: 'Name is required.' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }
  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ success: false, error: 'Message is required.' });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const recipientEmail = 'contact.abishekh@gmail.com';

  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('SMTP env vars missing');
      return res.status(500).json({ success: false, error: 'Email service not configured.' });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"${trimmedName}" <${smtpUser}>`,
      replyTo: trimmedEmail,
      to: recipientEmail,
      subject: `New Portfolio Message from ${trimmedName}`,
      text: `Visitor Name: ${trimmedName}\nVisitor Email: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    });

    return res.status(200).json({ success: true, message: 'Thank you! Your message has been sent successfully.' });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ success: false, error: 'Unable to send email at this time.' });
  }
}
