import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Palette, X, Check } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function StyleSwitcher() {
  const { themeId, setTheme, themes } = useTheme()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8 max-md:left-1/2 max-md:right-auto max-md:-translate-x-1/2">
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-label="Style switcher panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="theme-transition mb-3 w-[min(88vw,340px)] overflow-hidden border"
            style={{
              borderRadius: 'var(--card-radius)',
              borderWidth: 'var(--border-width)',
              borderColor: 'var(--surface-border)',
              backgroundColor: 'var(--bg-elevated)',
              boxShadow: 'var(--shadow-offset)',
            }}
          >
            <div className="border-b px-5 py-4" style={{ borderColor: 'var(--surface-border)' }}>
              <p className="eyebrow font-body text-[11px]" style={{ color: 'var(--text-muted)' }}>
                Choose an identity
              </p>
              <p className="font-display text-base mt-1" style={{ color: 'var(--text-primary)' }}>
                One build. Three brands.
              </p>
            </div>

            <div className="p-2">
              {themes.map((t) => {
                const active = t.id === themeId
                return (
                  <button
                    key={t.id}
                    type="button"
                    data-cursor-hover
                    aria-pressed={active}
                    onClick={() => setTheme(t.id)}
                    className="theme-transition group flex w-full items-start gap-3 px-3 py-3 text-left"
                    style={{
                      borderRadius: 'var(--control-radius)',
                      backgroundColor: active ? 'var(--accent-soft)' : 'transparent',
                    }}
                  >
                    <span
                      className="theme-transition mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
                      style={{
                        borderColor: active ? 'var(--accent)' : 'var(--surface-border)',
                        backgroundColor: active ? 'var(--accent)' : 'transparent',
                      }}
                      aria-hidden="true"
                    >
                      {active && <Check size={12} strokeWidth={3} style={{ color: 'var(--accent-text)' }} />}
                    </span>
                    <span>
                      <span
                        className="font-display block text-sm"
                        style={{ color: 'var(--text-primary)', fontWeight: 600 }}
                      >
                        {t.label}
                      </span>
                      <span className="font-body block text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {t.blurb}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        data-cursor-hover
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close style switcher' : 'Open style switcher'}
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.94 }}
        className="theme-transition flex items-center gap-2 border px-5 py-3.5 font-body text-sm font-medium shadow-lg"
        style={{
          borderRadius: open ? 'var(--control-radius)' : '999px',
          borderWidth: 'var(--border-width)',
          borderColor: 'var(--surface-border)',
          backgroundColor: 'var(--bg-elevated)',
          color: 'var(--text-primary)',
        }}
      >
        {open ? <X size={16} /> : <Palette size={16} style={{ color: 'var(--accent)' }} />}
        <span className="hidden sm:inline">{open ? 'Close' : 'Style Switcher'}</span>
        <span
          aria-hidden="true"
          className="ml-1 h-2 w-2 rounded-full"
          style={{ backgroundColor: 'var(--accent)' }}
        />
      </motion.button>
    </div>
  )
}
