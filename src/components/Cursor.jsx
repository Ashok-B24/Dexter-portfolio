import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    const label = labelRef.current
    if (!cursor || !dot) return

    let mX = window.innerWidth / 2
    let mY = window.innerHeight / 2
    let cX = mX
    let cY = mY
    let raf = null

    function onMove(e) { mX = e.clientX; mY = e.clientY }
    function onLeave() { cursor.style.opacity = '0'; dot.style.opacity = '0' }
    function onEnter() { cursor.style.opacity = '1'; dot.style.opacity = '1' }

    function animate() {
      cX += (mX - cX) * 0.15
      cY += (mY - cY) * 0.15
      cursor.style.left = cX + 'px'
      cursor.style.top = cY + 'px'
      dot.style.left = mX + 'px'
      dot.style.top = mY + 'px'
      raf = requestAnimationFrame(animate)
    }

    function onHover(e) {
      const t = e.target.closest('[data-cursor]')
      if (t) { cursor.classList.add('cursor--active'); if (label) label.textContent = t.dataset.cursor }
    }
    function onBlur(e) {
      const t = e.target.closest('[data-cursor]')
      if (t) { cursor.classList.remove('cursor--active') }
    }

    function onScroll() {
      if (window.__lenis) {
        const s = window.__lenis.scroll
        cY = mY - s
      }
      cursor.style.opacity = '0'
      dot.style.opacity = '0'
      clearTimeout(onScroll._timer)
      onScroll._timer = setTimeout(() => {
        if (document.hasFocus()) { cursor.style.opacity = '1'; dot.style.opacity = '1' }
      }, 200)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onHover)
    document.addEventListener('mouseout', onBlur)
    if (window.__lenis) window.__lenis.on('scroll', onScroll)
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onHover)
      document.removeEventListener('mouseout', onBlur)
      if (window.__lenis) window.__lenis.off('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef}>
        <span className="cursor__label" ref={labelRef} />
      </div>
      <div className="cursor__dot" ref={dotRef} />
    </>
  )
}
