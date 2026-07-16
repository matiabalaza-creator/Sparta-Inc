export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--surface-border)' }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-center md:flex-row md:px-10 md:text-left">
        <p className="font-display text-sm" style={{ color: 'var(--text-primary)' }}>
          Sparta <span style={{ color: 'var(--accent)' }}>Inc</span>
        </p>
        <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Sparta Inc Developers · Kampala, Uganda
        </p>
      </div>
    </footer>
  )
}
