const ROLES = [
  {
    period: 'Sep 2024 — Present',
    title: 'Security Intern',
    org: 'NDI Communications · Israel',
    desc: 'Delivering security assessments for network infrastructure across Indian institutions and telecom networks. Producing comprehensive vulnerability reports mentored by Yoram Orzach.',
  },
  {
    period: 'Jan 2025 — Present',
    title: 'Executive Director, PR',
    org: 'Rotaract District 3192',
    desc: 'Spearheading the Rotary–Rotaract brand. Leading social media and content generation across the district.',
  },
  {
    period: 'Jan 2025 — Present',
    title: 'Secretary',
    org: 'Rotaract Club of Bangalore Rajmahal Vilas',
    desc: 'Point of contact between the District Secretariat and the club Board of Directors. Coordinating avenue operations and public representation.',
  },
  {
    period: 'Jun 2022 — Jan 2023',
    title: 'Digital Marketing Strategist',
    org: 'Golden Rox Motors',
    desc: 'Revamped brand image and ran campaign creatives that lifted customer engagement on festival offers.',
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