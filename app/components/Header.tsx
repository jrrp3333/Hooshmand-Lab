'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell-inner site-header__bar">
        <Link href="/" className="site-branding">
          <span className="site-branding__kicker">Dr. Hooshmand's Research Lab</span>
          <span className="site-branding__title">Research & Discovery</span>
          <span className="site-branding__meta">Texas A&M University-Corpus Christi</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
        >
          Menu
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/research" onClick={() => setMenuOpen(false)}>
                Research
              </Link>
            </li>
            <li>
              <Link href="/publications" onClick={() => setMenuOpen(false)}>
                Publications
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMenuOpen(false)}>
                Team
              </Link>
            </li>
            <li>
              <Link href="/news" onClick={() => setMenuOpen(false)}>
                News
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
