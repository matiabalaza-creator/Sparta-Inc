import { useTheme } from '../context/ThemeContext.jsx'

/**
 * No stock imagery anywhere on this site. Instead, each theme gets its own
 * generative backdrop built from CSS gradients / SVG, matching the active
 * palette automatically since it reads CSS custom properties.
 */
export default function ThemedBackdrop({ variant = 'grid', className = '' }) {
  const { themeId } = useTheme()

  if (variant === 'particles') {
    const dots = Array.from({ length: themeId === 'brutalist' ? 40 : 60 })
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
        <svg className="h-full w-full opacity-60" preserveAspectRatio="xMidYMid slice">
          {dots.map((_, i) => {
            const cx = `${(i * 37) % 100}%`
            const cy = `${(i * 53) % 100}%`
            const r = 1 + (i % 4)
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill="var(--accent)"
                opacity={0.15 + (i % 5) * 0.05}
              />
            )
          })}
        </svg>
      </div>
    )
  }

  // grid variant
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(var(--surface-border) 1px, transparent 1px), linear-gradient(90deg, var(--surface-border) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)',
        opacity: 0.5,
      }}
    />
  )
}
