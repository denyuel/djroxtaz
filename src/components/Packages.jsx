import React from 'react';
import { PACKAGES } from '../data/content';
import { Check, Star, Zap, Clock, ShieldCheck } from 'lucide-react';

export default function Packages({ onSelectPackage }) {
  return (
    <section id="csomagok" className="py-24 relative bg-zinc-950/80 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Átlátható Csomagok
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Válassz az igényeidhez <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              tökéletesen passzoló ajánlatot.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Minden csomagunk tartalmazza a prémium minőségű technikát és a garantált szakértelmet. Nincsenek meglepetések vagy rejtett díjak.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-950 border-2 border-amber-500/80 shadow-2xl box-glow-gold lg:-translate-y-3'
                  : 'bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {/* Highlight Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black font-display text-white">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      {pkg.tagline}
                    </p>
                  </div>
                </div>

                {/* Duration pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700/60 text-xs text-zinc-300 font-medium mb-6">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Price tag */}
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <div className="text-lg font-bold text-amber-400">
                    {pkg.price}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Személyre szabott kalkuláció a helyszín és időtartam szerint
                  </div>
                </div>

                {/* Details / Feature list */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                    A csomag tartalma:
                  </span>
                  {pkg.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        pkg.highlight ? 'bg-amber-500/20 text-amber-400' : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 shadow-md ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 hover:brightness-110 shadow-amber-500/25'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Note below packages */}
        <div className="mt-12 text-center text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>Minden rendezvényre hivatalos megbízási szerződéssel és számlával érkezem.</span>
        </div>

      </div>
    </section>
  );
}
