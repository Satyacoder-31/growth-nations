import { motion } from 'framer-motion'

export function TrustStrip() {
  const items = [
    {
      value: '250+',
      label: 'CAMPAIGNS MANAGED',
      icon: '◎',
      sub: 'Meta, Google & Ads',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&auto=format&fit=crop&q=80',
    },
    {
      value: '50,000+',
      label: 'LEADS GENERATED',
      icon: '✦',
      sub: 'High-Intent Pipelines',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop&q=80',
    },
    {
      value: '120+',
      label: 'BUSINESSES SUPPORTED',
      icon: '◧',
      sub: 'Startups, MSMEs & Brands',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80',
    },
    {
      value: '15+',
      label: 'INDUSTRIES SERVED',
      icon: '◷',
      sub: 'Real Estate, B2B & Tech',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&auto=format&fit=crop&q=80',
    },
  ]

  return (
    <section className="border-y border-white/[0.06] bg-[hsl(var(--surface))]/50 backdrop-blur relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative max-w-[1600px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06] divide-y lg:divide-y-0">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="py-6 lg:py-8 text-center flex flex-col items-center gap-3 px-3"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 hidden lg:block shadow-sm">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/10 border border-white/10 grid place-items-center text-[10px] text-white/60 hidden lg:grid">
                    {item.icon}
                  </span>
                  <p className="font-display italic text-2xl lg:text-3xl text-white tracking-tight">
                    {item.value}
                  </p>
                </div>
                <p className="text-[11px] tracking-[0.16em] font-semibold text-white/60 mt-1 uppercase">
                  {item.label}
                </p>
                <p className="text-[10px] text-white/40 mt-0.5 hidden sm:block">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
