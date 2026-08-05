import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, ArrowRight, Code, MessageSquare, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

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

    // --- ULTRA-PREMIUM ENTERPRISE CANVAS ENGINE ---
    let orbs = [];
    let particles = [];
    let time = 0;

    class FloatingOrb {
      constructor(color, radius, speedX, speedY, initialAngle) {
        this.color = color;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.angle = initialAngle;
        this.x = width * 0.5;
        this.y = height * 0.5;
      }

      update(t) {
        this.angle += 0.003;
        this.x = width * 0.5 + Math.sin(this.angle * this.speedX) * (width * 0.25);
        this.y = height * 0.4 + Math.cos(this.angle * this.speedY) * (height * 0.2);
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 10,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(2, 6, 23, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class MicroParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50;
        this.size = Math.random() * 1.5 + 0.5;
        this.vy = -(Math.random() * 0.25 + 0.1);
        this.vx = (Math.random() - 0.5) * 0.15;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.maxAlpha = this.alpha;
        this.pulseSpeed = 0.01 + Math.random() * 0.02;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += this.vy;
        this.x += this.vx;
        this.pulsePhase += this.pulseSpeed;
        this.alpha = (Math.sin(this.pulsePhase) * 0.5 + 0.5) * this.maxAlpha;

        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset();
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
      orbs = [
        new FloatingOrb('rgba(37, 99, 235, 0.18)', width * 0.45, 0.8, 0.6, 0),
        new FloatingOrb('rgba(30, 41, 59, 0.35)', width * 0.5, 0.5, 0.9, 2.5),
        new FloatingOrb('rgba(96, 165, 250, 0.12)', width * 0.35, 1.1, 0.7, 4.2)
      ];

      particles = Array.from({ length: 35 }, () => new MicroParticle());
    }

    initElements();

    // Render loop
    const render = () => {
      time += 0.005;
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Slow Floating Ambient Orbs
      orbs.forEach(orb => {
        orb.update(time);
        orb.draw();
      });

      // 2. Slow Volumetric Light Ray Sweep
      const rayAngle = Math.sin(time * 0.5) * 0.15;
      const rayGradient = ctx.createLinearGradient(0, 0, width, height);
      rayGradient.addColorStop(0, 'rgba(2, 6, 23, 0)');
      rayGradient.addColorStop(0.45, 'rgba(37, 99, 235, 0.03)');
      rayGradient.addColorStop(0.55, 'rgba(96, 165, 250, 0.05)');
      rayGradient.addColorStop(0.65, 'rgba(37, 99, 235, 0.02)');
      rayGradient.addColorStop(1, 'rgba(2, 6, 23, 0)');

      ctx.save();
      ctx.translate(width * 0.5, height * 0.5);
      ctx.rotate(rayAngle);
      ctx.fillStyle = rayGradient;
      ctx.fillRect(-width, -height, width * 2, height * 2);
      ctx.restore();

      // 3. Draw Micro Drift Particles
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
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const featureCards = [
    {
      icon: <Code className="w-5 h-5 text-blue-400" />,
      title: "Functional Web & Mobile Apps",
      desc: "Custom-engineered digital software, internal dashboards, and utility portals built for scale."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-sky-400" />,
      title: "Local Commerce Integrations",
      desc: "Native MTN MoMo, Airtel Money API, and automated WhatsApp ordering for high conversion."
    },
    {
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
      title: "Performance-Obsessed Speed",
      desc: "Lightweight codebases loading in under 2 seconds across Kampala and upcountry networks."
    }
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-[#020617] text-white overflow-hidden min-h-[88vh] flex items-center">
      
      {/* Dynamic Ambient Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      />

      {/* Ultra-Minimal Grid Lines Overlay with Center Glow Mask */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 40%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 30%, transparent 80%)'
        }}
      />

      {/* Soft Vignette Border Fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none" />

      {/* MAIN HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >
          {/* LEFT COLUMN: Enterprise Headline & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium tracking-wide backdrop-blur-xl shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Bespoke Web Design & Custom Apps • Kampala, Uganda</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Uganda's Premier <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
                Digital Systems Builder
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              We transform business operations across East Africa with high-performance custom websites, mobile applications, and automated workflow infrastructure.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/256764110535"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-500/35 transition-all text-sm sm:text-base border border-blue-400/20"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Build an App / Website</span>
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center space-x-2 bg-slate-900/60 hover:bg-slate-900 text-slate-200 border border-slate-800 font-medium px-6 py-3.5 rounded-xl backdrop-blur-md transition-all text-sm sm:text-base hover:border-slate-700"
              >
                <span>See Our Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-400">
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
                <span>Sub-2s Load Times</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Dark Luxury Feature Cards */}
          <div className="lg:col-span-5 space-y-4">
            {featureCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl shadow-2xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 mb-1">{card.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
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
