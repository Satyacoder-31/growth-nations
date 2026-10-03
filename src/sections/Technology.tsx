export function Technology() {
  const techs = [
    { name: 'Google Ads', icon: 'G', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=80' },
    { name: 'Meta Ads', icon: 'M', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80' },
    { name: 'YouTube Ads', icon: 'YT', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&auto=format&fit=crop&q=80' },
    { name: 'Google Analytics 4', icon: 'GA', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&auto=format&fit=crop&q=80' },
    { name: 'Shopify', icon: 'S', image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=200&auto=format&fit=crop&q=80' },
    { name: 'WordPress', icon: 'W', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&auto=format&fit=crop&q=80' },
    { name: 'React', icon: '⚛', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&auto=format&fit=crop&q=80' },
    { name: 'Next.js', icon: '▲', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&auto=format&fit=crop&q=80' },
    { name: 'Supabase', icon: '◧', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=200&auto=format&fit=crop&q=80' },
    { name: 'AI & LLM Tools', icon: 'AI', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&auto=format&fit=crop&q=80' },
    { name: 'CRM Platforms', icon: 'CRM', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&auto=format&fit=crop&q=80' },
    { name: 'Automation Workflows', icon: '⚡', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&auto=format&fit=crop&q=80' },
  ]

  return (
    <section className="py-16 lg:py-24 border-y border-white/[0.06] overflow-hidden relative bg-[hsl(var(--surface))]/30">
      {/* Subtle ambient texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-5 md:px-8 lg:px-12 mb-10 text-center">
        <p className="text-[11px] tracking-[0.2em] font-semibold text-white/40 uppercase mb-3">
          TECH &amp; PLATFORM STACK
        </p>
        <h2 className="font-display text-[32px] md:text-[44px] leading-[0.92] text-white">
          Our modern <span className="italic font-normal text-white/90">growth ecosystem.</span>
        </h2>
        <p className="text-sm md:text-base text-white/60 mt-3 max-w-xl mx-auto">
          We combine premier advertising networks, intelligent AI automation, and high-performance web engineering.
        </p>
      </div>

      {/* Tech Grid */}
      <div className="relative px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
          {techs.map((t) => (
            <div
              key={t.name}
              className="group rounded-2xl bg-[hsl(var(--surface))] border border-white/10 overflow-hidden hover:border-white/20 transition-all shadow-md"
            >
              <div className="h-[84px] relative overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  width={200}
                  height={84}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--surface))] to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur border border-white/15 grid place-items-center text-[10px] font-bold text-white shadow-sm">
                    {t.icon}
                  </span>
                </div>
              </div>
              <p className="text-center text-[11px] font-semibold tracking-wide text-white/80 py-2.5 px-1 truncate">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Smooth Marquee Strip */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-[marquee_35s_linear_infinite] shrink-0">
          {[...techs, ...techs].map((t, i) => (
            <span
              key={`${t.name}-${i}`}
              className="mx-2 px-4 py-2 rounded-full bg-[hsl(var(--surface))] border border-white/10 text-xs font-medium text-white/70 whitespace-nowrap flex items-center gap-2"
            >
              <span className="w-5 h-5 rounded-full bg-white/10 grid place-items-center text-[10px]">
                {t.icon}
              </span>
              {t.name}
            </span>
          ))}
        </div>
        <div aria-hidden className="flex animate-[marquee_35s_linear_infinite] shrink-0">
          {[...techs, ...techs].map((t, i) => (
            <span
              key={`${t.name}-dup-${i}`}
              className="mx-2 px-4 py-2 rounded-full bg-[hsl(var(--surface))] border border-white/10 text-xs font-medium text-white/70 whitespace-nowrap flex items-center gap-2"
            >
              <span className="w-5 h-5 rounded-full bg-white/10 grid place-items-center text-[10px]">
                {t.icon}
              </span>
              {t.name}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } } @media (prefers-reduced-motion: reduce) { .animate-\\[marquee_35s_linear_infinite\\] { animation: none !important } }`}</style>
    </section>
  )
}
