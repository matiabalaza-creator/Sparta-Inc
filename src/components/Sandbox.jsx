import { motion } from 'framer-motion'
import { MousePointerClick } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Sandbox() {
  const { themes, themeId, setTheme } = useTheme()

  return (
    <section id="philosophy" className="relative border-y" style={{ borderColor: 'var(--surface-border)' }}>
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="eyebrow font-body mb-5 text-xs"
              style={{ color: 'var(--accent)' }}
            >
              The standout sandbox
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-3xl leading-tight sm:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              A developer shouldn't have a signature style.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body mt-5 max-w-md text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              They should have the versatility to execute your business vision. Whether you're a
              high-end real estate developer in Nakasero or a booming retail brand in Kampala,
              toggle the panel to see how we adapt to your brand — live, on this very page.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 inline-flex items-center gap-2 font-body text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              <MousePointerClick size={16} style={{ color: 'var(--accent)' }} />
              Try it — tap a mode below, or use the floating console.
            </motion.div>
          </div>

          <div className="grid gap-3 self-start sm:grid-cols-1">
            {themes.map((t, i) => {
              const active = t.id === themeId
              return (
                <motion.button
                  key={t.id}
                  type="button"
                  data-cursor-hover
                  aria-pressed={active}
                  onClick={() => setTheme(t.id)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="theme-transition flex items-center justify-between border px-6 py-5 text-left"
                  style={{
                    borderRadius: 'var(--card-radius)',
                    borderWidth: 'var(--border-width)',
                    borderColor: active ? 'var(--accent)' : 'var(--surface-border)',
                    backgroundColor: active ? 'var(--accent-soft)' : 'var(--bg-elevated)',
                  }}
                >
                  <span>
                    <span className="font-display block text-lg" style={{ color: 'var(--text-primary)' }}>
                      {t.label}
                    </span>
                    <span className="font-body block mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {t.blurb}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="theme-transition h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: active ? 'var(--accent)' : 'var(--surface-border)' }}
                  />
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
