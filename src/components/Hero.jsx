import React from 'react';
import { SITE_INFO } from '../data/content';
import { Sparkles, Calendar, Volume2, ShieldCheck, ArrowRight, Award, Music2 } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-vignette">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b15_1px,transparent_1px),linear-gradient(to_bottom,#18181b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>2025 / 2026 Esküvői és Rendezvény Szezon Foglalás</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black font-display tracking-tight text-white leading-[1.15]">
              <span className="text-zinc-300 font-medium block text-2xl sm:text-3xl mb-2">
                Nyári Zsolt vagyok,
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Rendezvény & Esküvői DJ
              </span>
              <span className="block text-2xl sm:text-3xl font-extrabold text-zinc-400 mt-2">
                ( {SITE_INFO.brandName} )
              </span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Felejthetetlen pillanatok és kifogástalan zenei élmény a megható szertartástól a hajnalig tartó tombolásig. Prémium hang- és intelligens fénytechnika, személyre szabott zenei ív kompromisszumok nélkül.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-extrabold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 text-zinc-950" />
                <span>Kérj Ingyenes Ajánlatot</span>
                <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#zene"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-400/50 text-white font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-sm"
              >
                <Music2 className="w-5 h-5 text-amber-400" />
                <span>Zenei Világ & Stílusok</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-zinc-800/80 text-left">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-display">{SITE_INFO.experienceYears}</span>
                <span className="text-xs text-zinc-400 font-medium">Év szakmai tapasztalat</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white font-display">{SITE_INFO.eventsCompleted}</span>
                <span className="text-xs text-zinc-400 font-medium">Sikeres rendezvény</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-display">100%</span>
                <span className="text-xs text-zinc-400 font-medium">Megbízhatóság & garancia</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white font-display">5.0 ★</span>
                <span className="text-xs text-zinc-400 font-medium">Valós ügyfélértékelés</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Stage / DJ Deck Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative card */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-amber-500/40 via-purple-500/20 to-zinc-800 shadow-2xl box-glow-gold">
                <div className="rounded-[22px] bg-[#0d0d12] p-6 sm:p-8 relative overflow-hidden">
                  
                  {/* Neon light simulation */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-purple-600/20 rounded-full blur-2xl" />

                  {/* DJ Visual Card Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        Élő DJ Szett & Hangtechnika
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-[11px] font-bold text-amber-400">
                      RCF / EV Sound
                    </span>
                  </div>

                  {/* Turntable / Vinyl Graphic */}
                  <div className="my-8 flex justify-center items-center">
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-zinc-950 border-4 border-zinc-800 shadow-2xl flex items-center justify-center group cursor-pointer transition-transform duration-500 hover:scale-105">
                      
                      {/* Vinyl Grooves */}
                      <div className="absolute inset-3 rounded-full border border-zinc-800/80 pointer-events-none" />
                      <div className="absolute inset-7 rounded-full border border-zinc-800/60 pointer-events-none" />
                      <div className="absolute inset-11 rounded-full border border-zinc-800/40 pointer-events-none" />
                      <div className="absolute inset-16 rounded-full border border-zinc-800/30 pointer-events-none" />

                      {/* Center Label */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-600 p-1 flex items-center justify-center shadow-lg animate-pulse-slow">
                        <div className="w-full h-full rounded-full bg-zinc-950 flex flex-col items-center justify-center text-center p-2">
                          <span className="text-[9px] uppercase tracking-wider font-extrabold text-amber-400">ROXTAZ</span>
                          <div className="w-3 h-3 rounded-full bg-amber-500 my-1"></div>
                          <span className="text-[8px] text-zinc-400">ON AIR</span>
                        </div>
                      </div>

                      {/* Equalizer animation bar overlay */}
                      <div className="absolute bottom-4 flex items-end gap-1.5 h-6">
                        <div className="w-1 bg-amber-400 rounded-full h-3 animate-pulse"></div>
                        <div className="w-1 bg-amber-400 rounded-full h-5 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1 bg-amber-400 rounded-full h-2 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                        <div className="w-1 bg-amber-400 rounded-full h-6 animate-pulse" style={{ animationDelay: '450ms' }}></div>
                        <div className="w-1 bg-amber-400 rounded-full h-4 animate-pulse" style={{ animationDelay: '600ms' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-3 text-xs text-zinc-300">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Hivatalos szerződés & garantált megjelenés</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Volume2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Kristálytiszta szertartás & buli hangosítás</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>Nehézfüst és intelligens fény show opciók</span>
                    </div>
                  </div>

                  {/* Bottom booking badge */}
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-400">Időpont egyeztetés:</span>
                    <button
                      onClick={() => onOpenBooking()}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                    >
                      Szabad dátumok ellenőrzése &rarr;
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
