import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navigation } from './components/Navigation'
import { CustomCursor } from './components/CustomCursor'
import { Marquee } from './components/Marquee'
import { StickyCTA } from './components/StickyCTA'
import { Hero } from './sections/Hero'
import { TrustStrip } from './sections/TrustStrip'
import { Services } from './sections/Services'
import { Pricing } from './sections/Pricing'
import { Portfolio } from './sections/Portfolio'
import { Parallax } from './sections/Parallax'
import { Process } from './sections/Process'
import { About } from './sections/About'
import { Technology } from './sections/Technology'
import { Journal } from './sections/Journal'
import { Stats } from './sections/Stats'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [, setShowContent] = useState(false)

  // Ensure loading shows at least 2700ms
  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  const handleComplete = () => {
    setLoading(false)
    // small delay for reveal
    setTimeout(() => setShowContent(true), 100)
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--bg))] text-[hsl(var(--text))] overflow-x-clip selection:bg-[#4E85BF] selection:text-white">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>

      {/* Reveal content after loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={loading ? 'pointer-events-none' : ''}
      >
        {/* Skip to content for a11y */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-full"
        >
          Skip to content
        </a>

        <CustomCursor />
        <Navigation />

        <main className="overflow-x-clip">
          <Hero />
          <TrustStrip />
          <Services />
          <Pricing />
          <Portfolio />
          <Parallax />
          <Process />
          <About />
          <Technology />
          <Journal />
          <Stats />
          <Marquee />
          <Contact />
          <Footer />
        </main>

        <StickyCTA />

        {/* SEO structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Growth Nations',
              description:
                'Growth Nations helps ambitious businesses grow through performance marketing, lead generation, technology, automation, and conversion-focused digital experiences.',
              url: 'https://growthnations.in',
              logo: 'https://growthnations.in/logo.jpg',
              image: 'https://growthnations.in/logo.jpg',
              telephone: '+91 75674 64057',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '6th Floor, Premaldeep Square, Amli',
                addressLocality: 'Silvassa',
                postalCode: '396230',
                addressRegion: 'Dadra and Nagar Haveli',
                addressCountry: 'IN',
              },
              priceRange: '₹3,000 - Custom',
              areaServed: 'Global',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Growth Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing & Performance Ads' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'High-Intent Lead Generation' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Organic Growth' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website & Software Development' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Chatbots & Automation' } },
                ],
              },
            }),
          }}
        />
      </motion.div>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="lg:hidden h-[88px]" aria-hidden style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} />

      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </div>
  )
}

export default App
