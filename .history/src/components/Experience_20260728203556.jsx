const ROLES = [
  {
    period: '2024 — PRESENT',
    title: 'Software Engineering Intern',
    org: 'Independent Projects & Freelance Work',
    desc: 'Building polished web experiences with React, Vite, and modern frontend tooling while focusing on thoughtful interaction design and performance.',
  },
  {
    period: '2023 — 2024',
    title: 'Student Developer',
    org: 'KSSEM',
    desc: 'Worked on campus-focused web solutions, strengthened problem-solving skills through DSA practice, and explored full-stack concepts through hands-on projects.',
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