import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Middleware
  app.use(express.json());

  // Contact API Endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body || {};

      // 1. Validation
      if (!name || typeof name !== 'string' || !name.trim()) {
        return res.status(400).json({
          success: false,
          error: 'Name is required.',
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid email address.',
        });
      }

      if (!message || typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({
          success: false,
          error: 'Message is required.',
        });
      }

      const trimmedName = name.trim();
      const trimmedEmail = email.trim();
      const trimmedMessage = message.trim();
      const submissionTime = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'medium',
      });

      const recipientEmail = 'contact.abishekh@gmail.com';

      // 2. Email Sending logic
      const smtpHost = process.env.SMTP_HOST;
      const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
      const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

      if (smtpHost && smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"${trimmedName}" <${smtpUser}>`,
          replyTo: trimmedEmail,
          to: recipientEmail,
          subject: `New Portfolio Message from ${trimmedName}`,
          text: `You have received a new contact submission from your portfolio:\n\nVisitor Name: ${trimmedName}\nVisitor Email: ${trimmedEmail}\nDate & Time: ${submissionTime}\n\nMessage:\n${trimmedMessage}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
              <h2 style="color: #ea580c; margin-bottom: 16px;">New Contact Message</h2>
              <p style="margin-bottom: 8px;"><strong>Visitor Name:</strong> ${trimmedName}</p>
              <p style="margin-bottom: 8px;"><strong>Visitor Email:</strong> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a></p>
              <p style="margin-bottom: 16px;"><strong>Date & Time:</strong> ${submissionTime}</p>
              <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #ea580c; white-space: pre-wrap;">${trimmedMessage}</div>
            </div>
          `,
        });
      } else {
        // Log to server console when SMTP is not configured
        console.log('----------------------------------------------------');
        console.log('📬 CONTACT FORM SUBMISSION RECEIVED');
        console.log(`Recipient: ${recipientEmail}`);
        console.log(`Visitor Name: ${trimmedName}`);
        console.log(`Visitor Email: ${trimmedEmail}`);
        console.log(`Date & Time: ${submissionTime}`);
        console.log(`Message: ${trimmedMessage}`);
        console.log('----------------------------------------------------');
      }

      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
    } catch (err: any) {
      console.error('Error processing contact form:', err);
      return res.status(500).json({
        success: false,
        error: 'Unable to send email notification at this time. Please try again later.',
      });
    }
  });

  // Health route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Vite middleware in dev, static server in prod
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
