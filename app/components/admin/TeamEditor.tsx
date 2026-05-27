'use client';

import { useState } from 'react';

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  title: string;
  specialization?: string;
  email?: string;
  office?: string;
  order?: number;
  image?: string;
  body: string;
}

const ROLES = ['Faculty', 'Postdoctoral Fellow', 'Graduate Student', 'Undergraduate Student', 'Alumni', 'Collaborator'];

export default function TeamEditor({ initialMembers }: { initialMembers: TeamMember[] }) {
  const [members, setMembers] = useState<TeamMember[]>(initialMembers);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<TeamMember>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleEdit = (member: TeamMember) => {
    setEditingSlug(member.slug);
    setFormData(member);
    setMessage('');
  };

  const handleCancel = () => {
    setEditingSlug(null);
    setFormData({});
    setMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/admin/team', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldSlug: editingSlug,
          member: formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to save');

      setMessage('✓ Team member updated!');
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
      <h2 className="admin-section-title">Team Members</h2>
      <p className="admin-section-subtitle">Manage faculty, students, and collaborators.</p>

      {message && <div className={`admin-message ${message.includes('✓') ? 'is-success' : 'is-error'}`}>{message}</div>}

      <div className="admin-list">
        {members.map((member) => (
          <div key={member.slug} className="admin-list-item">
            {editingSlug === member.slug ? (
              // Edit Mode
              <div className="admin-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name || ''}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role || ''}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select a role</option>
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

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
                    placeholder="e.g., Assistant Professor"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="name@tamucc.edu"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="office" className="form-label">
                      Office Location
                    </label>
                    <input
                      id="office"
                      type="text"
                      name="office"
                      value={formData.office || ''}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., CS 250"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialization" className="form-label">
                    Specialization
                  </label>
                  <input
                    id="specialization"
                    type="text"
                    name="specialization"
                    value={formData.specialization || ''}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., Nanoplasmonics, Colloid Chemistry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image" className="form-label">
                    Photo URL
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
                </div>

                <div className="form-group">
                  <label htmlFor="body" className="form-label">
                    Biography
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    value={formData.body || ''}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Enter member bio"
                    rows={6}
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
                  <h3 className="admin-list-item-title">{member.name}</h3>
                  <span className="admin-list-item-role">{member.role}</span>
                </div>
                <p className="admin-list-item-detail">{member.title}</p>
                {member.email && <p className="admin-list-item-detail">{member.email}</p>}
                <button onClick={() => handleEdit(member)} className="button button--secondary button--small">
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
