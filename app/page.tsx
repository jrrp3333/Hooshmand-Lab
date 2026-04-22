import Link from 'next/link';
import { getResearchPosts, getNewsItems } from '../lib/content';

export default function Home() {
  const researchProjects = getResearchPosts().slice(0, 3);
  const newsItems = getNewsItems().slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="section-inner hero__grid">
          <div className="hero__panel">
            <span className="eyebrow">Nanoplasmonics Research Lab · TAMUCC</span>
            <h1>Engineering light and matter at the nanoscale for sensing, energy, and cancer therapeutics.</h1>
            <p>
              Dr. Hooshmand&apos;s research lab at Texas A&amp;M University–Corpus Christi advances colloid chemistry
              and nanoplasmonics — developing gold and silver nanoparticle assemblies for ultrasensitive biosensing,
              photothermal cancer therapy, and next-generation solar energy harvesting.
            </p>
            <div className="hero__actions">
              <Link href="/research" className="button button--primary">
                Explore Research
              </Link>
              <Link href="/news" className="button button--secondary">
                View News
              </Link>
            </div>
          </div>

          <div className="hero__aside">
            <article className="surface-card metric-card">
              <h2>Research at a glance</h2>
              <p>Active projects spanning nanoparticle assembly, cancer nanomedicine, and catalytic reaction monitoring.</p>
              <div className="stats-row">
                <div className="stat">
                  <strong>3</strong>
                  <span>research areas</span>
                </div>
                <div className="stat">
                  <strong>8+</strong>
                  <span>lab members</span>
                </div>
                <div className="stat">
                  <strong>40+</strong>
                  <span>publications</span>
                </div>
              </div>
            </article>

            <article className="surface-card contact-card">
              <span className="card-meta">Institutional Context</span>
              <h2 className="card-title">Texas A&amp;M University–Corpus Christi</h2>
              <p>
                Located in Corpus Christi, Texas. Our lab is part of the Department of Physical and Environmental
                Sciences in the Center for Sciences, CS 250.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <div className="section-kicker">Research Focus</div>
              <h2 className="section-title">Active Research Projects</h2>
            </div>
            <p className="section-copy">
              Explore the lab's current initiatives and research directions.
            </p>
          </div>

          <div className="cards-grid">
            {researchProjects.map((project) => (
              <article key={project.slug} className="surface-card research-card">
                <span className="card-meta">Research Project</span>
                <h3 className="card-title">
                  <Link href="/research">{project.title}</Link>
                </h3>
                <p className="entry-summary">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner grid-two">
          <div>
            <div className="section-kicker">Latest News</div>
            <h2 className="section-title">Recent Updates</h2>
            <p className="section-copy">
              Stay informed about lab milestones, publications, and announcements.
            </p>
          </div>

          <div className="cards-grid">
            {newsItems.map((item) => (
              <article key={item.slug} className="surface-card news-card">
                <span className="entry-meta">{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <h3 className="card-title">
                  <Link href="/news">{item.title}</Link>
                </h3>
                <p className="entry-summary">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner grid-two">
          <article className="surface-card team-card">
            <span className="card-meta">Team Visibility</span>
            <h2 className="card-title">Meet Our Team</h2>
            <p>Faculty, students, and collaborators working together on groundbreaking research.</p>
            <Link href="/team" className="button button--secondary" style={{ marginTop: '18px' }}>
              View Team
            </Link>
          </article>

          <article className="surface-card publication-card">
            <span className="card-meta">Publication Credibility</span>
            <h2 className="card-title">Publications</h2>
            <p>A curated collection of peer-reviewed research, datasets, and academic contributions.</p>
            <Link href="/publications" className="button button--secondary" style={{ marginTop: '18px' }}>
              View Publications
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
