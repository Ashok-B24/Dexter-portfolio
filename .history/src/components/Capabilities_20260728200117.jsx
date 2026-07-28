const GROUPS = [
  {
    label: 'Category One',
    items: ['Skill', 'Skill', 'Skill', 'Skill'],
  },
  {
    label: 'Category Two',
    items: ['Skill', 'Skill', 'Skill'],
  },
  {
    label: 'Category Three',
    items: ['Skill', 'Skill', 'Skill'],
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