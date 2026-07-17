import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)), smoothWheel: true })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)

    window.__lenis = lenis

    return () => { lenis.destroy(); delete window.__lenis }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Capabilities />
        <Contact />
      </main>
      <Cursor />
    </>
  )
}