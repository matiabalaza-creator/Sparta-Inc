import { motion } from 'framer-motion'
import { ArrowDownRight, MessageCircle, Smartphone, Zap, ShieldCheck, Layers } from 'lucide-react'

const WHATSAPP_NUMBER = '256762110535'

// Animation variant for subtle camera drift
const cameraDrift = {
  animate: {
    x: [0, 5, 0],
    y: [0, 3, 0],
    transition: {
      duration: 15,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

export default function Hero() {
  const conversionCards = [
    {
      icon: <Layers className="h-5 w-5" style={{ color: 'var(--accent)' }} />,
      title: "Functional Web & Mobile Apps",
      desc: "We don't just design landing pages. We build powerful, custom-engineered digital software, internal dashboards, and utility portals tailored to your operations."
    },
    {
      icon: <Smartphone className="h-5 w-5" style={{ color: 'var(--accent)' }} />,
      title: "Local Commerce Integrations",
      desc: "Seamless integration with MTN MoMo, Airtel Money API, and automated WhatsApp order routing designed to convert Ugandan traffic into passive revenue."
    },
    {
      icon: <Zap className="h-5 w-5" style={{ color: 'var(--accent)' }} />,
      title: "Performance-Obsessed Speed",
      desc: "Zero bloated software or heavy templates. Our codebases load instantly across Kampala and upcountry—even on slow mobile connections—to prevent customer drop-off."
    }
  ]

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      
      {/* 1. Base Dark Background Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'var(--bg)', // Uses your dark theme background
          opacity: 0.98
        }}
      />

      {/* 2. Cyber Infrastructure Animation Container (Layered above base bg) */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        variants={cameraDrift}
        animate="animate"
      >
        {/* Fine Animated Grid Backdrop */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(var(--surface-border) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)' // Prevents grid from going to the edges
          }}
        />

        {/* --- Animated Data Infrastructure Nodes & Flows --- */}
        <svg
          className="absolute inset-0 w-full h-full opacity-60"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defined glow effect filter */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Connected Server Nodes */}
          <g filter="url(#glow)">
            {/* Node 1 */}
            <circle cx="200" cy="150" r="4" style={{ fill: 'var(--accent)' }} />
            <circle cx="200" cy="150" r="10" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
            {/* Node 2 (Center-Left) */}
            <circle cx="500" cy="500" r="3" style={{ fill: 'var(--accent)' }} />
            <circle cx="500" cy="500" r="8" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
            {/* Node 3 (Top-Right) */}
            <circle cx="1200" cy="250" r="4" style={{ fill: 'var(--accent)' }} />
            <circle cx="1200" cy="250" r="10" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
          </g>

          {/* Connected Network Path & Pulsing Data Stream */}
          <motion.path
            d="M200,150 C250,200 450,450 500,500" // Path 1: Top-Left to Center
            stroke="var(--accent)"
            strokeWidth="0.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
          />
          <motion.path
            d="M500,500 C800,550 1150,300 1200,250" // Path 2: Center to Top-Right
            stroke="var(--accent)"
            strokeWidth="0.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 15, ease: 'easeInOut', repeat: Infinity, delay: 6 }}
          />
        </svg>

        {/* --- Floating Volumetric Light Particles --- */}
        {[...Array(20)].map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: 'var(--accent)',
              boxShadow: '0 0 10px 1px var(--accent)'
            }}
            initial={{ opacity: 0, x: Math.random() * 1440, y: Math.random() * 800 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: [null, Math.random() * 1440],
              y: [null, Math.random() * 800],
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              ease: 'easeInOut',
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          />
        ))}

        {/* --- Soft Moving Volumetric Light Beam Overlay --- */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at 70% 30%, transparent 20%, var(--bg) 95%)',
          }}
          animate={{
            background: [
              'radial-gradient(circle at 70% 30%, transparent 20%, var(--bg) 95%)',
              'radial-gradient(circle at 30% 70%, transparent 20%, var(--bg) 95%)',
              'radial-gradient(circle at 70% 30%, transparent 20%, var(--bg) 95%)',
            ]
          }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        />
      </motion.div>

      {/* --- Main Hero Content (Layered above animation with z-10) --- */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10">
        {/* Left Side: Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow font-body mb-6 inline-flex items-center gap-2 text-xs"
            style={{ color: 'var(--accent)' }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            Bespoke Web Design &amp; Custom App Development · Uganda
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Uganda's Premier Website Builders &amp; Custom App Developers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            We transform business operations across East Africa with high-performance custom websites and functional software applications. Driven by automated workflow infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="theme-transition inline-flex items-center gap-2 px-6 py-3.5 font-body text-sm font-medium"
              style={{
                borderRadius: 'var(--control-radius)',
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-text)',
              }}
            >
              <MessageCircle size={16} />
              Build an App / Website
            </a>
            <a
              href="#work"
              data-cursor-hover
              className="theme-transition inline-flex items-center gap-2 border px-6 py-3.5 font-body text-sm"
              style={{
                borderRadius: 'var(--control-radius)',
                borderWidth: 'var(--border-width)',
                borderColor: 'var(--surface-border)',
                color: 'var(--text-primary)',
              }}
            >
              See the work
              <ArrowDownRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Value Cards */}
        <div className="flex flex-col gap-4">
          {conversionCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
              className="theme-transition flex gap-4 p-5 border"
              style={{
                borderRadius: 'var(--control-radius)',
                borderWidth: 'var(--border-width)',
                borderColor: 'var(--surface-border)',
                backgroundColor: 'color-mix(in srgb, var(--bg) 95%, white 5%)',
                boxShadow: 'var(--brutalist-shadow, none)'
              }}
            >
              <div className="flex-shrink-0 mt-0.5">{card.icon}</div>
              <div>
                <h3 
                  className="font-display text-base font-semibold mb-1" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  {card.title}
                </h3>
                <p 
                  className="font-body text-xs leading-relaxed" 
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
