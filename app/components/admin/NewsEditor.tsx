'use client';

import { useState } from 'react';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
}

export default function NewsEditor({ initialItems }: { initialItems: NewsItem[] }) {
  const [items, setItems] = useState<NewsItem[]>(initialItems);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<NewsItem>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleEdit = (item: NewsItem) => {
    setEditingSlug(item.slug);
    setFormData(item);
    setMessage('');
  };

  const handleCancel = () => {
    setEditingSlug(null);
    setFormData({});
    setMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/admin/news', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldSlug: editingSlug,
          item: formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to save');

      setMessage('✓ News item updated!');
      setTimeout(() => {
        setEditingSlug(null);
        setFormData({});
      }, 1000);
    } catch (error) {
      setMessage('✗ Error saving changes. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-editor">
      <h2 className="admin-section-title">News & Updates</h2>
      <p className="admin-section-subtitle">Post lab announcements and milestones.</p>

      {message && <div className={`admin-message ${message.includes('✓') ? 'is-success' : 'is-error'}`}>{message}</div>}

      <div className="admin-list">
        {items.map((item) => (
          <div key={item.slug} className="admin-list-item">
            {editingSlug === item.slug ? (
              // Edit Mode
              <div className="admin-form">
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={formData.title || ''}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter news title"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date ? formData.date.split('T')[0] : ''}
                      onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="excerpt" className="form-label">
                    Summary (appears in news feed)
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt || ''}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Brief summary of the news"
                    rows={3}
                  />
                  <div className="form-note">
                    {formData.excerpt?.length || 0} / 160 characters (recommended max)
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="body" className="form-label">
                    Full Article
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    value={formData.body || ''}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Enter full news article"
                    rows={10}
                  />
                </div>

                <div className="form-actions">
                  <button onClick={handleSave} className="button button--primary" disabled={saving}>
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button onClick={handleCancel} className="button button--secondary">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // View Mode
              <div className="admin-list-item-view">
                <div className="admin-list-item-header">
                  <h3 className="admin-list-item-title">{item.title}</h3>
                  <span className="admin-list-item-date">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <p className="admin-list-item-preview">{item.excerpt}</p>
                <button onClick={() => handleEdit(item)} className="button button--secondary button--small">
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
