import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import BeforeAfterSlider from './BeforeAfterSlider.jsx'
import { DatedTemplatePanel, CustomBuildPanel } from './WireframePanels.jsx'

const PROJECTS = [
  {
    name: 'Kla Fashion Hub',
    category: 'Retail · Kampala Road',
    metric: '+150% WhatsApp orders',
    detail: 'Replaced a Facebook-only storefront with a fast catalog site and one-tap WhatsApp checkout.',
    kind: 'retail',
    headline: 'Shop the new arrivals',
  },
  {
    name: 'Uganda Logistics Co.',
    category: 'Logistics · Nakawa',
    metric: 'MoMo drop-offs down 40%',
    detail: 'Rebuilt a clunky quote form into a guided flow with inline Mobile Money confirmation.',
    kind: 'logistics',
    headline: 'Get an instant quote',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="mb-14 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow font-body mb-5 text-xs"
          style={{ color: 'var(--accent)' }}
        >
          Business-first, not portfolio-first
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl leading-tight sm:text-4xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Drag the handle. See what a rebuild actually changes.
        </motion.h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <BeforeAfterSlider
              before={<DatedTemplatePanel kind={p.kind} />}
              after={<CustomBuildPanel headline={p.headline} />}
            />
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
                  {p.name}
                </h3>
                <p className="font-body text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {p.category}
                </p>
              </div>
              <span
                className="theme-transition inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs font-medium"
                style={{
                  borderRadius: 'var(--control-radius)',
                  backgroundColor: 'var(--accent-soft)',
                  color: 'var(--accent)',
                }}
              >
                <TrendingUp size={13} />
                {p.metric}
              </span>
            </div>
            <p className="font-body mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {p.detail}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
