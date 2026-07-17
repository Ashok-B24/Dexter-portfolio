const PROJECTS = [
  {
    title: 'Network Vulnerability Reports',
    cat: 'Cybersecurity',
    desc: 'Comprehensive vulnerability assessments delivered for institutional network infrastructure and telecom deployments across India.',
  },
  {
    title: 'Subclinical Mastitis IoT Detector',
    cat: 'IoT · Hardware',
    desc: 'An IoT model detecting the early onset of subclinical mastitis among cattle — bridging hardware sensing and veterinary diagnostics.',
  },
  {
    title: 'Sleep Apnea Diagnostic Device',
    cat: 'Medical IoT',
    desc: 'A diagnostic device developed in collaboration with Rajarajeswari Medical College for sleep apnea detection.',
  },
  {
    title: 'Android ROM Security Review',
    cat: 'Mobile Security',
    desc: 'Reviewed multiple Android ROMs, unlocked bootloaders, and tested security vulnerabilities across recent update patches.',
  },
]

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="section__head">
        <span className="section__label">03 — Selected Work</span>
      </div>

      <div className="work__list">
        {PROJECTS.map((p, i) => (
          <article className="project" key={i} data-cursor="View">
            <span className="project__index">{String(i + 1).padStart(2, '0')}</span>
            <div className="project__body">
              <h3 className="project__title">{p.title}</h3>
              <span className="project__cat">{p.cat}</span>
            </div>
            <p className="project__desc">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}