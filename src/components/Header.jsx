import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Zap, ArrowRight, Code2, MessageSquare, 
  CheckCircle2, ShieldCheck, Sparkles, Database, Terminal, 
  Layers, ArrowLeft, ArrowRight as RightIcon, Check, Activity
} from 'lucide-react';

const WHATSAPP_NUMBER = '256762110535';

const ASSEMBLY_STEPS = [
  {
    id: 1,
    badge: "Step 1: Core Foundation",
    title: "High-Performance Backend",
    description: "Database models, low-latency API routes, and cloud security architecture.",
    tag: "PostgreSQL · 24ms Engine"
  },
  {
    id: 2,
    badge: "Step 2: Local Payment Layer",
    title: "MTN & Airtel MoMo Flow",
    description: "Native Mobile Money API endpoints with instant WhatsApp receipt routing.",
    tag: "MoMo API Live · 100% Native"
  },
  {
    id: 3,
    badge: "Step 3: Client Interface",
    title: "Responsive Glass UI / UX",
    description: "Ultra-fast Next.js/React frontend engineered to load in under 2 seconds across Uganda.",
    tag: "Sub-2s Mobile Delivery"
  },
  {
    id: 4,
    badge: "Step 4: Live Platform",
    title: "Production Deployment",
    description: "Full system assembled: Real-time analytics, local Kampala SEO, and automated ops.",
    tag: "100% Production Ready"
  }
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-progress through the assembly stages
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % ASSEMBLY_STEPS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const nextStep = () => {
    setAutoPlay(false);
    setActiveStep((prev) => (prev + 1) % ASSEMBLY_STEPS.length);
  };

  const prevStep = () => {
    setAutoPlay(false);
    setActiveStep((prev) => (prev - 1 + ASSEMBLY_STEPS.length) % ASSEMBLY_STEPS.length);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#020617] text-white overflow-hidden min-h-[94vh] flex items-center">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Blueprint grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Main Pitch */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium backdrop-blur-xl shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Sparta Inc Dev • Bespoke Software Builders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Engineering <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                High-Performance
              </span> <br />
              Websites &amp; Apps
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              From database architecture to automated Mobile Money checkouts, explore how every layer of your platform is precision-built for Ugandan commerce.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Sparta Inc! 👋 I'd like to discuss a custom web/app build.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm sm:text-base border border-blue-400/30"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Build with Sparta Inc Dev</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-2 bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-slate-800 font-medium px-6 py-3.5 rounded-xl backdrop-blur-md transition-all text-sm sm:text-base hover:border-slate-700"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>MTN &amp; Airtel MoMo[cite: 1]</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Bank-Grade SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Sub-2s Fast Load[cite: 1]</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SEQUENTIAL ASSEMBLY SHOWCASE (LIKE CACAO & CREAM) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Top Step Pill Navigation */}
            <div className="flex items-center justify-between w-full max-w-md mb-4 px-2">
              <div className="flex items-center gap-2">
                {ASSEMBLY_STEPS.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => { setAutoPlay(false); setActiveStep(idx); }}
                    className={`h-2 rounded-full transition-all ${
                      activeStep === idx 
                        ? "w-8 bg-blue-500 shadow-lg shadow-blue-500/50" 
                        : "w-2 bg-slate-800 hover:bg-slate-700"
                    }`}
                    aria-label={`Jump to stage ${step.id}`}
                  />
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevStep}
                  className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={nextStep}
                  className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <RightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Central Assembly Stage (3D Perspective Viewport) */}
            <div className="relative w-full max-w-md h-[390px] rounded-3xl bg-slate-950/80 border border-slate-800/90 shadow-2xl backdrop-blur-2xl p-6 overflow-hidden flex flex-col justify-between">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2.5 py-0.5 rounded-full">
                  {ASSEMBLY_STEPS[activeStep].badge}
                </span>
              </div>

              {/* Assembly Stage Stack with Drop-in Animations */}
              <div className="relative h-44 my-auto flex items-center justify-center [perspective:1000px]">
                
                {/* LAYER 1: Core Database Plate (Visible on Step >= 0) */}
                <motion.div
                  initial={{ y: -80, opacity: 0, scale: 0.85 }}
                  animate={{ 
                    y: activeStep >= 0 ? 0 : -80, 
                    opacity: activeStep >= 0 ? 1 : 0,
                    scale: activeStep >= 0 ? 1 : 0.85
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="w-full p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-slate-200">/api/v1/database</p>
                      <p className="text-[10px] text-emerald-400">PostgreSQL Schema Connected</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    200 OK
                  </span>
                </motion.div>

                {/* LAYER 2: Payment Gateway Drizzle (Drops in on Step >= 1) */}
                <AnimatePresence>
                  {activeStep >= 1 && (
                    <motion.div
                      initial={{ y: -100, opacity: 0, scale: 0.9, rotateX: 20 }}
                      animate={{ y: 22, opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ y: -60, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 240, damping: 18 }}
                      className="absolute left-3 right-3 p-3.5 rounded-xl bg-slate-900/95 border border-blue-500/40 shadow-2xl backdrop-blur-xl flex items-center justify-between z-20"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">MTN &amp; Airtel MoMo API[cite: 1]</p>
                          <p className="text-[10px] text-slate-400">Instant Automated SMS &amp; WhatsApp</p>
                        </div>
                      </div>
                      <div className="flex items-center text-emerald-400 text-xs font-bold gap-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* LAYER 3: Responsive UI Glass Screen (Snaps in on Step >= 2) */}
                <AnimatePresence>
                  {activeStep >= 2 && (
                    <motion.div
                      initial={{ y: 100, opacity: 0, scale: 0.8 }}
                      animate={{ y: -30, opacity: 1, scale: 1 }}
                      exit={{ y: 80, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="absolute inset-x-2 p-3.5 rounded-2xl bg-gradient-to-r from-blue-900/80 to-slate-900/90 border border-blue-400/40 shadow-2xl backdrop-blur-2xl z-30 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Interactive Client UI</p>
                          <p className="text-[10px] text-blue-200">Sub-2s Mobile Loading Ready[cite: 1]</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono bg-blue-600/30 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded">
                        Active
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* LAYER 4: Final Analytics Crown & SEO Badge (Drops on Step 3) */}
                <AnimatePresence>
                  {activeStep === 3 && (
                    <motion.div
                      initial={{ scale: 0, rotate: -15, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px] shadow-lg shadow-emerald-500/30 flex items-center gap-1 z-40"
                    >
                      <Activity className="w-3 h-3 text-slate-950" />
                      <span>Top #1 Kampala SEO[cite: 1]</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Bottom Step Description Banner */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-bold text-white">{ASSEMBLY_STEPS[activeStep].title}</h4>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">{ASSEMBLY_STEPS[activeStep].tag}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{ASSEMBLY_STEPS[activeStep].description}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
