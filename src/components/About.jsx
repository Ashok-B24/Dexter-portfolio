const FACTS = [
  ['Based in', 'Your Location'],
  ['Field', 'Your Field of Study / Work'],
  ['Languages', 'Language 1 · Language 2 · Language 3'],
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__head">
        <span className="section__label">01 — About</span>
      </div>

      <div className="about__grid">
        <h2 className="about__headline">
          A short, impactful headline about <em>what you do</em> and why it matters.
        </h2>

        <p className="about__body">
          A brief paragraph about your background, current focus, and what drives your work.
        </p>

        <dl className="about__facts">
          {FACTS.map(([k, v]) => (
            <div className="about__fact" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}