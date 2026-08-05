import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, ArrowRight, Code, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

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
      initNetwork();
    };

    window.addEventListener('resize', handleResize);

    // --- CYBER INFRASTRUCTURE CANVAS ENGINE ---
    const NUM_NODES = Math.floor(width < 768 ? 25 : 45);
    const MAX_DISTANCE = width < 768 ? 120 : 170;
    const NUM_FLOATING_PARTICLES = 30;

    let nodes = [];
    let packets = [];
    let particles = [];

    // Colors
    const COLOR_BLUE = '#3B82F6';
    const COLOR_CYAN = '#60A5FA';
    const COLOR_DARK_BLUE = 'rgba(30, 58, 138, 0.35)';

    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        this.pulse += this.pulseSpeed;
      }

      draw() {
        const glow = Math.sin(this.pulse) * 0.4 + 0.6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${glow * 0.8})`;
        ctx.shadowColor = COLOR_BLUE;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class Packet {
      constructor(from, to) {
        this.from = from;
        this.to = to;
        this.progress = 0;
        this.speed = 0.006 + Math.random() * 0.008;
      }

      update() {
        this.progress += this.speed;
      }

      draw() {
        const currentX = this.from.x + (this.to.x - this.from.x) * this.progress;
        const currentY = this.from.y + (this.to.y - this.from.y) * this.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = COLOR_CYAN;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class FloatingParticle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.vy = -(Math.random() * 0.3 + 0.1);
        this.vx = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.y += this.vy;
        this.x += this.vx;
        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
        ctx.fill();
      }
    }

    function initNetwork() {
      nodes = [];
      packets = [];
      particles = [];

      for (let i = 0; i < NUM_NODES; i++) {
        nodes.push(new Node());
      }
      for (let i = 0; i < NUM_FLOATING_PARTICLES; i++) {
        particles.push(new FloatingParticle());
      }
    }

    initNetwork();

    let lightBeamPhase = 0;

    // --- ANIMATION LOOP ---
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Moving Light Beam Gradients (Volumetric Background Layer)
      lightBeamPhase += 0.005;
      const beamX = (Math.sin(lightBeamPhase) * 0.3 + 0.5) * width;
      const gradient = ctx.createRadialGradient(
        beamX, height * 0.2, 50,
        beamX, height * 0.2, width * 0.5
      );
      gradient.addColorStop(0, 'rgba(30, 58, 138, 0.25)');
      gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.15)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Connections & Spawn Data Packets
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Randomly trigger data packet along active wire
            if (Math.random() < 0.0008 && packets.length < 15) {
              packets.push(new Packet(nodes[i], nodes[j]));
            }
          }
        }
      }

      // 3. Update & Draw Packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.update();
        p.draw();
        if (p.progress >= 1) {
          packets.splice(i, 1);
        }
      }

      // 4. Draw Floating Particles
      particles.forEach((pt) => {
        pt.update();
        pt.draw();
      });

      // 5. Draw Network Nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0F172A] text-white overflow-hidden min-h-[85vh] flex items-center">
      
      {/* --- LIVE GPU CANVAS BACKDROP --- */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-80"
      />

      {/* Grid Overlay Texture */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Soft Bottom Vignette for Smooth Transition into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F172A] to-transparent z-10 pointer-events-none" />

      {/* --- HERO CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* LEFT COLUMN: Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Bespoke Web Design & Custom Apps • Kampala, Uganda</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Uganda's Premier <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Digital Systems Builder
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              We transform business operations across East Africa with high-performance custom websites, mobile applications, and automated workflow infrastructure.
            </motion.p>

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
                className="inline-flex items-center justify-center space-x-2 bg-[#1E293B]/80 hover:bg-[#1E293B] text-gray-200 border border-blue-500/30 font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md transition-all text-sm sm:text-base"
              >
                <span>See Our Solutions</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 border-t border-blue-900/50 grid grid-cols-3 gap-4 text-xs text-gray-300">
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

          {/* RIGHT COLUMN: Enterprise Glass Cards */}
          <div className="lg:col-span-5 space-y-4">
            {featureCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#111827]/70 border border-[#1E3A8A]/50 hover:border-[#3B82F6]/60 backdrop-blur-xl shadow-2xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#1E3A8A]/40 border border-[#3B82F6]/30 flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{card.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">{card.desc}</p>
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
