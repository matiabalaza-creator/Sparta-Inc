import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cx = useMotionValue(-100)
  const cy = useMotionValue(-100)
  const springX = useSpring(cx, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(cy, { stiffness: 500, damping: 40, mass: 0.4 })
  const frame = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(canHover)
    if (!canHover) return

    document.body.setAttribute('data-cursor', 'custom')

    const move = (e) => {
      cx.set(e.clientX - 16)
      cy.set(e.clientY - 16)

      const target = e.target.closest?.('[data-cursor-hover]')
      setIsHovering(Boolean(target))
    }

    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      document.body.removeAttribute('data-cursor')
    }
  }, [cx, cy])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      ref={frame}
      style={{ translateX: springX, translateY: springY }}
      animate={{
        width: isHovering ? 56 : 32,
        height: isHovering ? 56 : 32,
        opacity: 1,
      }}
      initial={{ opacity: 0, width: 32, height: 32 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full mix-blend-difference"
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          backgroundColor: 'var(--accent)',
          opacity: isHovering ? 0.9 : 0.6,
          transition: 'opacity 0.2s ease',
        }}
      />
    </motion.div>
  )
}
