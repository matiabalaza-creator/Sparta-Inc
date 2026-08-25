import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Code, ShoppingCart, 
  CheckCircle, Mail, MapPin, Smartphone,
  Zap, ShieldCheck, HeartHandshake, TrendingUp, GraduationCap, Building2,
  PackageCheck, ArrowUpRight, Sparkles, Check, Globe, MessageSquare,
  MessageCircle
} from 'lucide-react';

import Hero from './components/Hero.jsx';

const WHATSAPP_NUMBER = '256762110535';
const OFFICIAL_EMAIL = 'info@spartaincdev.com';

// Built-in SVG Icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// --- FLOATING WHATSAPP BUTTON ---
const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Sparta Inc Dev! 👋 I'd like to discuss a new web/app project.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sparta Inc Dev on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-500/40 border border-emerald-300/30 transition-all cursor-pointer group"
    >
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200"></span>
      </span>
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-semibold text-xs px-0 group-hover:px-2">
        Chat with Sparta Inc Dev
      </span>
    </a>
  );
};

// --- SEO SCHEMA COMPONENT (OPTIMIZED FOR GOOGLE MAPS & LOCAL SEARCH) ---
const SEOSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sparta Inc Dev",
    "alternateName": ["Sparta Inc Developers", "spartaincdev"],
    "image": "https://spartaincdev.com/logo.png",
    "@id": "https://spartaincdev.com",
    "url": "https://spartaincdev.com",
    "telephone": `+${WHATSAPP_NUMBER}`,
    "email": OFFICIAL_EMAIL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressCountry": "UG"
    },
    "description": "Sparta Inc Dev engineers high-performance websites and custom mobile applications in Kampala, Uganda.",
    "sameAs": [
      `https://wa.me/${WHATSAPP_NUMBER}`,
      "https://facebook.com/spartaincdev",
      "https://instagram.com/spartaincdev"
    ]
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
    />
  );
};

// --- PROJECT SCOPE BUILDER COMPONENT ---
const ProjectScopeBuilder = () => {
  const [projectType, setProjectType] = useState('corporate');
  const [timeline, setTimeline] = useState('standard');
  const [needsMomo, setNeedsMomo] = useState(true);
  const [needsSeo, setNeedsSeo] = useState(true);

  const getWhatsAppLink = () => {
    const typeLabel = projectType === 'corporate' 
      ? 'Corporate / Institutional Website' 
      : projectType === 'ecommerce' 
      ? 'E-Commerce Storefront' 
      : 'Custom Web Application';
      
    const timeLabel = timeline === 'express' ? 'Express (5-7 Days)' : 'Standard (2-3 Weeks)';
    const momoLabel = needsMomo ? 'Yes' : 'No';
    const seoLabel = needsSeo ? 'Yes' : 'No';

    const message = `Hello Sparta Inc Dev! 👋 I'm interested in starting a project:\n\n` +
      `• Project Type: ${typeLabel}\n` +
      `• Desired Timeline: ${timeLabel}\n` +
      `• Mobile Money Integration: ${momoLabel}\n` +
      `• Local SEO Package: ${seoLabel}\n\n` +
      `Could we discuss a tailored quote for this scope?`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-slate-900/60 rounded-3xl shadow-2xl p-6 md:p-10 border border-slate-800 backdrop-blur-xl max-w-3xl mx-auto text-left">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Build Your Project Scope</h3>
          <p className="text-sm text-slate-400">Select your requirements to receive a direct tailored proposal from Sparta Inc Dev.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">What are you looking to build?</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'corporate', label: 'Corporate Website', icon: <Globe className="w-4 h-4" /> },
              { id: 'ecommerce', label: 'E-Commerce Store', icon: <ShoppingCart className="w-4 h-4" /> },
              { id: 'webapp', label: 'Custom Web App', icon: <Zap className="w-4 h-4" /> }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setProjectType(item.id)}
                className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all flex flex-col justify-between h-24 ${
                  projectType === item.id
                    ? 'border-blue-500 bg-blue-600/15 text-white ring-1 ring-blue-500/30'
                    : 'border-slate-800 bg-slate-950/40 hover:border-slate-700 text-slate-300'
                }`}
              >
                <span className={projectType === item.id ? 'text-blue-400' : 'text-slate-500'}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Target Completion Timeline</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'standard', label: 'Standard Delivery', sub: '2 - 3 Weeks (Recommended)' },
              { id: 'express', label: 'Express Delivery', sub: '5 - 7 Days (Fast-Track)' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTimeline(item.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  timeline === item.id
                    ? 'border-blue-500 bg-blue-600/15 text-white ring-1 ring-blue-500/30'
                    : 'border-slate-800 bg-slate-950/40 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="text-sm font-bold text-white">{item.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <label className="block text-sm font-semibold text-slate-300">Recommended Modules</label>
          
          <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-950/40 cursor-pointer hover:border-slate-700 transition-colors">
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                checked={needsMomo}
                onChange={(e) => setNeedsMomo(e.target.checked)}
                className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <p className="text-sm font-bold text-slate-200">MTN &amp; Airtel MoMo Gateway + WhatsApp Routing</p>
                <p className="text-xs text-slate-400">Accept mobile money payments & send automated WhatsApp invoices</p>
              </div>
            </div>
          </label>

          <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-950/40 cursor-pointer hover:border-slate-700 transition-colors">
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                checked={needsSeo}
                onChange={(e) => setNeedsSeo(e.target.checked)}
                className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <p className="text-sm font-bold text-slate-200">Kampala Local SEO &amp; Google Schema Setup</p>
                <p className="text-xs text-slate-400">Target high search rankings across Ugandan business queries</p>
              </div>
            </div>
          </label>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-slate-950 to-blue-950/60 text-white rounded-2xl border border-blue-500/20 shadow-xl">
          <p className="text-xs uppercase tracking-wider text-blue-400 font-bold mb-2">Included with every build:</p>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-6">
            <span className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-400 mr-1.5"/> 100% Mobile Responsive</span>
            <span className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-400 mr-1.5"/> High-Speed Cloud Hosting</span>
            <span className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-400 mr-1.5"/> Free SSL Security Certificate</span>
            <span className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-400 mr-1.5"/> 30 Days Free Maintenance</span>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-600/30 text-sm md:text-base border border-blue-400/20"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Get Tailored Proposal on WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

// --- TECHNICAL STANDARDS ---
const EngineeringStandards = () => {
  const standards = [
    { title: "99.9% Uptime", desc: "Global edge CDN & DNS infrastructure", icon: <ShieldCheck className="w-5 h-5 text-blue-400" /> },
    { title: "Sub-2s Load Speeds", desc: "Optimized for mobile connections in East Africa", icon: <Zap className="w-5 h-5 text-amber-400" /> },
    { title: "MTN & Airtel Ready", desc: "Certified local Mobile Money API routing", icon: <Smartphone className="w-5 h-5 text-emerald-400" /> },
    { title: "Modern Codebases", desc: "Clean React & Tailwind architecture", icon: <Code className="w-5 h-5 text-sky-400" /> }
  ];

  return (
    <section className="py-14 bg-[#080d1a] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 flex-shrink-0">
                {item.icon}
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- INTERACTIVE INDUSTRY SHOWCASE SECTION ---
const InteractiveIndustryShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const niches = [
    {
      id: "schools",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Schools & Academies",
      tagline: "Automated Admissions & Parent Portals",
      description: "We eliminate administrative bottlenecks for educational institutions with self-service admission forms and direct WhatsApp enrollment inquiries.",
      metrics: ["+300% Online Inquiries", "100% Mobile Friendly", "Instant MoMo Fee Collection"],
      features: [
        "Online Student Admission Engine",
        "Termly Fee Structure & Prospectus",
        "Direct Parent WhatsApp & Email Routing",
        "Staff Directory & Campus News Bulletin"
      ],
      previewHeadline: "Academic Web Portal",
      previewSub: "Institutional Blueprint"
    },
    {
      id: "realestate",
      icon: <Building2 className="w-5 h-5" />,
      title: "Real Estate & Housing",
      tagline: "High-Converting Listing Engines",
      description: "Empower agents and property developers to showcase listings with interactive property filters, high-resolution galleries, and automated visit bookings.",
      metrics: ["Filter by Rent / Sale", "Instant Agent Call Button", "Virtual Tour Ready"],
      features: [
        "Dynamic Property Search",
        "WhatsApp Inspection Request System",
        "Interactive Google Map Location Pins",
        "Payment Estimator Widget"
      ],
      previewHeadline: "Property Listing Engine",
      previewSub: "Real Estate Portal Blueprint"
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "E-Commerce & Retail",
      tagline: "Frictionless Local Checkout Systems",
      description: "Turn casual browsers into paying customers by accepting mobile payment methods natively alongside automated order alerts.",
      metrics: ["MTN MoMo API Native", "Airtel Money Ready", "Automated WhatsApp Invoice"],
      features: [
        "Direct MTN & Airtel MoMo Checkout",
        "Instant Order Routing to Delivery WhatsApp",
        "Automated Low-Stock Alerts",
        "Discount Coupon Manager"
      ],
      previewHeadline: "Retail Dashboard & Checkout",
      previewSub: "E-Commerce Blueprint"
    },
    {
      id: "logistics",
      icon: <PackageCheck className="w-5 h-5" />,
      title: "Logistics & Freight",
      tagline: "Real-Time Tracking & Quote Calculators",
      description: "Build client confidence for transport agencies, clearing firms, and fleet managers with instant shipping cost calculators and tracking updates.",
      metrics: ["Automated Cost Quotes", "Fleet Showcase", "24/7 Client Support Portal"],
      features: [
        "Instant Freight Quote Calculator",
        "Shipment Status Lookup UI",
        "Service Route Directory",
        "B2B Account Inquiry Forms"
      ],
      previewHeadline: "Cargo & Transit Portal",
      previewSub: "Logistics Blueprint"
    }
  ];

  const current = niches[activeTab];

  return (
    <section id="solutions" className="py-24 bg-[#050914] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Tailored Architectures
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 tracking-tight">
            How We Build For Your Industry
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            We don't use generic templates. Select your niche below to explore the custom architectures and modules Sparta Inc Dev engineers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {niches.map((niche, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={niche.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 relative ${
                  isActive 
                    ? "text-white shadow-lg shadow-blue-500/20" 
                    : "text-slate-400 bg-slate-900/60 border border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-blue-600 rounded-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{niche.icon}</span>
                <span className="relative z-10">{niche.title}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
            >
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                    {current.tagline}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {current.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {current.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 py-1">
                  {current.metrics.map((m, mIdx) => (
                    <span key={mIdx} className="bg-slate-800/80 text-slate-200 border border-slate-700/60 text-xs px-3 py-1.5 rounded-lg font-medium">
                      ⚡ {m}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Modules:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start text-xs md:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Sparta Inc Dev! I would like to request a demo for ${current.title}.`)}`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg text-sm"
                  >
                    Request {current.title} Blueprint
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-inner relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                      ARCHITECTURE SPEC
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40">
                      <p className="text-xs text-blue-400 font-mono font-medium">{current.previewSub}</p>
                      <h4 className="text-lg font-bold text-white mt-1">{current.previewHeadline}</h4>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                        <span>Automated Mobile Checkout</span>
                        <span className="text-emerald-400 font-mono font-bold">READY</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                        <span>WhatsApp Lead Router</span>
                        <span className="text-emerald-400 font-mono font-bold">ACTIVE</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                        <span>Kampala Local SEO Schema</span>
                        <span className="text-emerald-400 font-mono font-bold">OPTIMIZED</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <p className="text-xs text-slate-400">Target Delivery</p>
                      <p className="text-xl font-extrabold text-blue-400 mt-0.5">5 to 14 Business Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whyChooseUsData = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Sub-2s Load Speeds",
      description: "We write clean, lightweight code engineered to load in under 2 seconds even on slow mobile networks."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      title: "Mobile Money Native",
      description: "Direct API integration for MTN MoMo and Airtel Money to turn traffic into instant paying revenue."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-sky-400" />,
      title: "Kampala Local SEO",
      description: "Custom local schema and performance tuning to position your brand at the top of local search queries."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      title: "Bank-Grade Security",
      description: "End-to-end SSL encryption, automated cloud backups, and DDoS protection for 24/7 business uptime."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-400" />,
      title: "Dedicated Local Support",
      description: "Direct WhatsApp communication with developers who understand the Ugandan market context."
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: "No Bloated Templates",
      description: "Custom architecture built precisely for your unique business workflows instead of generic themes."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <SEOSchema />
      <FloatingWhatsApp />

      {/* NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 bg-[#020617]/85 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo - Explicitly Sparta Inc Dev */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-2xl font-black tracking-tight text-white">
                SPARTA<span className="text-blue-500">INC DEV.</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-7">
              <div className="flex items-center text-xs font-medium text-slate-400 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                Kampala, Uganda
              </div>
              <a href="#services" className="text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors">Services</a>
              <a href="#why-us" className="text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors">Why Us</a>
              <a href="#solutions" className="text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors">Solutions</a>
              <a href="#proposal" className="text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors">Scope Builder</a>
              
              <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
                <a 
                  href="https://facebook.com/spartaincdev" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Sparta Inc Dev Facebook"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                >
                  <FacebookIcon />
                </a>
                <a 
                  href="https://instagram.com/spartaincdev" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Sparta Inc Dev Instagram"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-all"
                >
                  <InstagramIcon />
                </a>
                <a 
                  href={`mailto:${OFFICIAL_EMAIL}`} 
                  aria-label="Email Sparta Inc Dev"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-md shadow-blue-600/25 text-sm border border-blue-400/20"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#020617] border-t border-slate-800 px-5 pt-3 pb-6 space-y-3 shadow-2xl">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-300 hover:text-blue-400">Services</a>
            <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-300 hover:text-blue-400">Why Us</a>
            <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-300 hover:text-blue-400">Solutions</a>
            <a href="#proposal" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-300 hover:text-blue-400">Scope Builder</a>
            
            <div className="flex items-center space-x-3 pt-3 border-t border-slate-800">
              <a href="https://facebook.com/spartaincdev" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/spartaincdev" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <InstagramIcon />
              </a>
              <a href={`mailto:${OFFICIAL_EMAIL}`} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="block w-full text-center mt-3 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm">
              Get Started on WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <Hero />

      {/* --- 2. TECHNICAL STANDARDS --- */}
      <EngineeringStandards />

      {/* --- 3. WHY CHOOSE US SECTION --- */}
      <section id="why-us" className="py-24 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              Engineered for Uganda
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 tracking-tight">
              Why Forward-Thinking Businesses Choose Sparta Inc Dev
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              We eliminate technical roadblocks and build high-performance software tailored for business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsData.map((item, index) => (
              <div key={index} className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1 text-left">
                <div className="p-3 w-fit rounded-xl bg-slate-800/60 border border-slate-700/50 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. INDUSTRY SHOWCASE --- */}
      <InteractiveIndustryShowcase />

      {/* --- 5. PROPOSAL BUILDER SECTION --- */}
      <section id="proposal" className="py-24 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectScopeBuilder />
        </div>
      </section>

      {/* --- 6. ENTERPRISE FOOTER --- */}
      <footer className="bg-[#01040d] text-slate-400 py-16 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60 text-left">
            
            <div className="md:col-span-5 space-y-4">
              <span className="text-2xl font-black tracking-tight text-white">
                SPARTA<span className="text-blue-500">INC DEV.</span>
              </span>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Engineering high-performance custom websites, mobile applications, and automated Mobile Money payment workflows across Uganda and East Africa.
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <a 
                  href="https://facebook.com/spartaincdev" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Follow Sparta Inc Dev on Facebook"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                >
                  <FacebookIcon />
                </a>
                <a 
                  href="https://instagram.com/spartaincdev" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Follow Sparta Inc Dev on Instagram"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-all"
                >
                  <InstagramIcon />
                </a>
                <a 
                  href={`mailto:${OFFICIAL_EMAIL}`} 
                  aria-label="Send email to Sparta Inc Dev"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-200">Official Inquiries</p>
              <div className="space-y-2.5 text-sm">
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="flex items-center space-x-2.5 text-slate-300 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{OFFICIAL_EMAIL}</span>
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center space-x-2.5 text-slate-300 hover:text-emerald-400 transition-colors">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>+256 762 110 535 / +256 756 814 866</span>
                </a>
                <div className="flex items-center space-x-2.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>Kampala, Uganda</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-200">Capabilities</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#solutions" className="hover:text-white transition-colors">School & Institutional Portals</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">MTN/Airtel MoMo E-Commerce</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Real Estate Listing Engines</a></li>
                <li><a href="#proposal" className="hover:text-white transition-colors">Request Tailored Proposal</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 Sparta Inc Dev. All rights reserved.</p>
            <p>Built with React &amp; Tailwind CSS • Kampala, Uganda</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
