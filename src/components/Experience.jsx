const ROLES = [
  {
    period: 'Start Date — End Date',
    title: 'Job Title',
    org: 'Company Name · Location',
    desc: 'Brief description of your responsibilities, achievements, and impact in this role.',
  },
  {
    period: 'Start Date — End Date',
    title: 'Job Title',
    org: 'Company Name · Location',
    desc: 'Brief description of your responsibilities, achievements, and impact in this role.',
  },
  {
    period: 'Start Date — End Date',
    title: 'Job Title',
    org: 'Company Name · Location',
    desc: 'Brief description of your responsibilities, achievements, and impact in this role.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__head">
        <span className="section__label">02 — Experience</span>
      </div>

      <div className="experience__list">
        {ROLES.map((r, i) => (
          <article className="role" key={i}>
            <span className="role__period">{r.period}</span>
            <div className="role__main">
              <h3 className="role__title">{r.title}</h3>
              <span className="role__org">{r.org}</span>
              <p className="role__desc">{r.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}