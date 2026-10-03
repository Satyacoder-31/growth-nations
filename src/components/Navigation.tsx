import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop pill */}
      <nav
        className={`hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center gap-1.5 px-3 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-[hsl(var(--surface))]/90 backdrop-blur-xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
            : 'bg-[hsl(var(--surface))]/80 backdrop-blur-xl border-white/10'
        }`}
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#home')
          }}
          className="flex items-center gap-2 pr-2"
          aria-label="Growth Nations home"
        >
          <div className="w-8 h-8 rounded-full accent-gradient flex items-center justify-center text-[11px] font-extrabold tracking-wider text-white shrink-0 shadow-sm">
            GN
          </div>
          <span className="font-semibold text-xs tracking-wider text-white uppercase hidden xl:inline">
            Growth Nations
          </span>
        </a>
        <div className="w-px h-5 bg-white/10 mx-1" />
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              scrollTo(item.href)
            }}
            className="px-3.5 py-2 text-[13px] font-medium tracking-wide text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#contact')
          }}
          className="ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-[13px] font-semibold tracking-wide hover:bg-white/90 transition-colors shadow-sm"
        >
          Get Started <span aria-hidden>↗</span>
        </a>
      </nav>

      {/* Mobile bar */}
      <nav
        className="lg:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 py-3 bg-[hsl(var(--bg))]/75 backdrop-blur-xl border-b border-white/[0.06]"
        style={{ paddingTop: 'max(12px, env(safe-area-inset-top))' }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#home')
          }}
          className="flex items-center gap-2.5"
          aria-label="Growth Nations home"
        >
          <div className="w-9 h-9 rounded-full accent-gradient flex items-center justify-center text-xs font-bold tracking-wider text-white">
            GN
          </div>
          <span className="font-semibold text-sm tracking-wider text-white">Growth Nations</span>
        </a>
        <button
          onClick={() => setMobileOpen(true)}
          className="h-10 px-4 rounded-full bg-[hsl(var(--surface))] border border-white/10 text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-2 backdrop-blur-xl hover:bg-white/10 transition-colors"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          style={{ minHeight: 44 }}
        >
          Menu
          <span className="w-5 h-5 rounded-full bg-white text-black grid place-items-center text-[10px]">≡</span>
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-[60] bg-[hsl(var(--bg))]/95 backdrop-blur-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div
              className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]"
              style={{ paddingTop: 'max(14px, env(safe-area-inset-top))' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full accent-gradient grid place-items-center text-xs font-bold tracking-wider text-white">
                  GN
                </div>
                <span className="font-semibold text-sm text-white tracking-wider">Growth Nations</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full bg-white text-black grid place-items-center font-bold text-sm"
                aria-label="Close menu"
                style={{ minWidth: 44, minHeight: 44 }}
              >
                ✕
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 py-8 overflow-y-auto">
              <motion.div initial="hidden" animate="visible" exit="hidden" className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: (idx: number) => ({
                        opacity: 1,
                        y: 0,
                        transition: { delay: idx * 0.05, duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                      }),
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(item.href)
                    }}
                    className="flex items-baseline justify-between py-3.5 border-b border-white/[0.06] group"
                    style={{ minHeight: 52 }}
                  >
                    <span className="font-display italic text-[32px] leading-none text-white group-active:text-white/80">
                      {item.label}
                    </span>
                    <span className="text-xs tracking-widest text-white/40 font-mono">0{i + 1}</span>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8 grid grid-cols-2 gap-3"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo('#contact')
                  }}
                  className="h-[52px] rounded-full bg-white text-black grid place-items-center text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Get Started ↗
                </a>
                <a
                  href="https://wa.me/?text=Hi%20Growth%20Nations%20-%20I%20want%20to%20scale%20my%20business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[52px] rounded-full border border-white/15 text-white grid place-items-center text-sm font-medium bg-white/[0.06] backdrop-blur hover:bg-white/10 transition-colors"
                >
                  WhatsApp ↗
                </a>
              </motion.div>

              <p className="mt-8 text-center text-[11px] tracking-[0.2em] uppercase text-white/30">
                GROWTH NATIONS — DIGITAL GROWTH &amp; TECHNOLOGY
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
