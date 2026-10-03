import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type ServiceItem = {
  id: string
  category: 'Digital Marketing' | 'Lead Generation' | 'SEO & Organic' | 'Social Media' | 'Technology'
  title: string
  desc: string
  subServices: string[]
  icon: string
  image: string
  accent: string
  badge: string
}

const SERVICES: ServiceItem[] = [
  {
    id: 'digital-marketing',
    category: 'Digital Marketing',
    title: 'Digital Marketing & Paid Ads',
    desc: 'High-ROI Meta Ads, Google Ads, and YouTube campaigns targeted at ready-to-buy audiences with continuous ROAS optimization.',
    subServices: ['Meta Ads', 'Google Ads', 'YouTube Ads', 'Performance Marketing', 'PPC Management'],
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    accent: 'from-[#4E85BF]/25 to-transparent',
    badge: 'ROI DRIVEN',
  },
  {
    id: 'lead-generation',
    category: 'Lead Generation',
    title: 'High-Intent Lead Generation',
    desc: 'Predictable lead pipelines for B2B, real estate, and local businesses designed to attract, qualify, and deliver sales-ready prospects.',
    subServices: ['B2B Lead Generation', 'Real Estate Leads', 'Local Lead Gen', 'Lead Qualification', 'Appointment Setting'],
    icon: '◎',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    accent: 'from-emerald-500/25 to-transparent',
    badge: 'HIGH CONVERSION',
  },
  {
    id: 'seo-organic',
    category: 'SEO & Organic',
    title: 'SEO & Organic Search Growth',
    desc: 'Comprehensive technical SEO, high-authority backlink strategies, and search optimization to capture compounding organic demand.',
    subServices: ['Technical SEO', 'Local SEO', 'Content Strategy', 'Search Optimization', 'Keyword Strategy'],
    icon: '✦',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80',
    accent: 'from-violet-500/25 to-transparent',
    badge: 'LONG-TERM ASSET',
  },
  {
    id: 'social-media',
    category: 'Social Media',
    title: 'Social Media & Brand Growth',
    desc: 'Engaging short-form videos, Reels, and strategic social distribution that builds trust and establishes strong category leadership.',
    subServices: ['Social Media Management', 'Creative Content', 'Viral Reels Strategy', 'Brand Positioning', 'Community Growth'],
    icon: '◈',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    accent: 'from-pink-500/25 to-transparent',
    badge: 'BRAND ENGAGEMENT',
  },
  {
    id: 'web-dev',
    category: 'Technology',
    title: 'Web & Software Development',
    desc: 'Lightning-fast business websites, custom web apps, and e-commerce platforms engineered for speed, mobile responsiveness, and high conversion.',
    subServices: ['Website Development', 'Software Development', 'Next.js & React', 'Shopify & E-Commerce', 'SaaS Platforms'],
    icon: '⬢',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    accent: 'from-blue-500/25 to-transparent',
    badge: 'PERFORMANCE FIRST',
  },
  {
    id: 'ai-automation',
    category: 'Technology',
    title: 'AI Chatbots & Business Automation',
    desc: 'Smart AI assistants for 24/7 customer engagement, WhatsApp automation, and instant CRM lead sync to eliminate lost opportunities.',
    subServices: ['AI Chatbots', 'AI Automation', 'WhatsApp Bots', 'CRM Solutions', 'Business Automation'],
    icon: '⬡',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80',
    accent: 'from-cyan-500/25 to-transparent',
    badge: '24/7 AUTOMATION',
  },
  {
    id: 'conversion-opt',
    category: 'Digital Marketing',
    title: 'Conversion Rate Optimization (CRO)',
    desc: 'Data-backed UX revamps, friction removal, and A/B tested landing pages that transform traffic into actual paying clients.',
    subServices: ['Landing Page Design', 'Funnel Optimization', 'A/B Testing', 'Heatmap Analytics', 'Checkout Tuning'],
    icon: '◧',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80',
    accent: 'from-amber-500/25 to-transparent',
    badge: 'REVENUE OPTIMIZED',
  },
  {
    id: 'growth-strategy',
    category: 'Lead Generation',
    title: 'Full-Funnel Growth Systems',
    desc: 'Holistic growth roadmaps uniting paid acquisition, organic reach, tracking tech, and automated sales follow-up into one engine.',
    subServices: ['Marketing Strategy', 'Funnel Architecture', 'Multi-Touch Tracking', 'Revenue Modeling', 'Competitor Intel'],
    icon: '◷',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    accent: 'from-indigo-500/25 to-transparent',
    badge: 'END-TO-END',
  },
]

const CATEGORIES = ['All', 'Digital Marketing', 'Lead Generation', 'SEO & Organic', 'Social Media', 'Technology'] as const

export function Services() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All')

  const filtered = SERVICES.filter(
    (s) => activeCategory === 'All' || s.category === activeCategory
  )

  const scrollToContact = (serviceName?: string) => {
    const el = document.getElementById('contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
      if (serviceName) {
        // Dispatch custom event to select service in contact form
        window.dispatchEvent(new CustomEvent('select-service', { detail: serviceName }))
      }
    }
  }

  return (
    <section id="services" className="py-16 lg:py-24 px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 lg:mb-12">
        <div className="space-y-4 max-w-[700px]">
          <p className="text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase">
            GROWTH SERVICES &amp; SOLUTIONS
          </p>
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[0.9] tracking-tight text-white">
            Engineered systems <br />
            built for <span className="italic font-normal text-white/90">scalable growth.</span>
          </h2>
          <p className="text-[15px] lg:text-[16px] leading-relaxed text-white/60 max-w-[620px]">
            We merge performance marketing, high-intent lead generation, modern software, and intelligent AI automation to build end-to-end revenue engines.
          </p>
        </div>
        <button
          onClick={() => scrollToContact()}
          className="hidden lg:inline-flex items-center gap-2 h-11 px-7 rounded-full border border-white/15 text-white text-sm font-semibold hover:bg-white/10 transition-colors self-start lg:self-auto shadow-sm"
        >
          Request Consultation <span>↗</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8 -mx-5 px-5 lg:mx-0 lg:px-0" style={{ scrollbarWidth: 'none' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-5 h-9 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all shrink-0 ${
              activeCategory === cat
                ? 'bg-white text-black border-white shadow-md'
                : 'bg-white/[0.05] text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((s, i) => (
            <motion.div
              key={s.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="group relative rounded-[24px] bg-[hsl(var(--surface))] border border-white/[0.08] overflow-hidden hover:border-white/20 transition-all shadow-lg flex flex-col"
            >
              {/* Image header */}
              <div className="relative h-[156px] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                  width={600}
                  height={156}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--surface))] via-black/30 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-70 mix-blend-overlay pointer-events-none`} />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 grid place-items-center text-white text-xs">
                  {s.icon}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-wide">
                    {s.badge}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/90 grid place-items-center text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
              </div>

              <div className="relative p-6 flex-1 flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                <div className="relative flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-tight text-white">{s.title}</h3>
                    <p className="text-[13px] leading-relaxed text-white/60 mt-2">{s.desc}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {s.subServices.slice(0, 3).map((sub) => (
                        <span
                          key={sub}
                          className="px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[10.5px] font-medium text-white/70"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => scrollToContact(s.title)}
                      className="w-full flex items-center justify-between text-xs font-semibold tracking-wider text-white/50 group-hover:text-white uppercase transition-colors"
                    >
                      <span>Inquire Now</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Showcase Proof Strip */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {[
          { title: 'Full-Funnel Tracking', desc: 'Accurate attribution & event telemetry', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80' },
          { title: 'Ultra-Fast Platforms', desc: 'Sub-second load times that convert', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80' },
          { title: 'Automated CRM Sync', desc: 'Instant WhatsApp & sales notifications', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=80' },
          { title: 'Scalable Growth Sprints', desc: 'Iterative optimization every week', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80' },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl overflow-hidden border border-white/10 relative h-[130px] lg:h-[148px] ${idx > 1 ? 'hidden lg:block' : ''}`}
          >
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-xs font-bold text-white">{item.title}</p>
              <p className="text-[11px] text-white/50">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
