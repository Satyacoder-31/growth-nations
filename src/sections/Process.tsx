import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    n: '01',
    title: 'Discover',
    desc: 'Understand business, audience, market, competitors, and goals.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&auto=format&fit=crop&q=80',
  },
  {
    n: '02',
    title: 'Strategize',
    desc: 'Create the acquisition, positioning, content, and conversion strategy.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80',
  },
  {
    n: '03',
    title: 'Launch',
    desc: 'Deploy campaigns, landing pages, creatives, tracking, and automation.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80',
  },
  {
    n: '04',
    title: 'Optimize',
    desc: 'Analyze performance, lower acquisition costs, and continuously improve.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80',
  },
  {
    n: '05',
    title: 'Scale',
    desc: 'Increase successful channels and build repeatable growth systems.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&auto=format&fit=crop&q=80',
  },
]

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current || !lineRef.current) return
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 1,
          },
        }
      )
      gsap.from('.process-step', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%',
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="process" ref={ref} className="py-16 lg:py-24 px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div className="text-center max-w-[680px] mx-auto mb-10 lg:mb-16">
        <p className="text-[11px] tracking-[0.2em] font-semibold text-white/40 uppercase mb-3">
          GROWTH FRAMEWORK
        </p>
        <h2 className="font-display text-[34px] md:text-[48px] leading-[0.92] tracking-tight text-white">
          Our 5-step growth <span className="italic font-normal text-white/90">methodology.</span>
        </h2>
        <p className="text-[15px] text-white/55 mt-3">
          A disciplined, transparent process that validates product-market fit, deploys conversion assets, and scales predictably.
        </p>
      </div>

      {/* Desktop timeline with images */}
      <div className="hidden lg:block relative">
        <div className="absolute top-[56px] inset-x-0 h-px bg-white/10" />
        <div ref={lineRef} className="absolute top-[56px] inset-x-0 h-px accent-gradient origin-left" />
        <div className="grid grid-cols-5 gap-5">
          {STEPS.map((s) => (
            <div key={s.n} className="process-step relative pt-[80px] group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[88px] h-[88px] rounded-2xl overflow-hidden border-2 border-[hsl(var(--bg))] shadow-xl z-10">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={88}
                  height={88}
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute top-1.5 left-1.5 w-7 h-7 rounded-full bg-white text-black grid place-items-center text-[11px] font-bold">
                  {s.n}
                </div>
              </div>
              <div className="rounded-2xl bg-[hsl(var(--surface))] border border-white/10 p-5 pt-6 text-center group-hover:border-white/15 transition-colors shadow-md">
                <h3 className="text-[16px] font-semibold text-white">{s.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/55 mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical with images */}
      <div className="lg:hidden relative">
        <div className="absolute left-[36px] top-0 bottom-0 w-px bg-white/10" />
        <div className="space-y-5">
          {STEPS.map((s) => (
            <div key={s.n} className="process-step flex gap-4 relative">
              <div className="relative shrink-0">
                <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden border-2 border-[hsl(var(--bg))] shadow-lg relative z-10">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    width={72}
                    height={72}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white text-black grid place-items-center text-[11px] font-bold border-2 border-[hsl(var(--bg))] z-20">
                  {s.n}
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-[hsl(var(--surface))] border border-white/10 p-4 shadow-sm">
                <h3 className="text-[16px] font-semibold text-white">{s.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/50 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
