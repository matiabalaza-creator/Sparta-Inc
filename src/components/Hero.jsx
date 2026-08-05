import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight, 
  Code2, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  RefreshCw, 
  Layers, 
  Wifi, 
  CreditCard, 
  Check, 
  Laptop
} from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);
  const [syncState, setSyncState] = useState('compiled'); // 'compiling' | 'synced' | 'compiled'
  const [activeTab, setActiveTab] = useState('checkout');

  // Cycle through live state animations every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSyncState('compiling');
      setTimeout(() => {
        setSyncState('synced');
        setTimeout(() => setSyncState('compiled'), 1800);
      }, 1200);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Background Canvas: Particle Drift + Subtle Radial Glows + Grid Lines
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
      particles = Array.from({ length: 40 }, () => new DriftParticle());
    }

    initElements();

    const render = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // Draw floating particles
      particles.forEach(p => {
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
      
      {/* 1. Dynamic Particle Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      />

      {/* 2. Soft Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 3. Modern Blueprint Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at 50% 40%, black 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 25%, transparent 80%)'
        }}
      />

      {/* Top & Bottom Vignette Fades */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none" />

      {/* HERO CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* LEFT COLUMN: Main Pitch & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium backdrop-blur-xl shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Full-Stack Web & Mobile App Engineers • Kampala</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Engineering <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
                High-Performance
              </span> <br />
              Websites & Apps
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={itemVariants} className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              We design and build bespoke web portals, scalable mobile apps, and automated Mobile Money payment workflows engineered for Ugandan businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="https://wa.me/256764110535"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 transition-all text-sm sm:text-base border border-blue-400/30"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Build an App / Website</span>
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center space-x-2 bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-slate-800 font-medium px-6 py-3.5 rounded-xl backdrop-blur-md transition-all text-sm sm:text-base hover:border-slate-700"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </motion.div>

            {/* Key Assurance Indicators */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>MTN & Airtel MoMo Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Sub-2s Fast Load</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: THE DUAL-VIEWPORT ENGINE (WEB + MOBILE SYNC) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Outer Stage Glow */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-2xl -z-10" />

            {/* SYNC INDICATOR BADGE */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/90 border border-blue-500/30 text-[11px] font-mono text-blue-300 shadow-xl backdrop-blur-md">
              <RefreshCw className={`w-3 h-3 text-blue-400 ${syncState === 'compiling' ? 'animate-spin' : ''}`} />
              <span>
                {syncState === 'compiling' && 'COMPILING WEB & MOBILE UI...'}
                {syncState === 'synced' && 'SYNCING API ROUTE: /api/momo'}
                {syncState === 'compiled' && 'STATUS: 100% RESPONSIVE ENGINE'}
              </span>
            </div>

            {/* MAIN CONTAINER: DUAL VIEWPORTS */}
            <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/11] flex items-center justify-between p-2 sm:p-4">
              
              {/* 1. WEB BROWSER FRAME (Left/Back Layer) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-[68%] sm:w-[72%] rounded-xl bg-slate-900/80 border border-slate-700/70 shadow-2xl backdrop-blur-2xl overflow-hidden z-10"
              >
                {/* Browser Top Bar */}
                <div className="px-3 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  
                  {/* Address Bar */}
                  <div className="flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono w-3/5 justify-center">
                    <Globe className="w-2.5 h-2.5 text-blue-400" />
                    <span className="truncate">spartaincdev.com/app</span>
                  </div>

                  <div className="flex items-center space-x-1 text-slate-500">
                    <Laptop className="w-3 h-3" />
                  </div>
                </div>

                {/* Browser Live Mock Web App UI */}
                <div className="p-3 sm:p-4 space-y-3 font-sans text-left">
                  {/* Web Header Row */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs">S</div>
                      <div className="h-2 w-16 bg-slate-700 rounded-full" />
                    </div>
                    <div className="flex space-x-1.5">
                      <div className="h-2 w-8 bg-slate-800 rounded-full" />
                      <div className="h-2 w-8 bg-slate-800 rounded-full" />
                      <div className="h-2 w-10 bg-blue-500/40 rounded-full" />
                    </div>
                  </div>

                  {/* Web Hero Mock Banner */}
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-900/30 to-slate-800/40 border border-blue-500/20 space-y-1.5">
                    <div className="flex items-center space-x-1 text-[10px] text-blue-400 font-mono">
                      <Code2 className="w-3 h-3" />
                      <span>Custom Platform Blueprint</span>
                    </div>
                    <div className="h-2.5 w-3/4 bg-slate-200/90 rounded-full" />
                    <div className="h-2 w-1/2 bg-slate-400/60 rounded-full" />
                  </div>

                  {/* Web Interactive Component Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-slate-400">Web Dashboard</span>
                        <Zap className="w-2.5 h-2.5 text-amber-400" />
                      </div>
                      <div className="h-2 w-full bg-slate-700 rounded-full" />
                      <div className="h-1.5 w-2/3 bg-slate-700/60 rounded-full" />
                    </div>

                    <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-slate-400">MoMo Checkout</span>
                        <CreditCard className="w-2.5 h-2.5 text-sky-400" />
                      </div>
                      <div className="h-2 w-4/5 bg-blue-500/50 rounded-full" />
                      <div className="h-1.5 w-1/2 bg-slate-700/60 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CONNECTING PULSE BEAM (Connecting Web to Mobile Viewport) */}
              <div className="absolute left-[58%] top-1/2 -translate-y-1/2 w-16 h-1 z-20 pointer-events-none hidden sm:block">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-sky-400 opacity-60 rounded-full blur-[1px]" />
                <motion.div 
                  animate={{ x: [0, 48, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-3 h-3 rounded-full bg-white shadow-lg shadow-sky-400/80 -mt-2 -ml-1"
                />
              </div>

              {/* 2. MOBILE APP FRAME (Right/Front Layer) */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-[42%] sm:w-[40%] rounded-2xl bg-slate-950 border-2 border-slate-700/80 shadow-2xl backdrop-blur-2xl overflow-hidden z-20 absolute right-1 sm:right-2 top-4 sm:top-2"
              >
                {/* Mobile Phone Speaker Notch */}
                <div className="pt-2 pb-1 bg-slate-950 flex justify-center items-center">
                  <div className="w-12 h-1.5 bg-slate-800 rounded-full" />
                </div>

                {/* Mobile Screen Header */}
                <div className="px-3 py-1.5 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between text-[10px]">
                  <span className="font-mono text-slate-300 font-bold">SpartaApp</span>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Wifi className="w-2.5 h-2.5 text-blue-400" />
                    <span className="text-[8px]">5G</span>
                  </div>
                </div>

                {/* Mobile Screen Body */}
                <div className="p-2.5 space-y-2 text-left">
                  
                  {/* Live Mobile MoMo Card Component */}
                  <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-500/30 space-y-1.5 shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-blue-300 flex items-center gap-1">
                        <Smartphone className="w-2.5 h-2.5 text-sky-400" />
                        MTN / Airtel API
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[8px] font-mono flex items-center gap-0.5">
                        <Check className="w-2 h-2" /> Live
                      </span>
                    </div>

                    <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800 text-[9px] space-y-0.5 font-mono">
                      <div className="text-slate-400">Amount: <span className="text-white font-bold">UGX 150,000</span></div>
                      <div className="text-slate-500 text-[8px]">Status: Payment Confirmed</div>
                    </div>
                  </div>

                  {/* Mobile Navigation Wireframe Cards */}
                  <div className="space-y-1.5">
                    <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-4 h-4 rounded bg-slate-800 flex items-center justify-center text-slate-400 text-[8px]"><Layers className="w-2.5 h-2.5" /></div>
                        <div className="h-1.5 w-12 bg-slate-700 rounded-full" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>

                    <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-4 h-4 rounded bg-slate-800 flex items-center justify-center text-slate-400 text-[8px]"><Code2 className="w-2.5 h-2.5" /></div>
                        <div className="h-1.5 w-10 bg-slate-700 rounded-full" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-slate-700" />
                    </div>
                  </div>

                  {/* Mobile Action Button */}
                  <div className="pt-0.5">
                    <div className="w-full py-1 rounded-lg bg-blue-600 text-center text-[9px] font-bold text-white shadow-md">
                      Confirm Action
                    </div>
                  </div>

                </div>

                {/* Mobile Bottom Navigation Bar Mock */}
                <div className="py-1 px-4 bg-slate-950 border-t border-slate-900 flex justify-around items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
              </motion.div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
