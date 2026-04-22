import type { Metadata, Viewport } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';

export const metadata: Metadata = {
  title: "Dr. Hooshmand's Research Lab | Texas A&M University-Corpus Christi",
  description: "Dr. Hooshmand's research lab at Texas A&M University-Corpus Christi. Research in nanoplasmonics, nanoparticle assemblies, cancer therapeutics, and biosensing.",
  keywords: 'nanoplasmonics, nanoparticles, plasmonics, cancer therapy, biosensing, TAMUCC, research lab',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* Netlify Identity widget – required for the /admin CMS login */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </head>
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
