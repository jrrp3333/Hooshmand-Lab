import { getPublications } from '../../lib/content';

export const metadata = {
  title: "Publications | Dr. Hooshmand's Research Lab",
  description: "Peer-reviewed publications and academic contributions from Dr. Hooshmand's research lab.",
};

const CATEGORY_ORDER = [
  'Journal Paper',
  'Invited Book Chapter',
  'Invited Talk',
  'Seminar',
  'Conference Presentation',
] as const;

const CATEGORY_HEADING: Record<string, string> = {
  'Journal Paper': 'Journal Papers',
  'Invited Book Chapter': 'Invited Book Chapters',
  'Invited Talk': 'Invited Talks',
  'Seminar': 'Seminars',
  'Conference Presentation': 'Conference Presentations',
};

export default function PublicationsPage() {
  const all = getPublications();

  // Group by category
  const byCategory: Record<string, ReturnType<typeof getPublications>> = {};
  for (const cat of CATEGORY_ORDER) {
    const items = all.filter((p) => p.category === cat);
    if (items.length) byCategory[cat] = items;
  }
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <div className="surface-card page-hero__panel">
            <span className="eyebrow">Publications</span>
            <h1>Research Publications</h1>
          </div>
        </div>
      </section>

      <section className="content-shell">
        <div className="section-inner">
          <article className="surface-card page-hero__panel">
            <div className="entry-content">
              <p>
                A complete publication record is available on{' '}
                <a
                  href="https://scholar.google.com/citations?user=nIoqSDQAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </a>
                .
              </p>

              {CATEGORY_ORDER.filter((cat) => byCategory[cat]).map((cat) => {
                const items = byCategory[cat];
                return (
                  <section key={cat}>
                    <h2>{CATEGORY_HEADING[cat]}</h2>

                    {cat === 'Journal Paper' ? (
                      (() => {
                        const byYear: Record<number, typeof items> = {};
                        for (const p of items) {
                          (byYear[p.year] ??= []).push(p);
                        }
                        return Object.keys(byYear)
                          .map(Number)
                          .sort((a, b) => b - a)
                          .map((year) => (
                            <div key={year}>
                              <h3>{year}</h3>
                              <ul>
                                {byYear[year].map((p) => (
                                  <li key={p.slug}>
                                    {p.authors && <>{p.authors}, </>}
                                    &ldquo;{p.title},&rdquo;{' '}
                                    {p.venue && <em>{p.venue}</em>}
                                    {p.details && <>, {p.details}</>}
                                    {p.doi && (
                                      <>
                                        {' '}—{' '}
                                        <a
                                          href={`https://doi.org/${p.doi}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          DOI
                                        </a>
                                      </>
                                    )}
                                    .
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ));
                      })()
                    ) : (
                      <ul>
                        {items.map((p) => (
                          <li key={p.slug}>
                            {p.authors && <>{p.authors}, </>}
                            &ldquo;{p.title},&rdquo;
                            {p.venue && <> <em>{p.venue}</em>,</>} {p.year}
                            {p.details && <> — {p.details}</>}
                            {p.doi && (
                              <>
                                {' '}—{' '}
                                <a
                                  href={`https://doi.org/${p.doi}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  DOI
                                </a>
                              </>
                            )}
                            .
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}

              {/* All content is now CMS-driven via content/publications/ */}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
