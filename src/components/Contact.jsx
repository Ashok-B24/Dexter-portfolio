export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__head">
        <span className="section__label">05 — Contact</span>
      </div>

      <h2 className="contact__headline">
        Let's build <em>something</em>
        <br />
        that shouldn't break →
      </h2>

      <div className="contact__rows">
        <a className="contact__row" href="mailto:ragwhooooo@gmail.com" data-cursor="Email">
          <span className="contact__key">Email</span>
          <span className="contact__val">ragwhooooo@gmail.com</span>
        </a>
        <a className="contact__row" href="tel:+918050056552" data-cursor="Call">
          <span className="contact__key">Phone</span>
          <span className="contact__val">+91 8050056552</span>
        </a>
        <div className="contact__row">
          <span className="contact__key">Location</span>
          <span className="contact__val">Bangalore, India</span>
        </div>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Ragunandan</span>
        <span>Built with React · Vite · GSAP</span>
      </footer>
    </section>
  )
}