const PROJECTS = [
  {
    title: 'KSSEM Service Portal',
    cat: 'Web App',
    desc: 'A campus service management system that simplifies the process of submitting, managing, and tracking service requests within KSSEM. It provides students, faculty, and staff with a user-friendly interface to raise requests, monitor their status, and receive timely updates.',
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
            <span className="project__index">
              {String(i + 1).padStart(2, '0')}
            </span>

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