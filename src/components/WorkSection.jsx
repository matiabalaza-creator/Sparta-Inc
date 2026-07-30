export default function SolutionsSection() {
  const solutions = [
    {
      title: "Educational & Institutional Portals",
      description: "Custom web systems designed for schools and institutions to manage admissions, digital fee structures, and parent-teacher communication effortlessly.",
      badge: "School Systems",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      icon: (
        <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: "Mobile Money E-Commerce & Retail",
      description: "High-converting online stores integrated directly with MTN MoMo, Airtel Money, and automated WhatsApp order routing for instant sales.",
      badge: "Automated Payments",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      icon: (
        <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      )
    },
    {
      title: "Custom Business Dashboards & Portals",
      description: "Tailor-made web applications that replace messy spreadsheets with clean, real-time analytics, inventory tracking, and client management tools.",
      badge: "Enterprise Tech",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      icon: (
        <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Solutions We Deliver
        </h2>
        <p className="text-slate-400 text-lg">
          Modern, scalable digital systems built for growing businesses and institutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((item, idx) => (
          <div 
            key={idx}
            className="bg-[#131b2e] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition duration-300"
          >
            <div>
              {/* Graphic Placeholder Box */}
              <div className="w-full h-44 bg-[#1a243a] rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${item.badgeColor}`}>
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
