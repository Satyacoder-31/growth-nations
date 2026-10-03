import Hls from 'hls.js'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'
const POSTER = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=80'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<Hls | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  // Decide if video should be loaded based on connection and motion preferences
  const shouldLoadVideo = !reduced && (() => {
    if (typeof window === 'undefined') return false
    // @ts-ignore
    const conn = (navigator as any).connection
    if (conn?.saveData) return false
    if (conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g') return false
    return true
  })()

  useEffect(() => {
    if (!shouldLoadVideo) return
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    let hls: Hls | null = null
    let observer: IntersectionObserver | null = null

    const initHls = () => {
      if (hlsRef.current) return
      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true, lowLatencyMode: true })
        hlsRef.current = hls
        hls.loadSource(HLS_SRC)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {})
        })
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = HLS_SRC
        video.addEventListener('loadedmetadata', () => video.play().catch(() => {}), { once: true })
      }
    }

    const cleanup = () => {
      if (hls) {
        hls.destroy()
        hls = null
        hlsRef.current = null
      }
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initHls()
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(container)

    if (container.getBoundingClientRect().top < window.innerHeight) {
      initHls()
    }

    return () => {
      observer?.disconnect()
      cleanup()
    }
  }, [shouldLoadVideo])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] lg:min-h-screen flex flex-col overflow-clip bg-black"
    >
      {/* Video & Ambient background */}
      <div className="absolute inset-0">
        {shouldLoadVideo ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            poster={POSTER}
            className="w-full h-full object-cover"
            aria-hidden
          />
        ) : (
          <img src={POSTER} alt="" className="w-full h-full object-cover" fetchPriority="high" />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg))] via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden lg:block" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#4E85BF]/15 blur-[120px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 md:px-8 lg:px-12 xl:px-16 max-w-[1600px] mx-auto w-full pt-28 lg:pt-24 pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-12 items-center flex-1">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] tracking-[0.2em] font-semibold text-white uppercase">
                GROWTH NATIONS / DIGITAL GROWTH &amp; TECH
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-4"
            >
              <h1 className="font-display text-[clamp(2.8rem,9vw,5.5rem)] lg:text-[clamp(52px,5.8vw,88px)] leading-[0.92] tracking-[-0.03em] text-white">
                <span className="block">Grow Faster.</span>
                <span className="block">Market Smarter.</span>
                <span className="block italic font-normal text-white/90">Scale Bigger.</span>
              </h1>
              <p className="text-[15px] lg:text-[18px] leading-relaxed text-white/80 max-w-[580px] font-normal">
                Growth Nations helps ambitious businesses grow through performance marketing, lead generation, technology, automation, and conversion-focused digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('contact')
                }}
                className="inline-flex items-center gap-2 h-[50px] lg:h-[54px] px-8 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-white/90 transition-colors shadow-lg"
                style={{ minHeight: 48 }}
                data-cursor="START"
              >
                Get a Free Growth Consultation <span aria-hidden>↗</span>
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('services')
                }}
                className="inline-flex items-center gap-2 h-[50px] lg:h-[54px] px-7 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-sm font-medium hover:bg-white/15 transition-colors"
                style={{ minHeight: 48 }}
                data-cursor="EXPLORE"
              >
                Explore Our Services
              </a>
              <a
                href="https://wa.me/917567464057?text=Hi%20Growth%20Nations%20-%20I%20want%20to%20discuss%20my%20business%20growth"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 h-[50px] lg:h-[54px] px-6 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bd5a] transition-colors shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                WhatsApp (+91 75674 64057)
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 mt-6 lg:mt-4"
            >
              {[
                { value: 'Multi-Channel', label: 'Meta, Google & Ads' },
                { value: 'High-Intent', label: 'Lead Generation' },
                { value: 'Scalable', label: 'Web & AI Tech Stack' },
                { value: 'Data-Driven', label: 'Growth Strategies' },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <p className="font-display text-[22px] lg:text-[26px] leading-none text-white tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-[11px] tracking-[0.14em] font-medium text-white/50 uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Growth Engine Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="lg:justify-self-end w-full lg:max-w-[440px]"
          >
            <div className="relative rounded-[28px] lg:rounded-[32px] bg-[rgba(16,16,16,0.75)] backdrop-blur-2xl border border-white/15 p-6 lg:p-8 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* Glow accents */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-[#89AACC]/25 to-[#4E85BF]/25 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#4E85BF]/15 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">
                  GROWTH ENGINE ARCHITECTURE
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold tracking-wider uppercase">
                  Active
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-[32px] lg:text-[38px] leading-tight text-white tracking-tight">
                  Full-Funnel <span className="italic font-normal text-white/80">Acquisition.</span>
                </h3>
                <p className="text-xs text-white/60 mt-1.5 leading-relaxed">
                  Combining paid media, conversion-focused websites, and automated lead nurturing to turn attention into revenue.
                </p>
              </div>

              <div className="my-5 h-px bg-white/10" />

              {/* Pillars */}
              <div className="space-y-3.5">
                {[
                  {
                    title: 'Precision Performance Marketing',
                    desc: 'Meta, Google, and YouTube ads targeting high-converting audiences.',
                  },
                  {
                    title: 'Conversion-Engineered Platforms',
                    desc: 'Lightning-fast landing pages and platforms built for customer acquisition.',
                  },
                  {
                    title: 'AI Automation & CRM Pipelines',
                    desc: 'Intelligent chatbot qualification, instant WhatsApp routing, and workflow sync.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-white/80">
                    <div className="w-5 h-5 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white shrink-0 mt-0.5 text-[11px]">
                      ✓
                    </div>
                    <div>
                      <p className="font-semibold text-white text-[13px]">{item.title}</p>
                      <p className="text-white/50 text-[12px] leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('contact')
                }}
                className="mt-6 w-full h-[50px] rounded-full bg-white text-black grid place-items-center text-sm font-bold hover:bg-white/90 transition-colors shadow-md"
              >
                Schedule Strategy Call →
              </a>
              <p className="text-center text-[11px] text-white/40 mt-3 font-medium">
                Tailored growth blueprint • Dedicated marketing &amp; tech partner
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[hsl(var(--bg))] to-transparent pointer-events-none" />
    </section>
  )
}
