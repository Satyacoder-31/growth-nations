const ARTICLES = [
  {
    title: 'Why Modern Marketing Campaigns Fail Without Conversion Infrastructure',
    date: 'Sep 12, 2026',
    mins: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    author: 'Growth Strategy',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    tag: 'PERFORMANCE',
  },
  {
    title: 'B2B Lead Generation in 2026: From Cold Traffic to High-Intent SQLs',
    date: 'Sep 04, 2026',
    mins: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    author: 'Lead Gen Lab',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    tag: 'ACQUISITION',
  },
  {
    title: 'How AI Automation Is Slashing Customer Acquisition Costs Across Industries',
    date: 'Aug 26, 2026',
    mins: '4 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80',
    author: 'AI Operations',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    tag: 'AUTOMATION',
  },
  {
    title: 'The Full-Funnel Framework for Scaling MSMEs and Local Businesses',
    date: 'Aug 18, 2026',
    mins: '7 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    author: 'Growth Nations',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    tag: 'STRATEGY',
  },
]

export function Journal() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 lg:py-24 px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <p className="text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase mb-2">
            THOUGHT LEADERSHIP &amp; INSIGHTS
          </p>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[0.92] tracking-tight text-white">
            Ideas behind <span className="italic font-normal text-white/90">the performance.</span>
          </h2>
        </div>
        <button
          onClick={scrollToContact}
          className="hidden md:inline-flex text-xs tracking-widest font-semibold text-white/50 hover:text-white uppercase transition-colors"
        >
          Discuss Your Strategy →
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {ARTICLES.map((a) => (
          <article
            key={a.title}
            className="group rounded-[20px] overflow-hidden bg-[hsl(var(--surface))] border border-white/10 hover:border-white/20 transition-all flex flex-col shadow-md"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                width={600}
                height={375}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur border border-white/15 text-[10px] tracking-wider font-semibold text-white uppercase">
                {a.tag}
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] tracking-wide text-white/40">
                  <span>{a.date}</span>
                  <span>•</span>
                  <span>{a.mins}</span>
                </div>
                <h3 className="text-[15px] font-semibold leading-snug text-white mt-2 group-hover:text-white/90 line-clamp-2">
                  {a.title}
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-2.5 border-t border-white/10 pt-4">
                <img
                  src={a.avatar}
                  alt={a.author}
                  loading="lazy"
                  className="w-6 h-6 rounded-full object-cover border border-white/15"
                  width={24}
                  height={24}
                />
                <span className="text-xs font-medium text-white/70">{a.author}</span>
                <span className="ml-auto text-xs font-medium text-white/40 group-hover:text-white flex items-center gap-1">
                  Read ↗
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial banner */}
      <div className="mt-8 rounded-[20px] overflow-hidden border border-white/10 relative h-[200px] lg:h-[240px] group hidden lg:block shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80"
          alt="Growth Strategy"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
          loading="lazy"
          width={1200}
          height={240}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 p-8 flex flex-col justify-center max-w-[620px]">
          <p className="text-[11px] tracking-[0.2em] font-semibold text-white/60 uppercase">
            GROWTH NATIONS PLAYBOOK
          </p>
          <p className="font-display text-[30px] leading-tight text-white mt-2">
            Data that drives. Systems that scale.
          </p>
          <p className="text-sm text-white/65 mt-2">
            We share tested frameworks, attribution blueprints, and real operational playbooks to help ambitious companies thrive.
          </p>
        </div>
      </div>
    </section>
  )
}
