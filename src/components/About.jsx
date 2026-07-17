const FACTS = [
  ['Based in', 'Bangalore, India'],
  ['Field', 'B.Tech CSE — IoT, Cybersecurity & Blockchain'],
  ['College', 'RajaRajeswari College of Engineering'],
  ['Languages', 'English · Hindi · Kannada · Tamil · Telugu · Japanese'],
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__head">
        <span className="section__label">01 — About</span>
      </div>

      <div className="about__grid">
        <h2 className="about__headline">
          Fullstack developer and <em>security researcher</em> building things that
          shouldn't break — and breaking things that shouldn't be built.
        </h2>

        <p className="about__body">
          Currently interning with <strong>NDI Communications (Israel)</strong>,
          mentoring under Yoram Orzach on network infrastructure vulnerability
          assessment for Indian institutions and telecom networks. Background spans
          fullstack development, IoT hardware, and offensive security.
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