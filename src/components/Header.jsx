import { useEffect, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const WHATSAPP_NUMBER = '256762110535'
const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="theme-transition fixed inset-x-0 top-0 z-40 border-b"
      style={{
        borderColor: scrolled ? 'var(--surface-border)' : 'transparent',
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg) 88%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#top"
          data-cursor-hover
          className="font-display text-lg tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Sparta <span style={{ color: 'var(--accent)' }}>Inc</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="font-body text-sm transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="theme-transition hidden items-center gap-2 border px-4 py-2 font-body text-sm md:inline-flex"
          style={{
            borderRadius: 'var(--control-radius)',
            borderWidth: 'var(--border-width)',
            borderColor: 'var(--surface-border)',
            color: 'var(--text-primary)',
          }}
        >
          <Phone size={14} style={{ color: 'var(--accent)' }} />
          +256 762 110 535
        </a>

        <button
          type="button"
          data-cursor-hover
          className="md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
          style={{ color: 'var(--text-primary)' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="theme-transition border-t px-5 pb-6 pt-2 md:hidden"
          style={{ borderColor: 'var(--surface-border)', backgroundColor: 'var(--bg)' }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body py-3 text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body mt-2 flex items-center justify-center gap-2 border py-3 text-sm"
              style={{
                borderRadius: 'var(--control-radius)',
                borderColor: 'var(--surface-border)',
                color: 'var(--text-primary)',
              }}
            >
              <Phone size={14} style={{ color: 'var(--accent)' }} />
              Call / WhatsApp: +256 762 110 535
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
