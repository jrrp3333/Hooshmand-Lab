export const metadata = {
  title: "Facilities | Dr. Hooshmand's Research Lab",
  description: "Laboratory facilities and instrumentation in Dr. Hooshmand's research lab at TAMUCC.",
};

const FACILITIES = [
  {
    id: 'uv-vis',
    name: 'UV-Visible Spectrophotometer',
    brand: 'PerkinElmer',
  },
  {
    id: 'ftir',
    name: 'FTIR Spectrometer',
    brand: 'Thermo Fisher Scientific',
  },
  {
    id: 'tem',
    name: 'Transmission Electron Microscope',
    brand: 'JEOL',
  },
  {
    id: 'sem',
    name: 'Scanning Electron Microscope',
    brand: 'Zeiss',
  },
  {
    id: 'dls',
    name: 'Dynamic Light Scattering',
    brand: 'Malvern',
  },
  {
    id: 'hplc',
    name: 'High-Performance Liquid Chromatography',
    brand: 'Agilent',
  },
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
                    <div className="facility-caption">
                      <h3>{facility.name}</h3>
                      <p className="facility-brand">{facility.brand}</p>
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
