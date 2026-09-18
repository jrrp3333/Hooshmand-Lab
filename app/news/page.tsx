import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getNewsItems } from '../../lib/content';

export const metadata = {
  title: "News | Dr. Hooshmand's Research Lab",
  description: "Latest news, updates, and announcements from Dr. Hooshmand's research lab.",
};

export default function NewsPage() {
  const newsItems = getNewsItems();

  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <div className="surface-card page-hero__panel">
            <span className="eyebrow">News</span>
            <h1>Lab Updates</h1>
            <p className="section-copy">Latest announcements, milestones, and research updates.</p>
          </div>
        </div>
      </section>

      <section className="content-shell">
        <div className="section-inner cards-grid">
          {newsItems.map((item) => (
            <article key={item.slug} className="surface-card news-card">
              <span className="entry-meta">
                {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
              </span>
              <h2 className="card-title">{item.title}</h2>
              {item.body.match(/!\[[^\]]*\]\(([^)]+)\)/)?.[1] && (
                <Image
                  src={item.body.match(/!\[[^\]]*\]\(([^)]+)\)/)![1]}
                  alt={item.title}
                  width={1200}
                  height={900}
                  unoptimized
                  style={{ width: '100%', height: 'auto', borderRadius: '12px', margin: '16px 0' }}
                />
              )}
              <div className="entry-summary">
                <p>{item.excerpt}</p>
              </div>
              {item.body && (
                <details style={{ marginTop: '16px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600 }}>Read full article</summary>
                  <div className="entry-content" style={{ marginTop: '16px', overflowWrap: 'anywhere' }}>
                    <ReactMarkdown components={{
                      img: ({ src, alt }) => typeof src === 'string' ? (
                        <Image src={src} alt={alt || 'Lab news photo'} width={1200} height={900}
                          unoptimized style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                      ) : null,
                    }}>{item.body}</ReactMarkdown>
                  </div>
                </details>
              )}
            </article>
          ))}
          {newsItems.length === 0 && (
            <article className="surface-card news-card">
              <p>No news items have been posted yet.</p>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
