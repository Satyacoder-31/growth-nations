import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useIsMobile } from '../hooks/useIsMobile'

gsap.registerPlugin(ScrollTrigger)

export function Parallax() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (reduced || isMobile) return
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      if (!section) return
      const leftCol = section.querySelector('[data-col="left"]')
      const rightCol = section.querySelector('[data-col="right"]')
      const title = section.querySelector('[data-parallax-title]')

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: title,
        pinSpacing: false,
        scrub: 1,
      })

      if (leftCol) {
        gsap.fromTo(
          leftCol,
          { y: 80 },
          {
            y: -120,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      }
      if (rightCol) {
        gsap.fromTo(
          rightCol,
          { y: -80 },
          {
            y: 120,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [reduced, isMobile])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const cards = [
    {
      title: 'Full-Funnel Telemetry',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
      span: 'Analytics',
    },
    {
      title: 'High-Converting Ad Creatives',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
      span: 'Paid Media',
    },
    {
      title: 'AI Qualification Chatbots',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80',
      span: 'AI Tech',
    },
    {
      title: 'Conversion Landing Engines',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      span: 'Conversion',
    },
    {
      title: 'Automated CRM Sync',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
      span: 'Pipelines',
    },
    {
      title: 'Lightning-Fast Architecture',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
      span: 'Next.js / Tech',
    },
  ]

  if (reduced || isMobile) {
    // Mobile CTA and visual representation
    return (
      <section className="py-16 px-5 md:px-8 max-w-[1600px] mx-auto">
        <div className="rounded-[28px] bg-[hsl(var(--surface))] border border-white/10 p-7 md:p-10 text-center relative overflow-hidden shadow-xl">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#4E85BF]/20 blur-3xl pointer-events-none" />
          <p className="text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase">
            SCALE YOUR REVENUE
          </p>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[0.95] text-white mt-3">
            Ready to turn your business into a <br />
            <span className="italic font-normal text-white/90">growth engine?</span>
          </h2>
          <p className="text-sm text-white/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Tell us what you are trying to achieve. We will help you identify the right marketing, technology, and automation opportunities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={scrollToContact}
              className="h-12 px-7 rounded-full bg-white text-black text-sm font-bold shadow-md hover:bg-white/90 transition-colors"
            >
              Start Your Growth Journey ↗
            </button>
            <a
              href="https://wa.me/?text=Hi%20Growth%20Nations%20-%20I%20want%20to%20scale%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-full border border-white/15 bg-white/[0.06] text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Talk to Growth Nations
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="relative hidden lg:block" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(78,133,191,0.12),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1600px] mx-auto w-full px-12 flex items-center justify-between gap-12">
          {/* Left col */}
          <div data-col="left" className="flex flex-col gap-6 w-[340px] shrink-0">
            {cards.slice(0, 3).map((c) => (
              <div
                key={c.title}
                className="rounded-[20px] overflow-hidden bg-[hsl(var(--surface))] border border-white/10 shadow-xl group"
              >
                <img src={c.img} alt={c.title} className="w-full h-[210px] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="p-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{c.title}</p>
                  <span className="text-[10px] tracking-widest text-white/40 uppercase">{c.span}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Center pinned conversion card */}
          <div data-parallax-title className="flex-1 text-center max-w-[620px]">
            <p className="text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase">
              ACCELERATE REVENUE
            </p>
            <h2 className="font-display text-[54px] xl:text-[62px] leading-[0.92] tracking-tight text-white mt-4">
              Ready to turn your business into a <br />
              <span className="italic font-normal text-white/90">growth engine?</span>
            </h2>
            <p className="text-base text-white/65 mt-5 max-w-[500px] mx-auto leading-relaxed">
              Tell us what you are trying to achieve. We will help you identify the right marketing, technology, and automation opportunities.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={scrollToContact}
                className="h-[52px] px-8 rounded-full bg-white text-black text-sm font-bold shadow-xl hover:bg-white/90 transition-all hover:scale-[1.02]"
              >
                Start Your Growth Journey ↗
              </button>
              <a
                href="https://wa.me/?text=Hi%20Growth%20Nations%20-%20I%20want%20to%20scale%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[52px] px-7 rounded-full border border-white/15 bg-white/[0.06] text-white text-sm font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                Talk to Growth Nations
              </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-[11px] tracking-widest text-white/40 uppercase">
              SCROLL TO EXPLORE WORKFLOW ↓
            </div>
          </div>

          {/* Right col */}
          <div data-col="right" className="flex flex-col gap-6 w-[340px] shrink-0">
            {cards.slice(3).map((c) => (
              <div
                key={c.title}
                className="rounded-[20px] overflow-hidden bg-[hsl(var(--surface))] border border-white/10 shadow-xl group"
              >
                <img src={c.img} alt={c.title} className="w-full h-[210px] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="p-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{c.title}</p>
                  <span className="text-[10px] tracking-widest text-white/40 uppercase">{c.span}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
