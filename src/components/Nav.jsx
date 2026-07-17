import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const tl = gsap.timeline({ paused: true })
    tl.to(nav, { y: '-100%', duration: 0.4, ease: 'power2.inOut' })

    let oldScroll = 0

    function onScroll() {
      const lenis = window.__lenis
      if (!lenis) return

      const thisScroll = lenis.scroll
      if (thisScroll > oldScroll && thisScroll > 60) {
        tl.timeScale(1.2).play()
      } else if (thisScroll < oldScroll) {
        tl.timeScale(1.5).reverse()
      }
      oldScroll = thisScroll
    }

    if (window.__lenis) {
      window.__lenis.on('scroll', onScroll)
    }

    return () => {
      tl.kill()
      if (window.__lenis) window.__lenis.off('scroll', onScroll)
    }
  }, [])

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav__inner">
        <a className="nav__logo" href="#">SITE</a>
        <div className="nav__links">
          <a href="#about" data-cursor="View">About</a>
          <a href="#experience" data-cursor="View">Experience</a>
          <a href="#work" data-cursor="View">Work</a>
          <a href="#capabilities" data-cursor="View">Skills</a>
          <a href="#contact" data-cursor="View">Contact</a>
        </div>
      </div>
    </nav>
  )
}
