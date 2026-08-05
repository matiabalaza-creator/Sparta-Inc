import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, ArrowRight, Code, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const featureCards = [
    {
      icon: <Code className="w-5 h-5 text-blue-400" />,
      title: "Functional Web & Mobile Apps",
      desc: "Custom-engineered digital software, internal dashboards, and utility portals built for scale."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      title: "Local Commerce Integrations",
      desc: "Native MTN MoMo, Airtel Money API, and automated WhatsApp ordering for high conversion."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Performance-Obsessed Speed",
      desc: "Lightweight codebases loading in under 2 seconds across Kampala and upcountry networks."
    }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0b0f19] text-white overflow-hidden">
      {/* Subtle Glowing Background Mesh (No scattered dots) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* LEFT COLUMN: Main Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Tagline Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Bespoke Web Design & Custom Apps • Kampala, Uganda</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Uganda's Premier <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
                Digital Systems Builder
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p variants={itemVariants} className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              We transform business operations across East Africa with high-performance custom websites, mobile applications, and automated workflow infrastructure.
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/256764110535"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all text-sm sm:text-base"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Build an App / Website</span>
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 font-semibold px-6 py-3.5 rounded-xl transition-all text-sm sm:text-base"
              >
                <span>See Our Solutions</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
            </motion.div>

            {/* Quick Trust Badges */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-gray-800/80 grid grid-cols-3 gap-4 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>MTN & Airtel MoMo Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Sub-2s Load Times</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Glassmorphic Feature Cards */}
          <div className="lg:col-span-5 space-y-4">
            {featureCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800 hover:border-blue-500/40 backdrop-blur-md shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gray-800/80 border border-gray-700/50 flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{card.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
