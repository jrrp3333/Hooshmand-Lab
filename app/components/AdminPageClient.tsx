'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminAuthGate from './AdminAuthGate';
import ResearchEditor from './admin/ResearchEditor';
import TeamEditor from './admin/TeamEditor';
import NewsEditor from './admin/NewsEditor';
import PublicationsEditor from './admin/PublicationsEditor';

type Tab = 'research' | 'team' | 'news' | 'publications';

interface AdminPageClientProps {
  research: any[];
  team: any[];
  news: any[];
  publications: any[];
}

export default function AdminPageClient({ research, team, news, publications }: AdminPageClientProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('research');

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <AdminAuthGate onAuthSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <section className="admin-hero">
        <div className="section-inner">
          <div className="admin-hero__panel">
            <span className="eyebrow">Admin Panel</span>
            <h1>Manage Lab Content</h1>
            <p className="section-copy">Update research projects, team members, news, and publications without touching code.</p>
          </div>
        </div>
      </section>

      <section className="admin-section">
        <div className="section-inner">
          <div className="admin-container">
            {/* Sidebar Navigation */}
            <aside className="admin-sidebar">
              <nav className="admin-nav">
                <button
                  className={`admin-nav__item ${activeTab === 'research' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('research')}
                >
                  Research Projects
                </button>
                <button
                  className={`admin-nav__item ${activeTab === 'team' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('team')}
                >
                  Team Members
                </button>
                <button
                  className={`admin-nav__item ${activeTab === 'news' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('news')}
                >
                  News & Updates
                </button>
                <button
                  className={`admin-nav__item ${activeTab === 'publications' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('publications')}
                >
                  Publications
                </button>
              </nav>

              <div className="admin-sidebar__footer">
                <Link href="/" className="admin-link">
                  ← Back to Site
                </Link>
                <button
                  className="admin-link admin-link--logout"
                  onClick={() => {
                    localStorage.removeItem('admin_auth');
                    setIsAuthenticated(false);
                  }}
                >
                  Log Out
                </button>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="admin-content">
              {activeTab === 'research' && <ResearchEditor initialProjects={research} />}
              {activeTab === 'team' && <TeamEditor initialMembers={team} />}
              {activeTab === 'news' && <NewsEditor initialItems={news} />}
              {activeTab === 'publications' && <PublicationsEditor initialPublications={publications} />}
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
