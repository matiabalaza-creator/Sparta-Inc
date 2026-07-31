import React from 'react';

const featuredCapabilities = [
  {
    id: 1,
    title: "Interactive E-Commerce & MoMo Checkout Engine",
    category: "Live Prototype Showcase",
    description: "Experience how we streamline local transactions in Uganda. A friction-free checkout flow integrating Mobile Money routing and direct-to-WhatsApp order dispatch.",
    features: ["MTN / Airtel MoMo Flow", "Instant WhatsApp Order Routing", "Zero-Latency UI"],
    badge: "Interactive Demo Ready",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: (
      <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 2 2 002-2V8a2 2 2 002-2H5a2 2 2 002 2v8a2 2 2 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "High-Performance Web Architecture Benchmark",
    category: "Performance & UX Engineering",
    description: "A side-by-side technical breakdown showing how custom clean-code architecture outperforms bloated template builders in load speeds, SEO ranking, and conversion rates.",
    features: ["Sub-Second Load Speed", "Mobile Optimization", "SEO Core Web Vitals Ready"],
    badge: "Live Benchmark",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: (
      <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function WorkSection() {
  return (
    <section className="py-20 bg-[#0B0F19] text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Solutions & Engineering
        </h2>
        <p className="mt-2 text-lg text-slate-400">
          Explore interactive demonstrations of the modern web solutions we engineer.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredCapabilities.map((item) => (
          <div 
            key={item.id}
            className="flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden group shadow-xl p-8"
          >
            <div>
              {/* Header Icon & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              {/* Title & Category */}
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-100 mt-1 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Technical Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {item.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-3 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action Line */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500">Built in React & Tailwind</span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1">
                Explore Feature →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
