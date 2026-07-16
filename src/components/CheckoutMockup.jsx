import { motion } from 'framer-motion'
import { ShoppingBag, Check } from 'lucide-react'

export default function CheckoutMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      whileHover={{ rotate: 0, y: -4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="theme-transition relative w-full max-w-sm border p-6"
      style={{
        borderRadius: 'var(--card-radius)',
        borderWidth: 'var(--border-width)',
        borderColor: 'var(--surface-border)',
        backgroundColor: 'var(--bg-elevated)',
        boxShadow: 'var(--shadow-offset)',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag size={16} style={{ color: 'var(--accent)' }} />
          <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
            Checkout
          </span>
        </div>
        <span className="eyebrow font-body text-[10px]" style={{ color: 'var(--text-muted)' }}>
          Live preview
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <Row label="Kitenge tote bag" value="UGX 68,000" />
        <Row label="Delivery — Kampala" value="UGX 5,000" />
      </div>

      <div
        className="mt-4 flex items-center justify-between border-t pt-4"
        style={{ borderColor: 'var(--surface-border)' }}
      >
        <span className="font-display text-sm" style={{ color: 'var(--text-primary)' }}>
          Total
        </span>
        <span className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
          UGX 73,000
        </span>
      </div>

      <div className="mt-5">
        <p className="font-body text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
          Pay with
        </p>
        <div className="flex gap-2">
          <PayBadge label="MTN MoMo" fg="#FFCC08" bg="#0B0F19" />
          <PayBadge label="Airtel Money" fg="#FFFFFF" bg="#ED1C24" />
        </div>
      </div>

      <button
        type="button"
        data-cursor-hover
        className="theme-transition mt-5 flex w-full items-center justify-center gap-2 py-3 font-body text-sm font-medium"
        style={{
          borderRadius: 'var(--control-radius)',
          backgroundColor: 'var(--accent)',
          color: 'var(--accent-text)',
        }}
      >
        <Check size={15} />
        Confirm &amp; pay
      </button>
    </motion.div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </span>
      <span className="font-body text-sm" style={{ color: 'var(--text-primary)' }}>
        {value}
      </span>
    </div>
  )
}

function PayBadge({ label, fg, bg }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-semibold"
      style={{ backgroundColor: bg, color: fg }}
    >
      {label}
    </span>
  )
}
