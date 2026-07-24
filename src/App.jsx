import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Code, Layout, ShoppingCart, 
  Search, CheckCircle, Calculator, Mail, Phone, MapPin, Smartphone
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
    let pageCost = (pages - 4) * 150000; // 150k UGX per extra page above 4
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
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
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


// --- MAIN APP COMPONENT ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

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
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Portfolio</a>
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
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Portfolio</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Pricing Calculator</a>
            <a href="https://wa.me/256764110535" className="block w-full text-center mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium">Get Started Today</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Hero Content */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              Trusted by 50+ Ugandan Businesses
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

          {/* Hero Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-lg relative"
          >
            {/* Subtle floating animation */}
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
            {/* Service 1 */}
            <motion.div variants={fadeUp} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <Layout className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate & Institutional Sites</h3>
              <p className="text-gray-600 mb-4">Fast-loading, professional web portals designed for schools, SMEs, and large agencies to establish ultimate trust.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Admissions & Enrollment Portals</li>
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Document Management</li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeUp} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <Code className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Web Applications</h3>
              <p className="text-gray-600 mb-4">Tailor-made dashboards and internal software to automate your daily business operations and eliminate paperwork.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Inventory & Employee Dashboards</li>
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Secure Cloud Infrastructure</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeUp} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <ShoppingCart className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Local E-Commerce</h3>
              <p className="text-gray-600 mb-4">Stop losing sales to friction. We build online stores that integrate perfectly with how Ugandans buy online.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> MTN / Airtel MoMo API Integration</li>
                <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Automated WhatsApp Order Routing</li>
              </ul>
            </motion.div>

            {/* Service 4 */}
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

      {/* PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 text-lg">Real Ugandan businesses we've transformed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
              <div className="h-64 bg-gray-700 relative p-8 flex items-center justify-center overflow-hidden group">
                 {/* Abstract visual representation instead of missing image */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-gray-800 transition-transform group-hover:scale-105 duration-500"></div>
                 <h3 className="text-3xl font-bold text-white/20 z-10">LANDMARK <br/>JUNIOR SCHOOL</h3>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Landmark Junior School</h3>
                <p className="text-gray-400 mb-6">Institutional Web Portal built to handle admissions, fee structures, and parent communication.</p>
                <div className="flex items-center text-green-400 font-medium bg-green-400/10 inline-block px-3 py-1 rounded-full text-sm">
                  +300% Online Inquiries
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
              <div className="h-64 bg-gray-700 relative p-8 flex items-center justify-center overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/50 to-gray-800 transition-transform group-hover:scale-105 duration-500"></div>
                 <ShoppingCart className="text-white/20 w-32 h-32 z-10" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Retail Dashboard & E-Commerce</h3>
                <p className="text-gray-400 mb-6">Custom business dashboard powering a retail brand in Kampala. Replaced a Facebook page with a high-converting site.</p>
                <div className="flex items-center text-yellow-400 font-medium bg-yellow-400/10 inline-block px-3 py-1 rounded-full text-sm">
                  Automated MoMo & WhatsApp Routing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <li><a href="#services" className="hover:text-blue-600">Web Applications</a></li>
                <li><a href="#services" className="hover:text-blue-600">E-Commerce</a></li>
                <li><a href="#services" className="hover:text-blue-600">SEO Services</a></li>
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
