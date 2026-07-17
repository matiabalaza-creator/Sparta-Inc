import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail } from 'lucide-react'

const WHATSAPP_NUMBER = '256762110535'

// Pricing model — indicative, in UGX.
const FOUNDATION = 450000
const PER_PAGE = 220000
const ECOMMERCE_ADDON = 1350000
const WHATSAPP_ADDON = 850000
const UGX_PER_USD = 3800 // indicative FX rate estimate

function formatUGX(n) {
  return `UGX ${n.toLocaleString('en-UG')}`
}
function formatUSD(n) {
  return `$${Math.round(n / UGX_PER_USD).toLocaleString('en-US')}`
}

export default function Contact() {
  const [pages, setPages] = useState(4)
  const [ecommerce, setEcommerce] = useState(false)
  const [whatsapp, setWhatsapp] = useState(false)

  const total = useMemo(() => {
    let sum = FOUNDATION + pages * PER_PAGE
    if (ecommerce) sum += ECOMMERCE_ADDON
    if (whatsapp) sum += WHATSAPP_ADDON
    return sum
  }, [pages, ecommerce, whatsapp])

  const tierLabel = useMemo(() => {
    if (total < 1_500_000) return 'Starter'
    if (total < 3_000_000) return 'Growth'
    return 'Premium'
  }, [total])

  const waMessage = useMemo(() => {
    const parts = [
      `Hi Sparta Inc, I just used your site calculator to estimate a project.`,
      `Pages: ${pages}.`,
      ecommerce ? 'With Mobile Money / e-commerce integration.' : 'No e-commerce needed.',
      whatsapp ? 'With WhatsApp automated order-routing.' : '',
      `Estimated tier: ${tierLabel} (~${formatUGX(total)} / ~${formatUSD(total)}).`,
      `Let's discuss our project!`,
    ].filter(Boolean)
    return encodeURIComponent(parts.join(' '))
  }, [pages, ecommerce, whatsapp, tierLabel, total])

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

  return (
    <section id="contact" className="relative border-t" style={{ borderColor: 'var(--surface-border)' }}>
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: contact info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="eyebrow font-body mb-5 text-xs"
              style={{ color: 'var(--accent)' }}
            >
              Let's talk
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-3xl leading-tight sm:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Tell us the shape of the job. We'll tell you what it takes.
            </motion.h2>
            <p className="font-body mt-5 max-w-md text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Every quote gets reviewed by a human before we build anything — the calculator
              alongside is a starting point, not a final invoice.
            </p>

            <div className="mt-9 space-y-4">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                data-cursor-hover
                className="theme-transition flex items-center gap-3 border px-5 py-4"
                style={{
                  borderRadius: 'var(--card-radius)',
                  borderWidth: 'var(--border-width)',
                  borderColor: 'var(--surface-border)',
                  color: 'var(--text-primary)',
                }}
              >
                <Phone size={18} style={{ color: 'var(--accent)' }} />
                <span className="font-body text-sm">+256 762 110 535</span>
              </a>
              <a
                href="mailto:hello@sparta-inc.dev"
                data-cursor-hover
                className="theme-transition flex items-center gap-3 border px-5 py-4"
                style={{
                  borderRadius: 'var(--card-radius)',
                  borderWidth: 'var(--border-width)',
                  borderColor: 'var(--surface-border)',
                  color: 'var(--text-primary)',
                }}
              >
                <Mail size={18} style={{ color: 'var(--accent)' }} />
                <span className="font-body text-sm">hello@sparta-inc.dev</span>
              </a>
            </div>
          </div>

          {/* Right: calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="theme-transition border p-6 sm:p-8"
            style={{
              borderRadius: 'var(--card-radius)',
              borderWidth: 'var(--border-width)',
              borderColor: 'var(--surface-border)',
              backgroundColor: 'var(--bg-elevated)',
              boxShadow: 'var(--brutalist-shadow, var(--shadow-offset))',
            }}
          >
            <p className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
              Budget calculator
            </p>

            {/* Pages slider */}
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <label htmlFor="pages" className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Number of pages
                </label>
                <span className="font-display text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                  {pages}
                </span>
              </div>
              <input
                id="pages"
                type="range"
                min={1}
                max={12}
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="themed-range mt-3 w-full accent-current"
                style={{ color: 'var(--accent)' }}
                data-cursor-hover
              />
            </div>

            {/* Toggles */}
            <div className="mt-6 space-y-3">
              <ToggleRow
                label="E-commerce / Mobile Money integration"
                checked={ecommerce}
                onChange={setEcommerce}
              />
              <ToggleRow
                label="WhatsApp automated order-routing"
                checked={whatsapp}
                onChange={setWhatsapp}
              />
            </div>

            {/* Result */}
            <div
              className="theme-transition mt-7 border p-5"
              style={{
                borderRadius: 'var(--control-radius)',
                borderWidth: 'var(--border-width)',
                borderColor: 'var(--surface-border)',
                backgroundColor: 'var(--accent-soft)',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow font-body text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  Estimated tier
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}>
                  {tierLabel}
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                <span className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {formatUGX(total)}
                </span>
                <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                  ≈ {formatUSD(total)}
                </span>
              </div>
              <p className="font-body mt-2 text-xs leading-normal" style={{ color: 'var(--text-muted)' }}>
                Indicative estimate. Final pricing depends on scope review.
              </p>
            </div>

            <motion.a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="theme-transition mt-6 flex items-center justify-center gap-2 py-4 font-body text-sm font-medium"
              style={{
                borderRadius: 'var(--control-radius)',
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-text)',
                boxShadow: 'var(--brutalist-shadow-sm, none)'
              }}
            >
              <MessageCircle size={17} />
              Send this estimate on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ToggleRow({ label, checked, onChange }) {
  return (
    <button
      type="button"
      data-cursor-hover
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="theme-transition flex w-full items-center justify-between border px-4 py-3.5 text-left"
      style={{
        borderRadius: 'var(--control-radius)',
        borderWidth: 'var(--border-width)',
        borderColor: 'var(--surface-border)',
        backgroundColor: 'var(--bg)',
      }}
    >
      <span className="font-body text-sm" style={{ color: 'var(--text-primary)' }}>
        {label}
      </span>
      <span
        aria-hidden="true"
        className="theme-transition relative h-6 w-11 shrink-0 rounded-full"
        style={{ backgroundColor: checked ? 'var(--accent)' : 'var(--surface-border)' }}
      >
        <span
          className="theme-transition absolute top-0.5 h-5 w-5 rounded-full bg-white shadow"
          style={{ left: checked ? '22px' : '2px' }}
        >
          {checked && (
            <span 
              className="absolute inset-1 rounded-full" 
              style={{ backgroundColor: 'var(--accent)' }} 
            />
          )}
        </span>
      </span>
    </button>
  )
}
