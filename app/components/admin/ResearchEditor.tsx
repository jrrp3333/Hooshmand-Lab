'use client';

import { useState, useEffect } from 'react';

interface ResearchProject {
  slug: string;
  title: string;
  description: string;
  date: string;
  order?: number;
  image?: string;
  body: string;
}

export default function ResearchEditor({ initialProjects }: { initialProjects: ResearchProject[] }) {
  const [projects, setProjects] = useState<ResearchProject[]>(initialProjects);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ResearchProject>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleEdit = (project: ResearchProject) => {
    setEditingSlug(project.slug);
    setFormData(project);
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
      const response = await fetch('/api/admin/research', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldSlug: editingSlug,
          project: formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to save');

      setMessage('✓ Changes saved successfully!');
      setTimeout(() => {
        setEditingSlug(null);
        setFormData({});
        // Just stay with the local state update
      }, 1000);
    } catch (error) {
      setMessage('✗ Error saving changes. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-editor">
      <h2 className="admin-section-title">Research Projects</h2>
      <p className="admin-section-subtitle">Manage the lab's current research initiatives.</p>

      {message && <div className={`admin-message ${message.includes('✓') ? 'is-success' : 'is-error'}`}>{message}</div>}

      <div className="admin-list">
        {projects.map((project) => (
          <div key={project.slug} className="admin-list-item">
            {editingSlug === project.slug ? (
              // Edit Mode
              <div className="admin-form">
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Project Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={formData.title || ''}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter project title"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label">
                    Short Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description || ''}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Enter a brief description"
                    rows={3}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image" className="form-label">
                    Image URL
                  </label>
                  <input
                    id="image"
                    type="text"
                    name="image"
                    value={formData.image || ''}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="/images/uploads/..."
                  />
                  {formData.image && <div className="form-note">Preview: {formData.image}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="body" className="form-label">
                    Full Description
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    value={formData.body || ''}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Enter full research details"
                    rows={8}
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
                  <h3 className="admin-list-item-title">{project.title}</h3>
                </div>
                <p className="admin-list-item-preview">{project.description}</p>
                <button onClick={() => handleEdit(project)} className="button button--secondary button--small">
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
