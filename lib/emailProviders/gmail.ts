/**
 * Gmail SMTP Email Provider
 * Uses app password authentication (not regular Gmail password)
 */

import nodemailer from 'nodemailer';
import { EmailOptions, EmailProvider } from '../email';

class GmailProvider implements EmailProvider {
  private transporter: nodemailer.Transporter | null = null;

  async createTransport(): Promise<nodemailer.Transporter> {
    if (this.transporter) {
      return this.transporter;
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      throw new Error('EMAIL_USER and EMAIL_PASSWORD environment variables are required for Gmail');
    }

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    return this.transporter;
  }

  async sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const transporter = await this.createTransport();

      const from = options.from || process.env.EMAIL_USER || 'noreply@example.com';

      const mailOptions = {
        from,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      };

      const info = await transporter.sendMail(mailOptions);

      return {
        success: true,
        messageId: info.messageId,
      };
    } catch (error) {
      console.error('Gmail send error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }
}

export default GmailProvider;
