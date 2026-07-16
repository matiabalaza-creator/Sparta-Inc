/**
 * "Before" panels are deliberately generic — grey, cramped, dated — regardless
 * of active theme, to sell the contrast. "After" panels read CSS variables so
 * they always match whichever brand identity is currently active.
 */

export function DatedTemplatePanel({ kind = 'salon' }) {
  return (
    <div className="flex h-full w-full flex-col bg-[#E7E5E0] p-4 font-sans">
      <div className="flex items-center justify-between rounded bg-[#CFCCC4] px-3 py-2">
        <div className="h-3 w-20 rounded bg-[#9A968C]" />
        <div className="flex gap-2">
          <div className="h-2 w-8 rounded bg-[#9A968C]" />
          <div className="h-2 w-8 rounded bg-[#9A968C]" />
          <div className="h-2 w-8 rounded bg-[#9A968C]" />
        </div>
      </div>
      <div className="mt-3 flex-1 rounded bg-[#D8D5CD] p-3">
        <div className="h-4 w-2/3 rounded bg-[#B4B0A5]" />
        <div className="mt-2 h-2 w-1/2 rounded bg-[#C0BCB1]" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-14 rounded bg-[#C0BCB1]" />
          <div className="h-14 rounded bg-[#C0BCB1]" />
          <div className="h-14 rounded bg-[#C0BCB1]" />
        </div>
        <div className="mt-3 h-6 w-24 rounded bg-[#9A968C]" />
      </div>
      <span className="mt-2 text-center text-[10px] text-[#8A867B]">
        Generic {kind} template · slow, cluttered, off-brand
      </span>
    </div>
  )
}

export function CustomBuildPanel({ headline = 'Book your slot' }) {
  return (
    <div
      className="theme-transition flex h-full w-full flex-col p-4"
      style={{ backgroundColor: 'var(--bg-elevated)' }}
    >
      <div
        className="flex items-center justify-between border-b pb-2.5"
        style={{ borderColor: 'var(--surface-border)' }}
      >
        <div className="font-display text-xs" style={{ color: 'var(--text-primary)' }}>
          Brand
        </div>
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-1.5 w-6 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
          ))}
        </div>
      </div>
      <div className="mt-3 flex-1">
        <div className="font-display text-sm" style={{ color: 'var(--text-primary)' }}>
          {headline}
        </div>
        <div className="mt-1.5 h-1.5 w-2/3 rounded-full" style={{ backgroundColor: 'var(--text-muted)', opacity: 0.5 }} />
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="theme-transition aspect-square"
              style={{
                borderRadius: 'var(--control-radius)',
                border: '1px solid var(--surface-border)',
                background:
                  i === 1
                    ? 'var(--accent-soft)'
                    : 'transparent',
              }}
            />
          ))}
        </div>
        <div
          className="theme-transition mt-4 inline-flex rounded px-4 py-1.5 text-[10px] font-medium"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)', borderRadius: 'var(--control-radius)' }}
        >
          Confirm
        </div>
      </div>
      <span className="mt-2 text-center text-[10px]" style={{ color: 'var(--text-muted)' }}>
        Custom-built · fast, on-brand, converts
      </span>
    </div>
  )
}
