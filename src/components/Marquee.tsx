import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Marquee() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !ref.current) return
    const el = ref.current.querySelector('[data-marquee-track]') as HTMLElement
    if (!el) return
    const anim = gsap.to(el, {
      xPercent: -50,
      duration: 38,
      ease: 'none',
      repeat: -1,
    })
    return () => {
      anim.kill()
    }
  }, [reduced])

  const phrases = [
    'GROW FASTER',
    'MARKET SMARTER',
    'SCALE BIGGER',
    'PERFORMANCE MARKETING',
    'HIGH-INTENT LEADS',
    'AI AUTOMATION',
  ]

  return (
    <div ref={ref} className="overflow-hidden border-y border-white/[0.06] bg-[hsl(var(--surface))]/20 py-4 lg:py-6">
      <div data-marquee-track className="flex whitespace-nowrap will-change-transform">
        {Array.from({ length: 4 }).map((_, blockIdx) => (
          <div key={blockIdx} className="flex shrink-0">
            {phrases.map((phrase, i) => (
              <span
                key={i}
                className="font-display italic text-[32px] md:text-[44px] lg:text-[56px] leading-none tracking-tight text-white/90 px-6 lg:px-8 shrink-0"
                aria-hidden={blockIdx !== 0}
              >
                {phrase} <span className="font-sans font-normal text-white/30 text-2xl lg:text-3xl ml-4">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
