import { motion } from 'framer-motion'
import { ArrowDownRight, MessageCircle, Smartphone, Zap, ShieldCheck } from 'lucide-react'
import ThemedBackdrop from './ThemedBackdrop.jsx'

const WHATSAPP_NUMBER = '256762110535'

export default function Hero() {
  const conversionCards = [
    {
      icon: <Smartphone className="h-5 w-5" style={{ color: 'var(--accent)' }} />,
      title: "Built for Local Commerce",
      desc: "Seamless integration with MTN MoMo, Airtel Money, and automated WhatsApp order routing designed to convert Ugandan traffic into revenue."
    },
    {
      icon: <Zap className="h-5 w-5" style={{ color: 'var(--accent)' }} />,
      title: "Performance-Obsessed Speed",
      desc: "Zero clunky templates. Our custom-engineered sites load instantly across Uganda—even on slower mobile networks—to prevent customer drop-off."
    },
    {
      icon: <ShieldCheck className="h-5 w-5" style={{ color: 'var(--accent)' }} />,
      title: "Transparent Partnership",
      desc: "No disappearing acts or hidden monthly fees. You get 100% ownership of your ultra-clean source code and reliable local support."
    }
  ]

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <ThemedBackdrop variant="grid" />
      <ThemedBackdrop variant="particles" className="opacity-40" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10">
        {/* Left Side: Editorial Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow font-body mb-6 inline-flex items-center gap-2 text-xs"
            style={{ color: 'var(--accent)' }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            Web design &amp; development · Kampala, Uganda
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl"
            style={{ color: 'var(--text-primary)' }}
          >
            We build digital experiences that turn Ugandan visitors into paying customers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Bespoke engineering. Mobile Money &amp; WhatsApp integrations built to scale your business.
            No slow templates. No excuses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="theme-transition inline-flex items-center gap-2 px-6 py-3.5 font-body text-sm font-medium"
              style={{
                borderRadius: 'var(--control-radius)',
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-text)',
              }}
            >
              <MessageCircle size={16} />
              Start a project on WhatsApp
            </a>
            <a
              href="#work"
              data-cursor-hover
              className="theme-transition inline-flex items-center gap-2 border px-6 py-3.5 font-body text-sm"
              style={{
                borderRadius: 'var(--control-radius)',
                borderWidth: 'var(--border-width)',
                borderColor: 'var(--surface-border)',
                color: 'var(--text-primary)',
              }}
            >
              See the work
              <ArrowDownRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: High-Converting Local Value Cards */}
        <div className="flex flex-col gap-4">
          {conversionCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
              className="theme-transition flex gap-4 p-5 border"
              style={{
                borderRadius: 'var(--control-radius)',
                borderWidth: 'var(--border-width)',
                borderColor: 'var(--surface-border)',
                backgroundColor: 'color-mix(in srgb, var(--bg) 95%, white 5%)',
                boxShadow: 'var(--brutalist-shadow, none)'
              }}
            >
              <div className="flex-shrink-0 mt-0.5">{card.icon}</div>
              <div>
                <h3 
                  className="font-display text-base font-semibold mb-1" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  {card.title}
                </h3>
                <p 
                  className="font-body text-xs leading-relaxed" 
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
