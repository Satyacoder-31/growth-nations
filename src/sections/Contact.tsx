import { useEffect, useState } from 'react'

const SERVICES_LIST = [
  'Digital Marketing & Paid Ads',
  'High-Intent Lead Generation',
  'SEO & Organic Growth',
  'Social Media & Brand Growth',
  'Website & Software Development',
  'AI Chatbots & Automation',
  'Full-Funnel Growth Suite',
  'Other / Custom Scope',
]

const BUDGET_RANGES = [
  'Spark Tier (₹3,000 – ₹8,000/mo)',
  'Brew Tier (₹8,000 – ₹15,000/mo)',
  'Propel Tier (₹15,000 – ₹30,000/mo)',
  'Growth Scale / Enterprise (₹30,000+/mo)',
  'Custom Web / App Project',
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: '',
    budget: '',
    message: '',
  })

  // Listen to external service or budget select triggers from other sections
  useEffect(() => {
    const handleServiceSelect = (e: any) => {
      const detail = e.detail
      if (detail) {
        setForm((prev) => ({ ...prev, serviceRequired: detail }))
      }
    }
    const handleBudgetSelect = (e: any) => {
      const detail = e.detail
      if (detail) {
        const found = BUDGET_RANGES.find((b) => b.toLowerCase().includes(detail.toLowerCase()))
        if (found) {
          setForm((prev) => ({ ...prev, budget: found }))
        }
      }
    }
    window.addEventListener('select-service', handleServiceSelect)
    window.addEventListener('select-budget', handleBudgetSelect)
    return () => {
      window.removeEventListener('select-service', handleServiceSelect)
      window.removeEventListener('select-budget', handleBudgetSelect)
    }
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 6000)

    const message = [
      `*Growth Consultation Request — Growth Nations*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone / WhatsApp:* ${form.phone}`,
      `✉️ *Email:* ${form.email}`,
      `🏢 *Company / Brand:* ${form.company || 'N/A'}`,
      `🎯 *Service Required:* ${form.serviceRequired || 'Consultation'}`,
      `💰 *Budget Range:* ${form.budget || 'Custom'}`,
      ``,
      `💬 *Project Goals & Message:*`,
      `${form.message}`,
    ].join('\n')

    const waUrl = `https://wa.me/917567464057?text=${encodeURIComponent(message)}`
    
    // Redirect directly to WhatsApp
    setTimeout(() => {
      window.location.href = waUrl
    }, 300)
  }

  return (
    <section
      id="contact"
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: `radial-gradient(1200px 600px at 70% 0%, rgba(78,133,191,0.12), transparent 60%), linear-gradient(180deg, hsl(var(--bg)) 0%, hsl(0 0% 6%) 100%)`,
      }}
    >
      <div className="px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* Left Column - Context & Contact Methods */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <p className="text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-[44px] md:text-[56px] lg:text-[62px] leading-[0.92] tracking-tight text-white">
              Let’s architect your <br />
              <span className="italic font-normal text-white/90">growth engine.</span>
            </h2>
            <p className="text-[15px] lg:text-[16px] leading-relaxed text-white/65 max-w-[480px]">
              Tell us about your business, targets, and timeline. Our growth strategists will review your current channels and outline high-impact opportunities.
            </p>

            {/* Response Guarantee Card */}
            <div className="rounded-[24px] overflow-hidden border border-white/10 relative aspect-[16/10] group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Growth Nations Consulting Team"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
                width={800}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 p-4 flex items-center gap-3.5">
                  <img
                    src="/gn-mark.png"
                    alt="Growth Nations Logo"
                    className="w-11 h-11 rounded-full object-contain bg-white p-1 shrink-0 shadow-sm border border-white/20"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">Consultation Response</p>
                    <p className="text-xs text-white/60">Within 2 hours • 10am–8pm IST</p>
                  </div>
                  <span className="ml-auto w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Phone & WhatsApp */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-white/40 font-semibold">
                    DIRECT CONTACT &amp; CONSULTATION
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="tel:+917567464057"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/10 text-white transition-colors group"
                  >
                    <span className="w-7 h-7 rounded-full bg-white/10 grid place-items-center text-xs">📞</span>
                    <div>
                      <p className="text-[11px] text-white/50">Call Directly</p>
                      <p className="text-xs font-semibold font-mono text-white">+91 75674 64057</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/917567464057?text=Hi%20Growth%20Nations%20-%20I%20want%20to%20request%20a%20growth%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 hover:bg-[#25D366]/25 text-white transition-colors group"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#25D366] text-white grid place-items-center text-xs">💬</span>
                    <div>
                      <p className="text-[11px] text-emerald-300">WhatsApp Chat</p>
                      <p className="text-xs font-semibold font-mono text-white">+91 75674 64057</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-3.5 text-sm text-white/70 p-3 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="w-9 h-9 rounded-full bg-white/10 border border-white/10 grid place-items-center text-white shrink-0 mt-0.5">
                  📍
                </span>
                <div className="flex-1">
                  <span className="font-semibold text-white block">Corporate Office:</span>
                  <p className="text-white/80 leading-relaxed text-xs sm:text-sm mt-0.5">
                    Growth Nations, 6th Floor, Premaldeep Square, Amli, Silvassa – 396230
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Premaldeep+Square,+Amli,+Silvassa+-+396230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#4E85BF] hover:text-white mt-1.5 font-medium transition-colors"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 text-sm text-white/70 px-3 py-2">
                <span className="w-9 h-9 rounded-full bg-white/10 border border-white/10 grid place-items-center text-white shrink-0">
                  ✉
                </span>
                <div>
                  <span className="text-xs text-white/50 block">Email Us</span>
                  <a href="mailto:hello@growthnations.in" className="text-white hover:underline">
                    hello@growthnations.in
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Card */}
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-[hsl(var(--surface))] p-3.5 shadow-xl space-y-2.5">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4E85BF] animate-pulse" />
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Premaldeep Square, Silvassa
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Premaldeep+Square,+Amli,+Silvassa+-+396230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#4E85BF] hover:text-white transition-colors font-medium inline-flex items-center gap-1"
                >
                  Get Directions ↗
                </a>
              </div>
              <div className="rounded-xl overflow-hidden h-[210px] w-full border border-white/10 relative">
                <iframe
                  title="Growth Nations Location - Premaldeep Square, Silvassa"
                  src="https://maps.google.com/maps?q=Premaldeep+Square%2C+Amli%2C+Silvassa+-+396230&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            <a
              href="https://wa.me/917567464057?text=Hi%20Growth%20Nations%20-%20I%20want%20to%20request%20a%20growth%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-12 px-8 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg"
            >
              Start Consultation on WhatsApp (+91 75674 64057) ↗
            </a>
          </div>

          {/* Right Column - Consultation Form */}
          <form
            onSubmit={submit}
            className="rounded-[28px] bg-[hsl(var(--surface))] border border-white/10 p-6 sm:p-8 lg:p-9 space-y-5 shadow-2xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white">Request a Consultation</h3>
              <p className="text-xs text-white/50 mt-1">
                Fill out the details below to receive a personalized growth and channel blueprint.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1.5">
                <span className="text-[11px] tracking-[0.14em] font-semibold text-white/50 uppercase">
                  NAME *
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full h-[48px] px-4 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/25 focus:bg-white/[0.08]"
                />
              </label>
              <label className="space-y-1.5">
                <span className="text-[11px] tracking-[0.14em] font-semibold text-white/50 uppercase">
                  EMAIL *
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full h-[48px] px-4 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/25 focus:bg-white/[0.08]"
                />
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1.5">
                <span className="text-[11px] tracking-[0.14em] font-semibold text-white/50 uppercase">
                  PHONE / WHATSAPP *
                </span>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 75674 64057"
                  className="w-full h-[48px] px-4 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/25 focus:bg-white/[0.08]"
                />
              </label>
              <label className="space-y-1.5">
                <span className="text-[11px] tracking-[0.14em] font-semibold text-white/50 uppercase">
                  COMPANY / BRAND NAME
                </span>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Your business name"
                  className="w-full h-[48px] px-4 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/25 focus:bg-white/[0.08]"
                />
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1.5">
                <span className="text-[11px] tracking-[0.14em] font-semibold text-white/50 uppercase">
                  SERVICE REQUIRED *
                </span>
                <select
                  required
                  value={form.serviceRequired}
                  onChange={(e) => setForm({ ...form, serviceRequired: e.target.value })}
                  className="w-full h-[48px] px-4 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-white focus:outline-none focus:border-white/25"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" className="bg-[hsl(var(--surface))]">
                    Select growth service
                  </option>
                  {SERVICES_LIST.map((t) => (
                    <option key={t} value={t} className="bg-[hsl(var(--surface))]">
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1.5">
                <span className="text-[11px] tracking-[0.14em] font-semibold text-white/50 uppercase">
                  BUDGET RANGE *
                </span>
                <select
                  required
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full h-[48px] px-4 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-white focus:outline-none focus:border-white/25"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" className="bg-[hsl(var(--surface))]">
                    Select monthly budget
                  </option>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b} className="bg-[hsl(var(--surface))]">
                      {b}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="space-y-1.5 block">
              <span className="text-[11px] tracking-[0.14em] font-semibold text-white/50 uppercase">
                PROJECT MESSAGE &amp; GOALS *
              </span>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your current customer acquisition channels, goals, and targets..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/25 resize-none"
              />
            </label>

            <button
              type="submit"
              className="w-full h-[52px] rounded-full bg-white text-black text-sm font-bold tracking-wider uppercase hover:bg-white/90 transition-colors shadow-lg"
              style={{ minHeight: 52 }}
            >
              Request a Consultation →
            </button>

            {sent && (
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm px-4 py-3 text-center">
                ✓ Consultation request submitted! Redirecting you to WhatsApp (+91 75674 64057) for immediate consultation...
              </div>
            )}

            <p className="text-center text-[11px] text-white/40">
              By submitting, you agree to our Privacy Policy and Terms. Growth Nations respects your confidentiality.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
