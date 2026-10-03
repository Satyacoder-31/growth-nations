import { motion } from 'framer-motion'

const PLANS = [
  {
    name: 'SPARK',
    price: '₹3,000',
    period: '/month',
    sub: 'Essential digital foundation and local customer reach for startups & local businesses.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80',
    features: [
      'Digital presence & local SEO',
      'Social media profile tuning',
      'Meta or Google ad foundation',
      'Starter lead inquiry capture',
      'Monthly performance report',
      'Dedicated growth manager',
    ],
    cta: 'Book Consultation',
    popular: false,
  },
  {
    name: 'BREW',
    price: '₹8,000',
    period: '/month',
    sub: 'Targeted performance marketing and high-intent lead generation for scaling companies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    features: [
      'Meta & Google Ads management',
      'High-intent lead qualification',
      'Conversion landing page setup',
      'Ad creatives & persuasive copy',
      'WhatsApp CRM lead routing',
      'Bi-weekly strategy reviews',
    ],
    cta: 'Book Consultation',
    popular: true,
  },
  {
    name: 'PROPEL',
    price: '₹15,000',
    period: '/month',
    sub: 'Full-funnel customer acquisition, multi-channel scaling, and intelligent automation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    features: [
      'Omnichannel (Meta, Google, YouTube)',
      'Custom landing pages & A/B testing',
      'AI Chatbot for 24/7 qualification',
      'CRM integration (HubSpot/Zoho)',
      'Advanced retargeting & lookalikes',
      'Weekly strategy sprints & Slack',
    ],
    cta: 'Book Consultation',
    popular: false,
  },
  {
    name: 'GROWTH SCALE / ENTERPRISE',
    price: 'Custom',
    period: 'Pricing',
    sub: 'Dedicated growth engineering, custom software/web platforms, and enterprise automation.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80',
    features: [
      'Full-funnel growth engineering',
      'Custom web/software platforms',
      'Enterprise AI automation pipelines',
      'Custom attribution & event tracking',
      'Dedicated senior growth team',
      'Executive SLA & bespoke strategy',
    ],
    cta: 'Request Custom Proposal',
    popular: false,
  },
]

export function Pricing() {
  const scrollToContact = (planName: string) => {
    const el = document.getElementById('contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
      window.dispatchEvent(new CustomEvent('select-budget', { detail: planName }))
    }
  }

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-[hsl(var(--surface))]/30 border-y border-white/[0.06]">
      <div className="px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-10 lg:mb-14">
          <p className="text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase">
            GROWTH PACKAGES &amp; INVESTMENT
          </p>
          <h2 className="font-display text-[34px] md:text-[46px] lg:text-[54px] leading-[0.92] tracking-tight text-white mt-3">
            Predictable growth systems <br />
            for <span className="italic font-normal text-white/90">every stage.</span>
          </h2>
          <p className="text-[15px] text-white/60 mt-4 leading-relaxed">
            Transparent packages designed to scale with your business. Custom solutions available for complex sales cycles and enterprise operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`relative rounded-[28px] border overflow-hidden flex flex-col ${
                plan.popular
                  ? 'bg-white text-black border-white shadow-[0_20px_60px_rgba(0,0,0,0.4)] scale-[1.02] lg:scale-105'
                  : 'bg-[hsl(var(--surface))] border-white/[0.08] text-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 px-3.5 py-1 rounded-full bg-black text-white text-[10px] tracking-[0.18em] font-bold uppercase">
                  RECOMMENDED
                </div>
              )}

              {/* Image header */}
              <div className="relative h-[130px] overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  width={400}
                  height={130}
                />
                <div
                  className={`absolute inset-0 ${plan.popular ? 'bg-white/10' : 'bg-black/50'}`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    plan.popular
                      ? 'from-white via-white/70 to-transparent'
                      : 'from-[hsl(var(--surface))] via-transparent to-transparent'
                  }`}
                />
                <div className="absolute bottom-3 left-5 right-5">
                  <p
                    className={`text-[10px] tracking-[0.18em] font-bold uppercase ${
                      plan.popular ? 'text-black/60' : 'text-white/60'
                    }`}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <p
                      className={`font-display text-[28px] lg:text-[32px] leading-none tracking-tight ${
                        plan.popular ? 'text-black' : 'text-white'
                      }`}
                    >
                      {plan.price}
                    </p>
                    <span
                      className={`text-xs ${plan.popular ? 'text-black/50' : 'text-white/50'}`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <p
                  className={`text-[13px] leading-relaxed min-h-[44px] ${
                    plan.popular ? 'text-black/70' : 'text-white/60'
                  }`}
                >
                  {plan.sub}
                </p>

                <div
                  className={`my-5 h-px ${plan.popular ? 'bg-black/10' : 'bg-white/10'}`}
                />

                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px]">
                      <span
                        className={`w-4 h-4 rounded-full grid place-items-center text-[9px] shrink-0 mt-0.5 ${
                          plan.popular
                            ? 'bg-black text-white'
                            : 'bg-white/10 text-white/80 border border-white/15'
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={plan.popular ? 'text-black/85 font-medium' : 'text-white/75'}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToContact(plan.name)}
                  className={`mt-6 h-[48px] rounded-full grid place-items-center text-xs tracking-wider uppercase font-bold transition-all shadow-sm ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-black/90'
                      : 'bg-white text-black hover:bg-white/90'
                  }`}
                  style={{ minHeight: 48 }}
                >
                  {plan.cta} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-12 rounded-[24px] border border-white/10 bg-[hsl(var(--surface))] p-6 lg:p-8 overflow-x-auto shadow-md">
          <p className="text-center text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase mb-6">
            CAPABILITY COMPARISON MATRIX
          </p>
          <div className="min-w-[680px]">
            <div className="grid grid-cols-5 gap-4 text-[11px] tracking-wider font-semibold text-white/40 uppercase pb-3 border-b border-white/10">
              <span>CAPABILITY</span>
              <span className="text-center">SPARK</span>
              <span className="text-center">BREW</span>
              <span className="text-center">PROPEL</span>
              <span className="text-center">ENTERPRISE</span>
            </div>
            {[
              ['Campaign Platforms', 'Meta or Google', 'Meta + Google', 'Meta, Google, YouTube', 'Full Omnichannel'],
              ['High-Intent Lead Gen', 'Basic Flow', 'Pre-Qualified', 'Multi-Step Qualified', 'Custom Scoring Pipeline'],
              ['Conversion Assets', '1 Funnel Page', '2 Landing Pages', 'Custom Tested Funnels', 'Dedicated Web Portal / App'],
              ['AI Chatbot / Routing', '—', 'WhatsApp Routing', 'AI Bot + WhatsApp', 'Custom AI LLM System'],
              ['CRM & Automation', '—', 'Basic Sync', 'Full HubSpot / Zoho', 'Enterprise API & Workflows'],
              ['Review Frequency', 'Monthly', 'Bi-weekly', 'Weekly Sprint', 'Dedicated Slack & Daily Sync'],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-5 gap-4 py-3.5 border-b border-white/[0.06] text-xs"
              >
                <span className="text-white/80 font-medium">{row[0]}</span>
                {row.slice(1).map((v, idx) => (
                  <span
                    key={idx}
                    className={`text-center ${idx === 1 ? 'text-white font-semibold' : 'text-white/60'}`}
                  >
                    {v}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/40 mt-5 italic">
            *Deliverables and unit economics are tailored during your initial strategy consultation.
          </p>
        </div>
      </div>
    </section>
  )
}
