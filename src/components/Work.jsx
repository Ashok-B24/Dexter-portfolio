const PROJECTS = [
  {
    title: 'Project Name',
    cat: 'Category',
    desc: 'A short description of the project, what it does, and the problem it solves.',
  },
  {
    title: 'Project Name',
    cat: 'Category',
    desc: 'A short description of the project, what it does, and the problem it solves.',
  },
  {
    title: 'Project Name',
    cat: 'Category',
    desc: 'A short description of the project, what it does, and the problem it solves.',
  },
  {
    title: 'Project Name',
    cat: 'Category',
    desc: 'A short description of the project, what it does, and the problem it solves.',
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