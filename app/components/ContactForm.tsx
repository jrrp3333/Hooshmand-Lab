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
            backgroundColor: '#e6f3e6',
            border: '1px solid #4caf50',
            color: '#2e7d32',
            padding: '16px',
            borderRadius: '4px',
            marginBottom: '20px',
          }}
        >
          <strong>Success!</strong> Your message has been sent. We'll get back to you soon.
        </div>
      )}

      {submitState.error && (
        <div
          style={{
            backgroundColor: '#fee',
            border: '1px solid #f44',
            color: '#c33',
            padding: '16px',
            borderRadius: '4px',
            marginBottom: '20px',
          }}
        >
          <strong>Error:</strong> {submitState.error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 600,
              color: '#102a43',
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
              padding: '12px',
              border: '1px solid #d6dde5',
              borderRadius: '4px',
              fontFamily: 'inherit',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 600,
              color: '#102a43',
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
              padding: '12px',
              border: '1px solid #d6dde5',
              borderRadius: '4px',
              fontFamily: 'inherit',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="subject"
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 600,
              color: '#102a43',
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
              padding: '12px',
              border: '1px solid #d6dde5',
              borderRadius: '4px',
              fontFamily: 'inherit',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="message"
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 600,
              color: '#102a43',
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
              padding: '12px',
              border: '1px solid #d6dde5',
              borderRadius: '4px',
              fontFamily: 'inherit',
              fontSize: '16px',
              resize: 'vertical',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={submitState.loading}
          style={{
            backgroundColor: '#102a43',
            color: '#ffffff',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '16px',
            cursor: submitState.loading ? 'not-allowed' : 'pointer',
            opacity: submitState.loading ? 0.7 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          {submitState.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
