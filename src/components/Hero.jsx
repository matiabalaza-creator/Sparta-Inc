import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Zap, 
  ArrowRight, 
  Code2, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  RefreshCw, 
  Database,
  Terminal,
  Layers
} from 'lucide-react';

const WHATSAPP_NUMBER = '256762110535';

export default function Hero() {
  const canvasRef = useRef(null);
  const [syncState, setSyncState] = useState('compiled');

  // Engine status loop
  useEffect(() => {
    const interval = setInterval(() => {
      setSyncState('compiling');
      setTimeout(() => {
        setSyncState('synced');
        setTimeout(() => setSyncState('compiled'), 1800);
      }, 1200);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  // 60fps Ambient particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initElements();
    };

    window.addEventListener('resize', handleResize);

    let particles = [];

    class DriftParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.vy = -(Math.random() * 0.2 + 0.05);
        this.vx = (Math.random() - 0.5) * 0.1;
        this.alpha = Math.random() * 0.35 + 0.08;
      }

      update() {
        this.y += this.vy;
        this.x += this.vx;
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
          this.y = height + 10;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(96, 165, 250, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initElements() {
      particles = Array.from({ length: 35 }, () => new DriftParticle());
    }

    initElements();

    const render = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-28 bg-[#020617] text-white overflow-hidden min-h-[92vh] flex items-center">
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      />

      {/* Ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Blueprint grid overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* LEFT COLUMN: Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium backdrop-blur-xl shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Sparta Inc Dev • Web &amp; Mobile App Engineers</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Engineering <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
                High-Performance
              </span> <br />
              Websites &amp; Apps
            </motion.h1>

            <motion.p variants={itemVariants} className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              Sparta Inc Dev builds bespoke web portals, scalable mobile apps, and automated Mobile Money payment workflows engineered for Ugandan businesses.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Sparta Inc! 👋 I want to discuss a new web/app build.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 transition-all text-sm sm:text-base border border-blue-400/30"
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
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>MTN &amp; Airtel Native</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Bank-Grade SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Sub-2s Fast Load</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: REVERSE EXPLODED 3D ASSEMBLY SHOWCASE */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] [perspective:1200px]">
            
            {/* Status Syncer Pill */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-40 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-[11px] font-mono text-blue-300 shadow-2xl backdrop-blur-md">
              <RefreshCw className={`w-3 h-3 text-blue-400 ${syncState === 'compiling' ? 'animate-spin' : ''}`} />
              <span>
                {syncState === 'compiling' && 'ASSEMBLING UI STACK...'}
                {syncState === 'synced' && 'SYNCING ROUTE: /api/momo'}
                {syncState === 'compiled' && 'STATUS: 100% RESPONSIVE ENGINE'}
              </span>
            </div>

            {/* 3D Assembly Container */}
            <div className="relative w-full max-w-md h-[410px] mt-6">
              
              {/* Layer 1 (Backend Route Layer - Snaps from top-left) */}
              <motion.div
                initial={{ y: -50, x: -30, opacity: 0, rotateX: 25, rotateY: -15 }}
                animate={{ y: 0, x: 0, opacity: 1, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.2 }}
                className="absolute top-0 left-2 right-10 p-3 rounded-xl bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-xl flex items-center justify-between z-10"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-300">/api/v1/checkout</p>
                    <p className="text-[10px] text-emerald-400 font-semibold">PostgreSQL · 24ms Response</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                  200 OK
                </span>
              </motion.div>

              {/* Layer 2 (Core Dashboard Frame - Main Assembly Hub) */}
              <motion.div
                initial={{ scale: 0.82, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-14 left-0 right-0 p-5 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-blue-950/40 border border-slate-700/80 shadow-2xl shadow-blue-500/10 backdrop-blur-xl z-20"
              >
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                    <Terminal className="w-3 h-3 text-blue-400" />
                    spartaincdev.com/app
                  </div>
                </div>

                {/* Dashboard Metrics */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Daily MoMo Volume</p>
                      <p className="text-base font-extrabold text-white mt-0.5">UGX 8,450,000</p>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      +34.2%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/60">
                      <p className="text-[9px] text-slate-400">SEO Search Rank</p>
                      <p className="text-xs font-bold text-blue-400 mt-0.5">Top #1 Kampala</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/60">
                      <p className="text-[9px] text-slate-400">Mobile Conversion</p>
                      <p className="text-xs font-bold text-emerald-400 mt-0.5">99.2% Completed</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 3 (Floating Payment Layer - Snaps from bottom-right) */}
              <motion.div
                initial={{ y: 50, x: 30, opacity: 0, rotateX: -20, rotateY: 15 }}
                animate={{ y: 0, x: 0, opacity: 1, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.9, delay: 0.6, type: "spring", bounce: 0.2 }}
                className="absolute bottom-3 right-0 left-12 p-3.5 rounded-xl bg-slate-900/95 border border-blue-500/40 shadow-2xl backdrop-blur-xl z-30 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">MTN &amp; Airtel MoMo API</p>
                    <p className="text-[10px] text-slate-400">Instant SMS &amp; WhatsApp Receipt</p>
                  </div>
                </div>
                <div className="flex items-center text-emerald-400 text-xs font-semibold gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Synced</span>
                </div>
              </motion.div>

              {/* Layer 4 (Floating Code Badge - Snaps from left) */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-mono text-[10px] font-semibold shadow-xl border border-blue-400/30 flex items-center gap-1.5 z-40"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>&lt;Assembly Complete /&gt;</span>
              </motion.div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
