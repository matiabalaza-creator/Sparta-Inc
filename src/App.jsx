import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Code, Layout, ShoppingCart, 
  Search, CheckCircle, Calculator, Mail, Phone, MapPin, Smartphone,
  Zap, ShieldCheck, HeartHandshake, TrendingUp, GraduationCap, Building2,
  PackageCheck, ArrowUpRight
} from 'lucide-react';

// --- SEO SCHEMA COMPONENT ---
const SEOSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sparta Inc Developers",
    "image": "https://spartaincdev.com/logo.png",
    "@id": "https://spartaincdev.com",
    "url": "https://spartaincdev.com",
    "telephone": "+256764110535",
    "email": "info@spartaincdev.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressCountry": "UG"
    },
    "description": "Sparta Inc Developers engineers high-performance websites and custom applications in Kampala, Uganda. Specializing in E-Commerce, MTN/Airtel MoMo integrations, and Local SEO.",
    "sameAs": [
      "https://wa.me/256764110535"
    ]
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
    />
  );
};

// --- BUDGET ESTIMATOR COMPONENT ---
const BudgetEstimator = () => {
  const [projectType, setProjectType] = useState('corporate');
  const [pages, setPages] = useState(4);
  const [needsMomo, setNeedsMomo] = useState(false);

  const calculateEstimate = () => {
    let base = projectType === 'corporate' ? 1200000 : projectType === 'ecommerce' ? 2000000 : 3500000;
    let pageCost = (pages - 4) * 150000;
    let momoCost = needsMomo ? 800000 : 0;
    
    return (base + (pageCost > 0 ? pageCost : 0) + momoCost).toLocaleString();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Calculator className="w-6 h-6 mr-3 text-blue-600" />
        Instant Project Estimator
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
          <select 
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="corporate">Corporate / Institutional Website</option>
            <option value="ecommerce">E-Commerce & Retail</option>
            <option value="webapp">Custom Web Application / Dashboard</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Pages ({pages})
          </label>
          <input 
            type="range" min="1" max="20" 
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input 
            type="checkbox" 
            id="momo"
            checked={needsMomo}
            onChange={(e) => setNeedsMomo(e.target.checked)}
            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="momo" className="text-sm font-medium text-gray-700">
            Include MTN/Airtel MoMo & WhatsApp Order Routing
          </label>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm text-blue-800 font-medium mb-1">Estimated Investment (UGX)</p>
          <p className="text-4xl font-bold text-blue-900">{calculateEstimate()} /=</p>
          <p className="text-xs text-blue-600 mt-2">*This is an indicative estimate. Final cost depends on exact feature scope.</p>
        </div>
      </div>
    </div>
  );
};

// --- ANIMATED TRUST & BRANDS BANNER ---
const TrustMarqueeBanner = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1036],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="bg-[#111111] border-y border-gray-800 overflow-hidden py-4 w-full relative z-20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <div className="flex items-center gap-6 md:gap-12 min-w-max border-b lg:border-b-0 lg:border-r border-gray-800 pb-4 lg:pb-0 lg:pr-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Verified By</p>
              <p className="text-gray-400 text-xs">Uganda Communications<br/>Commission</p>
            </div>
          </div>
          
          <div className="flex flex-col">
            <p className="text-gray-400 text-xs font-medium mb-1">Running Strong</p>
            <div className="text-3xl font-black text-white flex items-center">
              7+ Years
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden relative w-full flex items-center">
          <p className="text-gray-400 text-xs font-medium absolute left-0 z-10 bg-[#111111] pr-4 h-full flex items-center">
            Brands That Trust Us
          </p>
          <div className="absolute left-28 top-0 bottom-0 w-16 bg-gradient-to-r from-[#111111] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#111111] to-transparent z-10"></div>

          <div className="overflow-hidden w-full ml-32">
            <motion.div 
              variants={marqueeVariants}
              animate="animate"
              className="flex items-center gap-16 whitespace-nowrap"
            >
              {[...Array(2)].map((_, index) => (
                <React.Fragment key={index}>
                  <span className="text-xl font-black text-gray-500 hover:text-white transition-colors cursor-pointer">DHL</span>
                  <span className="text-xl font-black text-gray-500 hover:text-white transition-colors cursor-pointer italic">ABF Freight</span>
                  <span className="text-xl font-black text-gray-500 hover:text-white transition-colors cursor-pointer">JUMA HOMES</span>
                  <span className="text-xl font-black text-gray-500 hover:text-white transition-colors cursor-pointer tracking-widest">SUZUKI</span>
                  <span className="text-xl font-black text-gray-500 hover:text-white transition-colors cursor-pointer">MTN</span>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ANIMATED AWARDS BANNER ---
const AwardsBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const badges = [
    { title: "Quality Choice", year: "2024", color: "bg-blue-600" },
    { title: "Top Winner", year: "2022", color: "bg-indigo-600" },
    { title: "High Performer", year: "Summer 2023", color: "bg-orange-500", shape: "square" },
    { title: "Happiest Users", year: "2024", color: "bg-emerald-500" },
    { title: "Top Rated", year: "Software", color: "bg-blue-800" },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-md">
          <p className="text-green-600 font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Recognized for Excellence</h2>
          <p className="text-gray-500 leading-relaxed">
            At Sparta Inc Developers, we deliver top quality designs and exceptional service, consistently exceeding client expectations across Uganda.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center lg:justify-end gap-6 md:gap-8 flex-1"
        >
          {badges.map((badge, i) => (
            <motion.div key={i} variants={badgeVariants} className="flex flex-col items-center">
              <div className={`
                ${badge.color} text-white flex flex-col items-center justify-center p-4 shadow-lg
                ${badge.shape === 'square' ? 'rounded-xl w-24 h-28' : 'rounded-full w-28 h-28 border-4 border-white outline outline-2 outline-gray-200'}
              `}>
                <CheckCircle className="w-5 h-5 mb-1 opacity-80" />
                <span className="text-xs font-bold text-center leading-tight uppercase">{badge.title}</span>
                <div className="w-8 h-[1px] bg-white/40 my-1"></div>
                <span className="text-[10px] font-bold tracking-wider">{badge.year}</span>
              </div>
              
              <div className="flex mt-3 text-yellow-400">
                {[...Array(5)].map((_, starIndex) => (
                  <svg key={starIndex} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 font-bold text-sm mt-1">4.5 / 5</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- INTERACTIVE & ANIMATED INDUSTRY SHOWCASE SECTION ---
const InteractiveIndustryShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const niches = [
    {
      id: "schools",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Schools & Academies",
      tagline: "Automated Admissions & Parent Portals",
      description: "We eliminate administrative bottlenecks for educational institutions with self-service admission forms, printable prospectus views, and direct WhatsApp enrollment inquiries.",
      metrics: ["+300% Online Inquiries", "100% Mobile Friendly", "Instant MoMo Fee Collection"],
      features: [
        "Online Student Admission Engine",
        "Termly Fee Structure & Downloadable Prospectus",
        "Direct Parent WhatsApp & Email Routing",
        "Staff Directory & Campus News Bulletin"
      ],
      previewHeadline: "Landmark Academy Web Portal",
      previewSub: "Live Demo Architecture"
    },
    {
      id: "realestate",
      icon: <Building2 className="w-6 h-6" />,
      title: "Real Estate & Housing",
      tagline: "High-Converting Listing Engines",
      description: "Empower agents and property developers to showcase listings with interactive property filters, high-resolution galleries, location mapping, and automated site-visit bookings.",
      metrics: ["Filter by Rent / Sale", "Instant Agent Call Button", "Virtual Tour Ready"],
      features: [
        "Dynamic Property Search (Price, Beds, Location)",
        "WhatsApp Inspection Request System",
        "Interactive Google Map Location Pins",
        "Mortgage / Monthly Payment Estimator Widget"
      ],
      previewHeadline: "Kampala Heights Listing Engine",
      previewSub: "Real Estate Portal Blueprint"
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-Commerce & Retail",
      tagline: "Frictionless Local Checkout Systems",
      description: "Turn casual browsers into paying customers by accepting mobile payment methods natively alongside automated order alerts sent straight to your delivery team.",
      metrics: ["MTN MoMo API Native", "Airtel Money Ready", "Automated WhatsApp Invoice"],
      features: [
        "Direct MTN & Airtel Mobile Money Checkout",
        "Instant Order Routing to Delivery WhatsApp",
        "Automated Low-Stock Inventory Alerts",
        "Discount Coupon & Flash Sale Manager"
      ],
      previewHeadline: "Retail Dashboard & Express Checkout",
      previewSub: "E-Commerce System Blueprint"
    },
    {
      id: "logistics",
      icon: <PackageCheck className="w-6 h-6" />,
      title: "Logistics & Freight",
      tagline: "Real-Time Tracking & Quote Calculators",
      description: "Build client confidence for transport agencies, clearing firms, and fleet managers with instant shipping cost calculators and tracking updates.",
      metrics: ["Automated Cost Quotes", "Fleet Capability Showcase", "24/7 Client Support Portal"],
      features: [
        "Instant Cargo & Freight Quote Calculator",
        "Shipment Status & Waybill Lookup UI",
        "Service Route & Warehouse Directory",
        "B2B Corporate Account Inquiry Forms"
      ],
      previewHeadline: "Equator Freight & Transit Hub",
      previewSub: "Logistics Application Blueprint"
    }
  ];

  const current = niches[activeTab];

  return (
    <section id="solutions" className="py-24 bg-[#0a0f1d] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Tailored Architectures</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4 tracking-tight">How We Build For Your Industry</h2>
          <p className="text-gray-400 text-base md:text-lg">
            We don't use generic templates. Select your niche below to explore the custom features and interactive flows we engineer for your business.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {niches.map((niche, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={niche.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 relative ${
                  isActive 
                    ? "text-white shadow-lg shadow-blue-500/20" 
                    : "text-gray-400 bg-gray-900/60 border border-gray-800 hover:text-white hover:bg-gray-800"
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

        {/* Animated Showcase Card */}
        <div className="bg-gray-900/80 border border-gray-800 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Details & Key Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                    {current.tagline}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {current.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {current.description}
                  </p>
                </div>

                {/* Key Metrics / Highlights */}
                <div className="flex flex-wrap gap-2 py-2">
                  {current.metrics.map((m, mIdx) => (
                    <span key={mIdx} className="bg-gray-800/90 text-gray-200 border border-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium">
                      ⚡ {m}
                    </span>
                  ))}
                </div>

                {/* Feature checklist */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Included Feature Modules:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start text-xs md:text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="https://wa.me/256764110535" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg text-sm"
                  >
                    Request {current.title} Demo
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Live Feature Visual / Interactive Prototype Frame */}
              <div className="lg:col-span-5">
                <div className="bg-gray-950 rounded-2xl border border-gray-800 p-6 shadow-inner relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                      MODULE PREVIEW
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40">
                      <p className="text-xs text-blue-400 font-mono font-medium">{current.previewSub}</p>
                      <h4 className="text-lg font-bold text-white mt-1">{current.previewHeadline}</h4>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-between text-xs text-gray-300">
                        <span>Automated Mobile Checkout</span>
                        <span className="text-emerald-400 font-mono font-bold">ACTIVE</span>
                      </div>
                      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-between text-xs text-gray-300">
                        <span>WhatsApp Lead Router</span>
                        <span className="text-emerald-400 font-mono font-bold">CONNECTED</span>
                      </div>
                      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-between text-xs text-gray-300">
                        <span>Kampala Local SEO Schema</span>
                        <span className="text-emerald-400 font-mono font-bold">OPTIMIZED</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 text-center">
                      <p className="text-xs text-gray-400">Ready to launch in</p>
                      <p className="text-xl font-extrabold text-blue-400 mt-0.5">5 to 10 Business Days</p>
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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const whyChooseUsData = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Blazing Fast Speed",
      description: "We write clean, lightweight code engineered to load in under 2 seconds even on slow mobile networks."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile Money Native",
      description: "Built-in automated checkout systems for MTN MoMo and Airtel Money to increase conversion rates."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Kampala Local SEO",
      description: "Custom local schema and performance tuning to position your brand at the top of local search queries."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Bank-Grade Security",
      description: "End-to-end encryption, automated cloud backups, and DDoS protection for zero business downtime."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-blue-600" />,
      title: "Dedicated Local Support",
      description: "Direct WhatsApp line to developers who understand the local market context and respond instantly."
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "No Bloated Templates",
      description: "Custom architecture built precisely for your unique business workflows instead of generic plugins."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      <SEOSchema />

      {/* NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-2xl font-black tracking-tight text-gray-900">
                SPARTA<span className="text-blue-600">INC.</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                Kampala, Uganda
              </div>
              <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#why-us" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Why Us</a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Solutions</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Pricing</a>
              <a href="https://wa.me/256764110535" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
                Get Started
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-xl absolute w-full">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Services</a>
            <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Why Us</a>
            <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Solutions</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Pricing Calculator</a>
            <a href="https://wa.me/256764110535" className="block w-full text-center mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium">Get Started Today</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              Trusted Digital Infrastructure
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
              Engineering High-Performance <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Websites & Applications
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Over 7 years of building reliable digital infrastructure. We turn slow, outdated sites into fast, client-converting machines equipped with automated local payment integrations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#pricing" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center">
                Estimate Project Cost
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="https://wa.me/256764110535" target="_blank" rel="noreferrer" className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center">
                Talk to a Developer
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-lg relative"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Search className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Top 5 Local SEO Ranking</h4>
                    <p className="text-sm text-gray-500 mt-1">Dominate Kampala search results for your services.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                    <Smartphone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">MTN & Airtel MoMo Native</h4>
                    <p className="text-sm text-gray-500 mt-1">Instant mobile money checkouts for e-commerce.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST & BRANDS MARQUEE BANNER */}
      <TrustMarqueeBanner />

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solutions That Drive Revenue</h2>
            <p className="text-gray-600 text-lg">We move away from technical jargon to focus on what matters: efficiency, sales, and growth for your Ugandan business.</p>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUp} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <Layout className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate & Institutional Sites</h3>
              <p className="text-gray-600 mb-4">Fast-loading, professional web portals designed for schools, SMEs, and large agencies to establish ultimate trust.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Admissions & Enrollment Portals</li>
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Document Management</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <Code className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Web Applications</h3>
              <p className="text-gray-600 mb-4">Tailor-made dashboards and internal software to automate your daily business operations and eliminate paperwork.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Inventory & Employee Dashboards</li>
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Secure Cloud Infrastructure</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <ShoppingCart className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Local E-Commerce</h3>
              <p className="text-gray-600 mb-4">Stop losing sales to friction. We build online stores that integrate perfectly with how Ugandans buy online.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> MTN / Airtel MoMo API Integration</li>
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Automated WhatsApp Order Routing</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <Search className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local SEO & Brand Storytelling</h3>
              <p className="text-gray-600 mb-4">If they can't find you on Google, you don't exist. We optimize your code and content to capture active local searches.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Technical Speed Optimization</li>
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Local Schema Architecture</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AWARDS BANNER */}
      <AwardsBanner />

      {/* WHY CHOOSE US SECTION */}
      <section id="why-us" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">The Sparta Advantage</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">Why Businesses Partner With Us</h2>
            <p className="text-gray-600 text-lg">We don't just build websites; we engineer scalable digital assets tailored to the Ugandan operating environment.</p>
          </div>

          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUsData.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ANIMATED & INTERACTIVE INDUSTRY SHOWCASE SECTION */}
      <InteractiveIndustryShowcase />

      {/* PRICING ESTIMATOR */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">No hidden fees. Use our calculator to get an immediate estimate for your project scope.</p>
          </div>
          <BudgetEstimator />
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <span className="text-2xl font-black tracking-tight text-gray-900 mb-6 block">
                SPARTA<span className="text-blue-600">INC.</span>
              </span>
              <p className="text-gray-600 max-w-md mb-6">
                Sparta Inc Developers builds highly-functional, performance-obsessed digital infrastructure tailored to Ugandan business operations.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <a href="tel:+256764110535" className="hover:text-blue-600">+256 764 110 535</a>
                </li>
                <li className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <a href="tel:+256756814866" className="hover:text-blue-600">+256 756 814 866</a>
                </li>
                <li className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <a href="mailto:info@spartaincdev.com" className="hover:text-blue-600">info@spartaincdev.com</a>
                </li>
                <li className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  Kampala, Uganda
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#services" className="hover:text-blue-600">Web Design</a></li>
                <li><a href="#solutions" className="hover:text-blue-600">Industry Solutions</a></li>
                <li><a href="#pricing" className="hover:text-blue-600">Pricing Calculator</a></li>
                <li><a href="#why-us" className="hover:text-blue-600">Why Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Sparta Inc Developers. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Engineered in Kampala, Uganda</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/256764110535" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-green-500/30 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" height="32" 
          fill="currentColor" 
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.056 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}
