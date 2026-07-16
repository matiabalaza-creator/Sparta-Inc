import { useCallback, useRef, useState } from 'react'
import { GripVertical } from 'lucide-react'

/**
 * Drag-to-reveal before/after comparison. Both panels are CSS-generated
 * wireframes (no stock imagery) styled to look like a dated template vs a
 * custom-built interface, in the "before" case deliberately theme-agnostic
 * (grey, generic) to sell the contrast against our "after" panel which is
 * fully theme-aware.
 */
export default function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50)
  const trackRef = useRef(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
  }

  return (
    <div
      ref={trackRef}
      className="theme-transition relative aspect-[4/3] w-full select-none overflow-hidden border sm:aspect-[16/10]"
      style={{
        borderRadius: 'var(--card-radius)',
        borderWidth: 'var(--border-width)',
        borderColor: 'var(--surface-border)',
      }}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* AFTER (base layer, full width) */}
      <div className="absolute inset-0">{after}</div>

      {/* BEFORE (clipped layer, full size but visually clipped so proportions never distort) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {before}
      </div>

      {/* Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        className="absolute top-0 bottom-0 z-10 flex w-9 -translate-x-1/2 cursor-ew-resize items-center justify-center"
        style={{ left: `${pos}%` }}
        data-cursor-hover
      >
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2" style={{ backgroundColor: 'var(--accent)' }} />
        <div
          className="relative flex h-9 w-9 items-center justify-center rounded-full shadow-lg"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }}
        >
          <GripVertical size={16} />
        </div>
      </div>

      <span
        className="absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide"
        style={{ backgroundColor: 'rgba(0,0,0,0.55)', color: '#fff' }}
      >
        Before
      </span>
      <span
        className="absolute right-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide"
        style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }}
      >
        After
      </span>
    </div>
  )
}
