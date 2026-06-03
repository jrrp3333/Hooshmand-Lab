/**
 * Email service abstraction layer
 * Supports multiple providers (Gmail, Outlook)
 * Provider is selected via EMAIL_SERVICE environment variable
 */

import nodemailer from 'nodemailer';
import GmailProvider from './emailProviders/gmail';
import OutlookProvider from './emailProviders/outlook';

export interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
  from?: string;
}

export interface EmailProvider {
  createTransport(): Promise<nodemailer.Transporter>;
  sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }>;
}

class EmailService {
  private provider: EmailProvider | null = null;

  private initializeProvider() {
    if (this.provider) {
      return;
    }

    const emailService = process.env.EMAIL_SERVICE?.toLowerCase();

    if (emailService === 'gmail') {
      this.provider = new GmailProvider();
    } else if (emailService === 'outlook') {
      this.provider = new OutlookProvider();
    } else {
      throw new Error(
        'EMAIL_SERVICE environment variable must be set to "gmail" or "outlook"'
      );
    }
  }

  async send(options: EmailOptions) {
    this.initializeProvider();
    if (!this.provider) {
      throw new Error('Email provider not initialized');
    }

    return this.provider.sendEmail(options);
  }
}

export default new EmailService();
