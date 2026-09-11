import React from 'react';
import { SERVICES } from '../data/content';
import { Check, Sparkles, Heart, Building2, Cake, Wand2 } from 'lucide-react';

export default function Services({ onSelectService }) {
  const serviceIcons = {
    eskuvo: <Heart className="w-6 h-6 text-rose-400" />,
    ceges: <Building2 className="w-6 h-6 text-cyan-400" />,
    privat: <Cake className="w-6 h-6 text-amber-400" />,
    latvany: <Wand2 className="w-6 h-6 text-purple-400" />
  };

  return (
    <section id="szolgaltatasok" className="py-24 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Szolgáltatások
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Minden rendezvényre a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              legjobb technikai és zenei megoldás.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Legyen szó bensőséges esküvői vacsoráról vagy nagyszabású vállalati partikról, minden részletet előre megtervezünk.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-8 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                {/* Header line */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    {serviceIcons[srv.id]}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    {srv.badge}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="text-2xl font-extrabold text-white font-display mb-1 group-hover:text-amber-400 transition-colors">
                  {srv.title}
                </h3>
                <div className="text-xs font-semibold text-amber-400/80 uppercase tracking-wider mb-4">
                  {srv.subtitle}
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-zinc-800/80">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-3 rounded-xl bg-zinc-950 hover:bg-amber-500 text-zinc-300 hover:text-zinc-950 font-bold text-sm border border-zinc-800 hover:border-amber-500 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Érdekel ez a szolgáltatás</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Callout for Visual FX (Heavy Fog & Cold Sparks) */}
        <div className="mt-12 rounded-3xl p-8 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-zinc-900 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Különleges Látványeffekt</span>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
              Nehézfüst a nyitótánchoz („Tánc a felhők felett”)
            </h4>
            <p className="text-zinc-400 text-sm max-w-xl">
              Nem emelkedik fel, nem zavarja a fotóst vagy a füstérzékelőt, kizárólag a tánctér padlóján gomolyog. Varázsold el a násznépet a legszebb pillanatban!
            </p>
          </div>
          <button
            onClick={() => onSelectService("Nehézfüst és Látványtechnika")}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-sm whitespace-nowrap shadow-lg shadow-amber-500/20 transition-all"
          >
            Kérj látványtechnika ajánlatot
          </button>
        </div>

      </div>
    </section>
  );
}
