export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-white/[0.08] bg-black overflow-hidden">
      {/* High-Impact Visual Showcase Strip */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
        {[
          { title: 'Performance Ads', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80' },
          { title: 'Lead Pipelines', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80' },
          { title: 'Scalable Platforms', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80' },
          { title: 'AI Automation', src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&auto=format&fit=crop&q=80' },
          { title: 'B2B Acquisition', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80' },
          { title: 'Brand Storytelling', src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80' },
        ].map((item, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden bg-[hsl(var(--surface))] group">
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors" />
          </div>
        ))}
      </div>

      <div className="px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        {/* Top Callout Bar */}
        <div className="py-12 lg:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-white/[0.08]">
          <div className="space-y-2">
            <h2 className="font-display text-[38px] md:text-[52px] lg:text-[60px] leading-[0.92] tracking-tight text-white">
              Ready to scale your <br />
              <span className="italic font-normal text-white/90">business acquisition?</span>
            </h2>
            <p className="text-sm text-white/50">Schedule a 30-minute growth consultation with our leadership team.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contact')
              }}
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-colors shadow-lg"
            >
              Get Started ↗
            </a>
            <a
              href="https://wa.me/917567464057?text=Hi%20Growth%20Nations%20-%20I%20want%20to%20discuss%20our%20growth%20strategy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 text-white text-sm font-semibold hover:bg-[#25D366]/25 transition-colors"
            >
              WhatsApp (+91 75674 64057)
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column (spans 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-clean.png"
                alt="Growth Nations - Digital Marketing Agency"
                className="h-12 w-auto object-contain bg-white rounded-xl p-1.5 shadow-md border border-white/20"
              />
              <div>
                <span className="font-display text-2xl tracking-tight text-white block">Growth Nations</span>
                <span className="text-[11px] tracking-wider text-white/50 uppercase">Digital Marketing Agency</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-[360px]">
              Digital growth, technology, and performance marketing solutions for ambitious businesses.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300">Accepting New Client Partners</span>
            </div>

            {/* Office Address */}
            <div className="pt-2 text-xs text-white/60 space-y-1 border-t border-white/[0.08] max-w-[380px]">
              <p className="text-[10px] tracking-[0.18em] font-semibold text-white/40 uppercase">
                OFFICE LOCATION
              </p>
              <p className="text-white/80 leading-relaxed text-xs">
                Growth Nations, 6th Floor, Premaldeep Square,<br />
                Amli, Silvassa – 396230
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Premaldeep+Square,+Amli,+Silvassa+-+396230"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#4E85BF] hover:text-white pt-0.5 transition-colors font-medium"
              >
                📍 View on Google Maps ↗
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <p className="text-[11px] tracking-[0.2em] font-semibold text-white/40 uppercase mb-4">
              COMPANY
            </p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                ['About Us', 'about'],
                ['Services', 'services'],
                ['Case Studies & Work', 'portfolio'],
                ['Growth Process', 'process'],
                ['Packages & Pricing', 'pricing'],
                ['Contact Us', 'contact'],
              ].map(([label, id]) => (
                <li key={label}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(id)
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <p className="text-[11px] tracking-[0.2em] font-semibold text-white/40 uppercase mb-4">
              SERVICES
            </p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                'Digital Marketing',
                'Lead Generation',
                'SEO & Organic Growth',
                'Website Development',
                'AI Automation & Chatbots',
                'Conversion Optimization',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo('services')
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <p className="text-[11px] tracking-[0.2em] font-semibold text-white/40 uppercase mb-4">
              CONNECT
            </p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                ['Instagram', 'https://instagram.com'],
                ['LinkedIn', 'https://linkedin.com'],
                ['YouTube', 'https://youtube.com'],
                ['WhatsApp', 'https://wa.me/917567464057?text=Hi%20Growth%20Nations'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-white/40 space-y-2.5">
              <div>
                <p className="text-[10px] tracking-wider uppercase text-white/40">Direct Phone:</p>
                <a
                  href="tel:+917567464057"
                  className="text-white/90 font-mono hover:text-[#4E85BF] transition-colors inline-block mt-0.5"
                >
                  +91 75674 64057
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-wider uppercase text-white/40">WhatsApp Support:</p>
                <a
                  href="https://wa.me/917567464057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 font-mono hover:text-[#25D366] transition-colors inline-flex items-center gap-1.5 mt-0.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  +91 75674 64057
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-wider uppercase text-white/40">Email Inquiry:</p>
                <a
                  href="mailto:hello@growthnations.in"
                  className="text-white/70 font-mono mt-0.5 hover:text-white transition-colors block"
                >
                  hello@growthnations.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="py-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Growth Nations. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">•</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            <span className="text-white/20">•</span>
            <span className="text-white/30">https://growthnations.in</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
