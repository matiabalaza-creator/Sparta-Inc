import React from 'react';

export default function WorkSection() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">How We Build Your Business Website</h2>
        <p className="text-slate-400 mb-12">From initial idea to launch, we handle everything seamlessly.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700 text-left">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">1. Strategy & Design</h3>
            <p className="text-slate-400 text-sm">We map out your business goals and design a modern, high-converting, mobile-friendly interface.</p>
          </div>

          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700 text-left">
            <div className="w-10 h-10 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">2. Local Integration</h3>
            <p className="text-slate-400 text-sm">We integrate key local features like MTN/Airtel MoMo payment flows and direct WhatsApp ordering.</p>
          </div>

          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700 text-left">
            <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">3. Launch & Growth</h3>
            <p className="text-slate-400 text-sm">We deploy your website on super-fast cloud servers, optimize SEO, and provide full ongoing support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
