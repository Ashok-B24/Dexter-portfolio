const GROUPS = [
  {
    label: 'Programming Languages',
    items: [
      'Python',
      'Java',
      'C++',
      'JavaScript',
    ],
  },
  {
    label: 'Web Development',
    items: [
      'React',
      'Node.js',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
  },
  {
    label: 'Core CS Concepts',
    items: [
      'Data Structures and Algorithms (C/Java)',
      'Object-Oriented Programming (Java)',
    ],
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities">
      <div className="section__head">
        <span className="section__label">04 — Capabilities</span>
      </div>

      <div className="capabilities__grid">
        {GROUPS.map((g) => (
          <div className="cap-group" key={g.label}>
            <h3 className="cap-group__label">{g.label}</h3>

            <ul className="cap-group__items">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}