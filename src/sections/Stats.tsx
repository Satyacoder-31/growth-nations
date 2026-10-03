import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nums = ref.current?.querySelectorAll('[data-count]')
      nums?.forEach((el) => {
        const target = parseInt(el.getAttribute('data-count') || '0', 10)
        const suffix = el.getAttribute('data-suffix') || '+'
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix
          },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const stats = [
    {
      count: 250,
      suffix: '+',
      label: 'Campaigns Managed',
      sub: 'Meta, Google & Multi-channel',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80',
    },
    {
      count: 50,
      suffix: 'K+',
      label: 'Qualified Leads',
      sub: 'High-intent B2B & B2C',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80',
    },
    {
      count: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      sub: 'Performance-first focus',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80',
    },
    {
      count: 15,
      suffix: '+',
      label: 'Industries Scaled',
      sub: 'E-com, Real Estate, B2B & Tech',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop&q=80',
    },
  ]

  return (
    <section
      ref={ref}
      className="py-12 lg:py-16 border-y border-white/[0.06] bg-[hsl(var(--surface))]/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative max-w-[1600px] mx-auto px-5 md:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group relative rounded-[20px] overflow-hidden bg-[hsl(var(--surface))] border border-white/10 hover:border-white/20 transition-all shadow-md"
          >
            <div className="relative h-[116px] overflow-hidden">
              <img
                src={s.image}
                alt={s.label}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                width={400}
                height={116}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--surface))] via-black/40 to-transparent" />
              <div className="absolute bottom-2 left-4 right-4">
                <p
                  data-count={s.count}
                  data-suffix={s.suffix}
                  className="font-display text-[32px] lg:text-[36px] leading-none tracking-tight text-white"
                >
                  0{s.suffix}
                </p>
              </div>
            </div>
            <div className="p-4 text-left">
              <p className="text-sm font-semibold tracking-tight text-white">{s.label}</p>
              <p className="text-xs text-white/50 mt-1">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
