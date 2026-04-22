import { getResearchPosts } from '../../lib/content';
import Image from 'next/image';

export const metadata = {
  title: "Research | Dr. Hooshmand's Research Lab",
  description: "Research projects and focus areas of Dr. Hooshmand's research lab.",
};

export default function ResearchPage() {
  const projects = getResearchPosts();

  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <div className="surface-card page-hero__panel">
            <span className="eyebrow">Research</span>
            <h1>Active Research Projects</h1>
          </div>
        </div>
      </section>

      <section className="content-shell">
        <div className="section-inner">
          {projects.map((project) => (
            <article key={project.slug} className="surface-card page-hero__panel" style={{ marginBottom: '24px' }}>
              <div className="entry-content">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={280}
                    className="research-image"
                  />
                )}
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.body && <div style={{ marginTop: '12px', color: 'var(--color-muted)' }}>{project.body}</div>}
              </div>
            </article>
          ))}

          {projects.length === 0 && (
            <article className="surface-card page-hero__panel">
              <div className="entry-content">
                <p>No research projects have been added yet.</p>
              </div>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
