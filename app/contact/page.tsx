export const metadata = {
  title: "Contact | Dr. Hooshmand's Research Lab",
  description: "Get in touch with Dr. Hooshmand's research lab at Texas A&M University-Corpus Christi.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <div className="surface-card page-hero__panel">
            <span className="eyebrow">Contact</span>
            <h1>Get in Touch</h1>
          </div>
        </div>
      </section>

      <section className="content-shell">
        <div className="section-inner grid-two">
          <article className="surface-card page-hero__panel">
            <div className="entry-content">
              <h2>Contact Information</h2>

              <p>
                <strong>Lab Director:</strong> Dr. Nasrin Hooshmand
              </p>

              <p>
                <strong>Mailing Address:</strong>
                <br />
                Department of Physical and Environmental Sciences
                <br />
                Center for the Sciences, Room CS 250
                <br />
                Texas A&amp;M University–Corpus Christi
                <br />
                6300 Ocean Dr., Corpus Christi, TX 78412
                <br />
                USA
              </p>

              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:nasrin.hooshmand@tamucc.edu">nasrin.hooshmand@tamucc.edu</a>
              </p>

              <p>
                <strong>Phone:</strong> <a href="tel:+13618252862">361.825.2862</a>
              </p>

              <h2>How to Reach Us</h2>

              <p>
                We welcome inquiries from students, collaborators, funding agencies, and the general public. Please
                reach out with questions about our research, opportunities to join the lab, or collaboration ideas.
              </p>

              <p>
                <strong>Response time:</strong> We aim to respond to inquiries within 2–3 business days.
              </p>
            </div>
          </article>

          <div className="surface-card contact-card">
            <span className="card-meta">Quick Info</span>
            <h2 className="card-title">Dr. Hooshmand&apos;s Research Lab</h2>
            <p>
              <strong>Center for the Sciences, CS 250</strong>
              <br />
              Texas A&amp;M University–Corpus Christi
              <br />
              6300 Ocean Dr.
              <br />
              Corpus Christi, TX 78412
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href="mailto:nasrin.hooshmand@tamucc.edu">nasrin.hooshmand@tamucc.edu</a>
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              <a href="tel:+13618252862">361.825.2862</a>
            </p>
            <p style={{ marginTop: '18px' }}>
              <a
                href="https://www.google.com/maps/search/6300+Ocean+Dr,+Corpus+Christi,+TX+78412"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
