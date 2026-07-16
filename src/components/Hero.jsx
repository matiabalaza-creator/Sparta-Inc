import { motion } from 'framer-motion'
import { ArrowDownRight, MessageCircle } from 'lucide-react'
import ThemedBackdrop from './ThemedBackdrop.jsx'
import CheckoutMockup from './CheckoutMockup.jsx'

const WHATSAPP_NUMBER = '256762110535'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <ThemedBackdrop variant="grid" />
      <ThemedBackdrop variant="particles" className="opacity-40" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-10">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center md:justify-end"
        >
          <CheckoutMockup />
        </motion.div>
      </div>
    </section>
  )
}
