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
                {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <h2 className="card-title">{item.title}</h2>
              <div className="entry-summary">
                <p>{item.excerpt}</p>
              </div>
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
