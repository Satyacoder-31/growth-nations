import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    if (!media.matches) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement
      const view = target.closest('[data-cursor]')
      if (view) {
        setIsHover(true)
        setLabel(view.getAttribute('data-cursor') || '')
      }
    }
    const onLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor]')) {
        setIsHover(false)
        setLabel('')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [visible])

  return (
    <>
      <div
        ref={dotRef}
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-white pointer-events-none z-[9998] mix-blend-difference"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[9998] -ml-6 -mt-6 transition-[width,height,background,border] duration-200"
        style={{
          width: isHover ? 72 : 36,
          height: isHover ? 72 : 36,
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.25)',
          background: isHover ? 'rgba(255,255,255,0.08)' : 'transparent',
          backdropFilter: isHover ? 'blur(8px)' : 'none',
          opacity: visible ? 1 : 0,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {label && (
          <span className="text-[10px] tracking-[0.15em] font-semibold text-white">{label}</span>
        )}
      </div>
    </>
  )
}
