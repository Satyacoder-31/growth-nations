import { motion } from 'framer-motion'

export function About() {
  const differentiators = [
    { title: 'Data-Driven Strategy', desc: 'Campaigns governed by real conversion data, unit economics, and audience testing.' },
    { title: 'Performance-Focused Execution', desc: 'Relentless focus on lowering CAC and maximizing Return on Ad Spend (ROAS).' },
    { title: 'Full-Funnel Thinking', desc: 'Connecting first impression ad creatives directly to conversion and retention.' },
    { title: 'Tech + Marketing Integration', desc: 'Engineering fast websites, tracking pixels, and software alongside media buying.' },
    { title: 'Conversion-Focused Websites', desc: 'Mobile-first web experiences designed specifically to turn visitors into inquiries.' },
    { title: 'Lead-Generation Systems', desc: 'Predictable high-intent pipelines delivering qualified prospects directly to your team.' },
    { title: 'Intelligent Automation', desc: 'AI chatbots, CRM synchronization, and automated WhatsApp nurturing.' },
    { title: 'Scalable Solutions', desc: 'Reliable infrastructure built to support business scaling from day one.' },
  ]

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-16 lg:py-24 px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
        {/* Visual Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[28px] overflow-hidden bg-[hsl(var(--surface))] border border-white/10 aspect-[4/4.5] lg:aspect-[4/5] shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
            alt="Growth Nations Digital Growth Team Strategy"
            className="w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          
          <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-white text-black text-[11px] font-bold tracking-wider uppercase">
            GROWTH PARTNER
          </div>

          <div className="absolute bottom-0 inset-x-0 p-6 space-y-3">
            <div className="rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[11px] tracking-widest font-semibold text-white/70 uppercase">
                  OUR PHILOSOPHY
                </p>
              </div>
              <p className="text-white text-sm lg:text-[15px] font-medium leading-relaxed italic">
                “Growth is never an accident. It is the calculated result of data, technology, high-converting creative, and relentless optimization.”
              </p>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Differentiators */}
        <div className="space-y-6">
          <div>
            <p className="text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase">
              WHY GROWTH NATIONS
            </p>
            <h2 className="font-display text-[34px] md:text-[46px] lg:text-[54px] leading-[0.92] tracking-tight text-white mt-3">
              Growth systems, <br />
              not just <span className="italic font-normal text-white/90">isolated campaigns.</span>
            </h2>
          </div>

          <div className="space-y-4 text-[15px] lg:text-[16px] leading-relaxed text-white/70">
            <p>
              <strong className="text-white font-semibold">Growth Nations</strong> combines performance marketing, engineering, automation, and conversion data to create predictable growth systems rather than fragmented marketing efforts.
            </p>
            <p>
              Whether you are an ambitious startup, real estate developer, e-commerce brand, or B2B enterprise, we align every marketing rupee with measurable lead flow, customer acquisition, and scalable revenue.
            </p>
          </div>

          {/* 8 Differentiators Grid */}
          <div className="pt-2">
            <p className="text-[11px] tracking-[0.16em] font-semibold text-white/40 uppercase mb-4">
              KEY GROWTH DIFFERENTIATORS
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {differentiators.map((d, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-3.5 hover:border-white/15 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4E85BF]" />
                    <h3 className="text-xs font-semibold text-white tracking-wide">{d.title}</h3>
                  </div>
                  <p className="text-[12px] text-white/50 mt-1 leading-snug">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions & Trust */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contact')
              }}
              className="h-11 px-7 rounded-full bg-white text-black text-sm font-bold grid place-items-center hover:bg-white/90 transition-colors shadow-md"
            >
              Partner With Us ↗
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('portfolio')
              }}
              className="h-11 px-6 rounded-full border border-white/15 text-white text-sm font-medium grid place-items-center hover:bg-white/5 transition-colors"
            >
              Explore Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
