import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'

type CaseStudy = {
  id: string
  title: string
  label: 'Featured Work' | 'Selected Project' | 'Sample Strategy' | 'Concept Case Study'
  industry: string
  category: 'All' | 'Digital Marketing' | 'Lead Generation' | 'Web & Tech' | 'E-Commerce'
  problem: string
  solution: string
  serviceUsed: string
  tags: string[]
  image: string
  filter: string[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'real-estate-lead-gen',
    title: 'Luxury Property Acquisition Engine',
    label: 'Featured Work',
    industry: 'Real Estate',
    category: 'Lead Generation',
    problem: 'High cost per lead and unqualified inquiries from generic search ads.',
    solution: 'Designed high-intent geo-targeted Meta & Google ad funnels with automated pre-qualification forms.',
    serviceUsed: 'Lead Generation & Meta Ads',
    tags: ['Meta Ads', 'Lead Qualification', 'WhatsApp CRM', 'Geo-Targeting'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80',
    filter: ['Lead Generation', 'Digital Marketing'],
  },
  {
    id: 'ecommerce-scale',
    title: 'Direct-to-Consumer Apparel Scale',
    label: 'Selected Project',
    industry: 'E-Commerce',
    category: 'E-Commerce',
    problem: 'Struggling with cart abandonment and high customer acquisition costs.',
    solution: 'Engineered high-converting Shopify store with dynamic retargeting and UGC Reels campaigns.',
    serviceUsed: 'Performance Marketing & E-Com',
    tags: ['Shopify', 'ROAS Optimization', 'Creative Reels', 'Email Flows'],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80',
    filter: ['E-Commerce', 'Digital Marketing'],
  },
  {
    id: 'b2b-saas-pipeline',
    title: 'Enterprise SaaS Pipeline Acceleration',
    label: 'Sample Strategy',
    industry: 'B2B & SaaS',
    category: 'Web & Tech',
    problem: 'Complex sales cycles and low demonstration booking rates from cold website visits.',
    solution: 'Developed interactive product showcase landing pages integrated with 24/7 AI qualification chatbots.',
    serviceUsed: 'Web Development & AI Bots',
    tags: ['Next.js', 'AI Chatbot', 'HubSpot Sync', 'SEO Strategy'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    filter: ['Web & Tech', 'Lead Generation'],
  },
  {
    id: 'edtech-enrollment',
    title: 'EdTech Student Enrollment Strategy',
    label: 'Concept Case Study',
    industry: 'Education & EdTech',
    category: 'Digital Marketing',
    problem: 'High seasonal competition and dropping conversion rates across standard social ads.',
    solution: 'Architected full-funnel video discovery campaigns on YouTube and Google with instant counselor routing.',
    serviceUsed: 'YouTube Ads & Google Ads',
    tags: ['YouTube Ads', 'Google Ads', 'Funnel Design', 'Conversion Tracking'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
    filter: ['Digital Marketing', 'Lead Generation'],
  },
  {
    id: 'manufacturing-export',
    title: 'Industrial Equipment B2B Generation',
    label: 'Selected Project',
    industry: 'Manufacturing',
    category: 'Lead Generation',
    problem: 'Dependence on offline exhibitions with zero reliable digital international inquiry flow.',
    solution: 'Built multilingual technical export portal with high-intent Google Search and LinkedIn ad campaigns.',
    serviceUsed: 'B2B Lead Gen & Web Portal',
    tags: ['Technical SEO', 'Google Search Ads', 'B2B Funnel', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    filter: ['Lead Generation', 'Web & Tech'],
  },
  {
    id: 'hospitality-local',
    title: 'Boutique Hospitality Direct Bookings',
    label: 'Sample Strategy',
    industry: 'Hospitality',
    category: 'Digital Marketing',
    problem: 'Heavy commissions paid to third-party aggregators eroding operational margins.',
    solution: 'Created visual brand storytelling website with direct WhatsApp concierge booking integration.',
    serviceUsed: 'Web Design & Local Ads',
    tags: ['Local SEO', 'Instagram Ads', 'Direct Booking', 'Brand Story'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
    filter: ['Digital Marketing', 'Web & Tech'],
  },
]

const FILTERS = ['All', 'Digital Marketing', 'Lead Generation', 'Web & Tech', 'E-Commerce'] as const

export function Portfolio() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return CASE_STUDIES.filter((p) => {
      const matchFilter = active === 'All' || p.filter.includes(active)
      const q = query.toLowerCase().trim()
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.industry.toLowerCase().includes(q) ||
        p.problem.toLowerCase().includes(q) ||
        p.solution.toLowerCase().includes(q) ||
        p.serviceUsed.toLowerCase().includes(q) ||
        p.tags.join(' ').toLowerCase().includes(q)
      return matchFilter && matchQuery
    })
  }, [active, query])

  const scrollToContact = (contextTitle?: string) => {
    const el = document.getElementById('contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
      if (contextTitle) {
        window.dispatchEvent(new CustomEvent('select-service', { detail: contextTitle }))
      }
    }
  }

  return (
    <section id="portfolio" className="py-16 lg:py-24 px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
        <div className="space-y-3 max-w-[700px]">
          <p className="text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase">
            CASE STUDIES &amp; PORTFOLIO
          </p>
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[0.92] tracking-tight text-white">
            Proven strategies <br />
            and <span className="italic font-normal text-white/90">selected work.</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-white/60">
            Explore how Growth Nations solves complex customer acquisition challenges across Real Estate, E-Commerce, B2B, SaaS, and Manufacturing.
          </p>
        </div>
        <div className="hidden lg:block text-right">
          <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase font-mono">
            {filtered.length} STRATEGIES DISPLAYED
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
        <div
          className="flex gap-2 overflow-x-auto scrollbar-none pb-2 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`whitespace-nowrap px-5 h-9 rounded-full text-xs font-semibold tracking-wider uppercase border transition-colors shrink-0 ${
                active === f
                  ? 'bg-white text-black border-white shadow-md'
                  : 'bg-white/[0.05] text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex-1 lg:max-w-[360px] lg:ml-auto">
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 text-sm">⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by industry, problem, or tech..."
              className="w-full h-10 pl-9 pr-4 rounded-full bg-[hsl(var(--surface))] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/25 focus:bg-white/[0.06]"
              aria-label="Search case studies"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, idx) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group relative rounded-[24px] overflow-hidden bg-[hsl(var(--surface))] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col shadow-lg"
              data-cursor="VIEW"
            >
              {/* Visual with Badges */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] tracking-wider uppercase font-semibold text-white">
                    {p.label}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-wider uppercase">
                    {p.industry}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display italic text-[22px] lg:text-[24px] leading-tight text-white">
                    {p.title}
                  </h3>

                  <div className="mt-4 space-y-2.5 text-[12.5px] leading-relaxed">
                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
                      <p className="text-[10px] tracking-wider font-semibold text-red-300/80 uppercase">
                        CHALLENGE
                      </p>
                      <p className="text-white/60 mt-0.5">{p.problem}</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
                      <p className="text-[10px] tracking-wider font-semibold text-emerald-300/80 uppercase">
                        GROWTH SOLUTION
                      </p>
                      <p className="text-white/75 mt-0.5">{p.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[10.5px] text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToContact(p.title)}
                    className="w-full h-10 rounded-full bg-white/[0.08] hover:bg-white hover:text-black text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
                  >
                    Request Similar Strategy <span>↗</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-white/40">No case studies found matching “{query}”.</p>
          <button
            onClick={() => {
              setQuery('')
              setActive('All')
            }}
            className="mt-4 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  )
}
