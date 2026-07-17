import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import BeforeAfterSlider from './BeforeAfterSlider.jsx'

const PROJECTS = [
  {
    name: 'Kla Fashion Hub',
    category: 'Retail · Kampala Road',
    metric: '+150% WhatsApp orders',
    detail: 'Replaced a Facebook-only storefront with a fast catalog site and one-tap WhatsApp checkout.',
    beforeImg: '/fashion-before.jpg', // CORRECTED: Now matches your GitHub .jpg file
    afterImg: '/fashion-after.jpg',   // CORRECTED: Now matches your GitHub .jpg file
  },
  {
    name: 'Uganda Logistics Co.',
    category: 'Logistics · Nakawa',
    metric: 'MoMo drop-offs down 40%',
    detail: 'Rebuilt a clunky quote form into a guided flow with inline Mobile Money confirmation.',
    beforeImg: '/logistics-before.jpg', // CORRECTED: Now spelled correctly and matches .jpg
    afterImg: '/logistics-after.jpg',  // This one was already working perfectly!
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
            {/* Before After Slider containing actual images */}
            <BeforeAfterSlider
              before={
                <div className="relative h-[250px] sm:h-[320px] w-full overflow-hidden bg-zinc-900 rounded-md">
                  <img 
                    src={p.beforeImg} 
                    alt={`${p.name} Old Site`} 
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white rounded">
                    Before (Slow Template)
                  </span>
                </div>
              }
              after={
                <div className="relative h-[250px] sm:h-[320px] w-full overflow-hidden bg-zinc-950 rounded-md">
                  <img 
                    src={p.afterImg} 
                    alt={`${p.name} Custom Rebuild`} 
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-3 right-3 bg-emerald-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white rounded">
                    After (Sparta Custom)
                  </span>
                </div>
              }
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
