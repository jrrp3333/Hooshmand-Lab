'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitState, setSubmitState] = useState<SubmitState>({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.errors?.join(', ') || data.error || 'Failed to send message';
        setSubmitState({
          loading: false,
          success: false,
          error: errorMessage,
        });
        return;
      }

      setSubmitState({
        loading: false,
        success: true,
        error: null,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitState({ loading: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      setSubmitState({
        loading: false,
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      });
    }
  };

  return (
    <div className="entry-content">
      <h2>Send us a Message</h2>

      {submitState.success && (
        <div
          style={{
            backgroundColor: 'rgba(0, 102, 102, 0.08)',
            border: '1px solid rgba(0, 102, 102, 0.2)',
            color: '#006666',
            padding: '16px 18px',
            borderRadius: '16px',
            marginBottom: '24px',
          }}
        >
          <strong>Success!</strong> Your message has been sent. We'll get back to you soon.
        </div>
      )}

      {submitState.error && (
        <div
          style={{
            backgroundColor: 'rgba(102, 51, 51, 0.08)',
            border: '1px solid rgba(102, 51, 51, 0.2)',
            color: '#663333',
            padding: '16px 18px',
            borderRadius: '16px',
            marginBottom: '24px',
          }}
        >
          <strong>Error:</strong> {submitState.error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '22px' }}>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              marginBottom: '10px',
              fontWeight: 600,
              color: '#102a43',
              fontSize: '0.96rem',
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '1px solid #d6dde5',
              borderRadius: '14px',
              fontFamily: 'inherit',
              fontSize: '16px',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              transition: 'border-color 180ms ease, background-color 180ms ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 102, 102, 0.3)';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d6dde5';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            }}
          />
        </div>

        <div style={{ marginBottom: '22px' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '10px',
              fontWeight: 600,
              color: '#102a43',
              fontSize: '0.96rem',
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '1px solid #d6dde5',
              borderRadius: '14px',
              fontFamily: 'inherit',
              fontSize: '16px',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              transition: 'border-color 180ms ease, background-color 180ms ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 102, 102, 0.3)';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d6dde5';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            }}
          />
        </div>

        <div style={{ marginBottom: '22px' }}>
          <label
            htmlFor="subject"
            style={{
              display: 'block',
              marginBottom: '10px',
              fontWeight: 600,
              color: '#102a43',
              fontSize: '0.96rem',
            }}
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Message subject"
            required
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '1px solid #d6dde5',
              borderRadius: '14px',
              fontFamily: 'inherit',
              fontSize: '16px',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              transition: 'border-color 180ms ease, background-color 180ms ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 102, 102, 0.3)';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d6dde5';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            }}
          />
        </div>

        <div style={{ marginBottom: '28px' }}>
          <label
            htmlFor="message"
            style={{
              display: 'block',
              marginBottom: '10px',
              fontWeight: 600,
              color: '#102a43',
              fontSize: '0.96rem',
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={6}
            required
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '1px solid #d6dde5',
              borderRadius: '14px',
              fontFamily: 'inherit',
              fontSize: '16px',
              resize: 'vertical',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              transition: 'border-color 180ms ease, background-color 180ms ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 102, 102, 0.3)';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d6dde5';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            }}
          />
        </div>

        <button
          type="submit"
          disabled={submitState.loading}
          style={{
            backgroundColor: '#102a43',
            color: '#ffffff',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '999px',
            fontWeight: 700,
            fontSize: '0.96rem',
            cursor: submitState.loading ? 'not-allowed' : 'pointer',
            opacity: submitState.loading ? 0.7 : 1,
            transition: 'opacity 180ms ease, transform 180ms ease',
            transform: submitState.loading ? 'none' : 'translateY(0)',
          }}
          onMouseEnter={(e) => {
            if (!submitState.loading) {
              e.currentTarget.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {submitState.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
