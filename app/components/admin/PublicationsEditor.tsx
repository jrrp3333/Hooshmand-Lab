'use client';

import { useState } from 'react';

interface Publication {
  slug: string;
  title: string;
  authors?: string;
  year: number;
  venue?: string;
  category: string;
  details?: string;
  doi?: string;
}

const CATEGORIES = ['Journal Paper', 'Invited Book Chapter', 'Invited Talk', 'Seminar', 'Conference Presentation'];

export default function PublicationsEditor({ initialPublications }: { initialPublications: Publication[] }) {
  const [publications, setPublications] = useState<Publication[]>(initialPublications);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Publication>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleEdit = (pub: Publication) => {
    setEditingSlug(pub.slug);
    setFormData(pub);
    setMessage('');
  };

  const handleCancel = () => {
    setEditingSlug(null);
    setFormData({});
    setMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) : value,
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/admin/publications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldSlug: editingSlug,
          publication: formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to save');

      setMessage('✓ Publication updated!');
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
      <h2 className="admin-section-title">Publications</h2>
      <p className="admin-section-subtitle">Manage peer-reviewed papers, talks, and presentations.</p>

      {message && <div className={`admin-message ${message.includes('✓') ? 'is-success' : 'is-error'}`}>{message}</div>}

      <div className="admin-list">
        {publications.map((pub) => (
          <div key={pub.slug} className="admin-list-item">
            {editingSlug === pub.slug ? (
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
                    placeholder="Enter publication title"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category || ''}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select a category</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="year" className="form-label">
                      Year
                    </label>
                    <input
                      id="year"
                      type="number"
                      name="year"
                      value={formData.year || new Date().getFullYear()}
                      onChange={handleInputChange}
                      className="form-input"
                      min="1990"
                      max={new Date().getFullYear() + 1}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="authors" className="form-label">
                    Authors
                  </label>
                  <textarea
                    id="authors"
                    name="authors"
                    value={formData.authors || ''}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="List authors (e.g., Smith, J., Doe, A., Brown, B.)"
                    rows={2}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="venue" className="form-label">
                    Venue / Journal / Conference
                  </label>
                  <input
                    id="venue"
                    type="text"
                    name="venue"
                    value={formData.venue || ''}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., Nature Science, ACS Nano"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="details" className="form-label">
                    Additional Details
                  </label>
                  <input
                    id="details"
                    type="text"
                    name="details"
                    value={formData.details || ''}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., Volume 15, Issue 3, pp. 234-245"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="doi" className="form-label">
                    DOI
                  </label>
                  <input
                    id="doi"
                    type="text"
                    name="doi"
                    value={formData.doi || ''}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., 10.1234/example.doi"
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
                  <h3 className="admin-list-item-title">{pub.title}</h3>
                  <span className="admin-list-item-year">{pub.year}</span>
                </div>
                <p className="admin-list-item-detail">{pub.category}</p>
                {pub.venue && <p className="admin-list-item-detail">{pub.venue}</p>}
                <button onClick={() => handleEdit(pub)} className="button button--secondary button--small">
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
