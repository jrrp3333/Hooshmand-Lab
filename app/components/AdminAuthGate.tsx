'use client';

import { useState } from 'react';

interface AdminAuthGateProps {
  onAuthSuccess: () => void;
}

export default function AdminAuthGate({ onAuthSuccess }: AdminAuthGateProps) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [showHelp, setShowHelp] = useState(false);

  // Default PIN - change in production
  const CORRECT_PIN = '1234';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (pin === CORRECT_PIN) {
      localStorage.setItem('admin_auth', 'true');
      onAuthSuccess();
    } else {
      setError('Incorrect PIN. Please try again.');
      setPin('');
    }
  };

  return (
    <div className="admin-auth-wrapper">
      <section className="admin-auth-section">
        <div className="section-inner">
          <div className="admin-auth-container">
            <div className="admin-auth-panel">
              <h1 className="admin-auth-title">Lab Admin Access</h1>
              <p className="admin-auth-subtitle">
                Enter your PIN to access the content management system.
              </p>

              <form onSubmit={handleSubmit} className="admin-auth-form">
                <div className="form-group">
                  <label htmlFor="pin-input" className="form-label">
                    Access PIN
                  </label>
                  <input
                    id="pin-input"
                    type="password"
                    inputMode="numeric"
                    maxLength={6}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="••••"
                    className="form-input form-input--large"
                    autoFocus
                    aria-describedby={error ? 'pin-error' : undefined}
                  />
                  {error && (
                    <div id="pin-error" className="form-error" role="alert">
                      {error}
                    </div>
                  )}
                </div>

                <button type="submit" className="button button--primary button--large">
                  Sign In
                </button>
              </form>

              <button
                type="button"
                onClick={() => setShowHelp(!showHelp)}
                className="admin-auth-help-toggle"
                aria-expanded={showHelp}
              >
                {showHelp ? '✕ Close Help' : '? Need help?'}
              </button>

              {showHelp && (
                <div className="admin-auth-help" role="region" aria-label="Help information">
                  <p>
                    <strong>Forgot your PIN?</strong>
                  </p>
                  <p>
                    Contact your IT support or the lab administrator. Your PIN was provided during setup.
                  </p>
                  <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                    💡 Tip: Use the numeric keypad on your device for easier entry.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
