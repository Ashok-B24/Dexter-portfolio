const GROUPS = [
  {
    label: 'Security',
    items: ['Wireshark', 'Nmap', 'Kali Linux', 'Metasploit', 'OWASP', 'Penetration Testing'],
  },
  {
    label: 'Development',
    items: ['Python', 'C++', 'IoT Applications', 'Web Designing'],
  },
  {
    label: 'Design & Strategy',
    items: ['Figma', 'Canva', 'Digital Marketing'],
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