import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const TRACKS = [
  { dir: 'left',  speed: 8,  text: 'FULLSTACK ENGINEER' },
  { dir: 'right', speed: 10, text: 'RAGHUNANDAN' },
  { dir: 'left',  speed: 6,  text: 'ENTREPRENEUR' },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    let ctx

    function start() {
      const inners = hero.querySelectorAll('.hero__track-inner')
      if (inners.length === 0) { setTimeout(start, 200); return }

      ctx = gsap.context(() => {
        inners.forEach(inner => {
          const spans = inner.querySelectorAll('span')
          if (spans.length < 2) return

          const w = spans[0].offsetWidth
          if (w === 0) return

          const right = inner.classList.contains('hero__track-inner--right')
          const s = parseFloat(inner.getAttribute('data-speed')) || 8

          gsap.fromTo(inner, { x: right ? -w : 0 }, { x: right ? 0 : -w, duration: s, ease: 'none', repeat: -1 })
        })
      }, hero)
    }

    const race = []
    if (document.fonts && document.fonts.ready) race.push(document.fonts.ready)
    race.push(new Promise(r => setTimeout(r, 1500)))
    Promise.race(race).then(start)

    return () => { if (ctx) ctx.revert() }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__marquee">
        {TRACKS.map((track, i) => (
          <div className="hero__track" key={i}>
            <div
              className={`hero__track-inner hero__track-inner--${track.dir}`}
              data-speed={track.speed}
            >
              {[0, 1, 2, 3].map(n => <span key={n}>{track.text}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="hero__portrait">
        <img src={`${import.meta.env.BASE_URL}photo.png`} alt="Raghu" />
      </div>

      <a className="hero__resume" href="#">Resume ↗</a>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
