const FACTS = [
  ['Based in', 'Bengaluru, India'],
  ['Field', 'Computer Science & Business Systems'],
  ['Role', 'Software Engineering'],
  ['Languages', 'English · Kannada · Telugu · Hindi · Tamil'],
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__head">
        <span className="section__label">01 — About</span>
      </div>

      <div className="about__grid">
        <h2 className="about__headline">
          Final-year <em>Computer Science and Business Systems</em> student
          passionate about building scalable software solutions and solving
          real-world problems through technology.
        </h2>

        <p className="about__body">
          I am a dedicated and detail-oriented final-year Computer Science and
          Business Systems student with a strong foundation in programming,
          problem-solving, and software development. I am proficient in C and
          Java for Data Structures and Algorithms (DSA), Java for
          Object-Oriented Programming (OOP), and Python for general-purpose
          programming. My experience includes web development using HTML, CSS,
          Flask, React, and MySQL for backend integration and database
          management. I have solved 80+ DSA problems on LeetCode, HackerRank,
          and the TAI platform, showcasing strong algorithmic thinking and
          coding proficiency.
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