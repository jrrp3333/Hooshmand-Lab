import Image from 'next/image';

export const metadata = {
  title: "Facilities | Dr. Hooshmand's Research Lab",
  description: "Laboratory facilities and instrumentation in Dr. Hooshmand's research lab at TAMUCC.",
};

const FACILITIES = [
  { id: '3d-printer', name: '3D Printer', image: '/images/uploads/3d-printer-1024x768.jpg', width: 1024, height: 768 },
  { id: 'inverted-microscope', name: 'Inverted Microscope', image: '/images/uploads/inverted-microscope-ix70-768x1024.jpg', width: 768, height: 1024 },
  { id: 'nanosight', name: 'NanoSight Pro', image: '/images/uploads/nano-insight-1024x768.jpg', width: 1024, height: 768 },
  { id: 'raman', name: 'Raman Spectroscopy', image: '/images/uploads/raman-spectroscopy-1024x768.jpg', width: 1024, height: 768 },
  { id: 'uv-vis', name: 'UV-Visible', image: '/images/uploads/uv-visible-1024x768.jpg', width: 1024, height: 768 },
];

export default function FacilitiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <div className="surface-card page-hero__panel">
            <span className="eyebrow">Facilities</span>
            <h1>Laboratory Equipment</h1>
          </div>
        </div>
      </section>

      <section className="content-shell">
        <div className="section-inner">
          <article className="surface-card page-hero__panel">
            <div className="entry-content">
              <p>
                Dr. Hooshmand&apos;s research lab is equipped with state-of-the-art instrumentation for nanoscale synthesis,
                characterization, and analysis. Our facilities support cutting-edge research in nanoplasmonics, colloid
                chemistry, and biomedical applications.
              </p>

              <div className="facilities-grid">
                {FACILITIES.map((facility) => (
                  <div key={facility.id} className="facility-box">
                    <Image src={facility.image} alt={facility.name}
                      width={facility.width} height={facility.height}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ width: '100%', height: '260px', objectFit: 'contain', background: '#f7f8fa' }} />
                    <div className="facility-caption">
                      <h3>{facility.name}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: '32px' }}>Access and Inquiries</h2>
              <p>
                For inquiries about facility access, collaborative research opportunities, or instrument training, please contact
                Dr. Hooshmand at <a href="mailto:nasrin.hooshmand@tamucc.edu">nasrin.hooshmand@tamucc.edu</a>.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
