import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const WORDS = ['Market', 'Automate', 'Scale']

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const rafRef = useRef<number>(null)

  useEffect(() => {
    const duration = 2400
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(100, Math.floor((elapsed / duration) * 100))
      setProgress(p)
      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 500)
        }, 300)
      }
    }
    rafRef.current = requestAnimationFrame(tick)

    const wordInterval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, 800)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      clearInterval(wordInterval)
    }
  }, [onComplete])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[9999] bg-[hsl(var(--bg))] flex flex-col overflow-hidden"
    >
      <div className="flex-1 flex flex-col justify-between p-6 md:p-10 lg:p-12">
        {/* Top */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full accent-gradient flex items-center justify-center text-[10px] font-extrabold tracking-wider text-white">
              GN
            </div>
            <p className="text-[11px] md:text-xs tracking-[0.2em] font-semibold text-white/90">GROWTH NATIONS</p>
          </div>
          <p className="hidden md:block text-[11px] tracking-[0.2em] font-medium text-white/40">
            DIGITAL GROWTH &amp; TECHNOLOGY
          </p>
        </div>

        {/* Center */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.25em] text-white/40 mb-6 md:mb-8 font-medium">
              GROW FASTER • MARKET SMARTER
            </p>
            <div className="relative h-[60px] md:h-[88px] lg:h-[110px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={wordIndex}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  className="font-display italic text-[56px] md:text-[80px] lg:text-[110px] leading-none text-white tracking-tight"
                >
                  {WORDS[wordIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="mt-4 text-sm md:text-base text-white/50 font-light max-w-md mx-auto">
              Performance marketing, lead generation, and scalable technology systems.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] tracking-[0.25em] text-white/30 font-medium">PREPARING GROWTH ENGINE</p>
            <p className="text-sm text-white/60 hidden md:block">
              Full-funnel digital strategy &amp; automated infrastructure
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-[64px] md:text-[96px] lg:text-[120px] leading-none tracking-tighter text-white tabular-nums">
              {String(progress).padStart(3, '0')}
            </p>
            <p className="text-[10px] tracking-[0.2em] text-white/30 -mt-1 text-right">PERCENT</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] w-full bg-white/[0.06]">
        <motion.div
          className="h-full accent-gradient"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'linear', duration: 0.1 }}
        />
      </div>
    </motion.div>
  )
}
