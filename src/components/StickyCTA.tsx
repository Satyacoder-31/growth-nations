export function StickyCTA() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Mobile fixed bottom CTA */}
      <div
        className="lg:hidden fixed left-3 right-3 z-40 flex items-center justify-between gap-3 px-4 py-3 rounded-[20px] bg-[rgba(18,18,18,0.9)] backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        style={{ bottom: 'max(12px, env(safe-area-inset-bottom))' }}
      >
        <div>
          <p className="text-[10px] tracking-[0.16em] font-semibold text-white/50 uppercase">GROWTH NATIONS</p>
          <p className="text-xs font-semibold text-white leading-tight">Ready to scale your business?</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <a
            href="https://wa.me/917567464057?text=Hi%20Growth%20Nations%20-%20I%20want%20to%20discuss%20my%20business%20growth"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-3.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/20 text-white text-xs font-semibold grid place-items-center backdrop-blur hover:bg-[#25D366]/30 transition-colors"
          >
            WhatsApp
          </a>
          <button
            onClick={scrollToContact}
            className="h-10 px-4 rounded-full bg-white text-black text-xs font-bold grid place-items-center hover:bg-white/90 transition-colors shadow-sm"
          >
            Consult ↗
          </button>
        </div>
      </div>

      {/* Desktop floating WhatsApp */}
      <a
        href="https://wa.me/917567464057?text=Hi%20Growth%20Nations%20-%20I%20want%20to%20discuss%20my%20business%20growth"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 h-12 px-6 rounded-full bg-[#25D366] text-white text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:bg-[#20bd5a] transition-all hover:scale-[1.02]"
        aria-label="Chat with Growth Nations on WhatsApp (+91 75674 64057)"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
        WhatsApp (+91 75674 64057)
      </a>
    </>
  )
}
