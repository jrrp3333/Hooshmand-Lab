import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <section>
          <p className="site-branding__kicker">Research Community</p>
          <h2 className="footer-title">Dr. Hooshmand's Research Lab</h2>
          <p>A formal academic presence for research, student mentorship, and scientific updates.</p>
        </section>

        <section>
          <h2 className="footer-title">Navigate</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/research">Research</Link>
            </li>
            <li>
              <Link href="/publications">Publications</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="footer-title">Contact</h2>
          <ul>
            <li>Center for Sciences</li>
            <li>Texas A&M University-Corpus Christi</li>
            <li>
              <a href="mailto:lab@hooshmandlab.org">lab@hooshmandlab.org</a>
            </li>
          </ul>
        </section>
      </div>
      <div className="site-footer__meta">
        <div className="site-footer__inner" style={{ display: 'block', padding: 0 }}>
          <span>&copy; {currentYear} Dr. Hooshmand's Research Lab. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
