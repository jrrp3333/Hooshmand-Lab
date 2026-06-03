'use client';

import { useState } from 'react';

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

interface Publication {
  slug: string;
  title: string;
  authors?: string;
  venue?: string;
  year: number;
  category: string;
  details?: string;
  doi?: string;
}

interface PublicationsPageContentProps {
  publications: Publication[];
}

export default function PublicationsPageContent({ publications: all }: PublicationsPageContentProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Group by category
  const byCategory: Record<string, Publication[]> = {};
  for (const cat of CATEGORY_ORDER) {
    const items = all.filter((p) => p.category === cat);
    if (items.length) byCategory[cat] = items;
  }

  // Get unique years from journal papers
  const journalPapers = byCategory['Journal Paper'] || [];
  const years = Array.from(new Set(journalPapers.map((p) => p.year)))
    .sort((a, b) => b - a);

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

                    {cat === 'Journal Paper' && years.length > 0 ? (
                      (() => {
                        const byYear: Record<number, Publication[]> = {};
                        for (const p of items) {
                          (byYear[p.year] ??= []).push(p);
                        }

                        return (
                          <>
                            <div className="publication-year-selector">
                              <button
                                className={`year-button ${selectedYear === null ? 'is-active' : ''}`}
                                onClick={() => setSelectedYear(null)}
                              >
                                All Years
                              </button>
                              {years.map((year) => (
                                <button
                                  key={year}
                                  className={`year-button ${selectedYear === year ? 'is-active' : ''}`}
                                  onClick={() => setSelectedYear(year)}
                                >
                                  {year}
                                </button>
                              ))}
                            </div>

                            {(selectedYear === null ? years : [selectedYear]).map((year) => (
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
                            ))}
                          </>
                        );
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
