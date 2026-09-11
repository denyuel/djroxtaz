import React from 'react';
import { SITE_INFO, WHY_US } from '../data/content';
import { CheckCircle2, Sliders, Radio, Music, Users, Sparkles, HeartHandshake, Zap } from 'lucide-react';

export default function About({ onOpenBooking }) {
  const iconMap = [
    <CheckCircle2 className="w-6 h-6 text-amber-400" />,
    <Music className="w-6 h-6 text-purple-400" />,
    <Sliders className="w-6 h-6 text-cyan-400" />,
    <HeartHandshake className="w-6 h-6 text-pink-400" />
  ];

  return (
    <section id="rolam" className="py-24 relative bg-zinc-950/60 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Rólam & Filozófiám
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Nem csupán zenét szolgáltatok, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              élményt és hangulatot teremtek.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Több mint egy évtizede gondoskodom arról, hogy az ifjú párok és a rendezvényszervezők válláról lekerüljön a technikai és zenei aggodalom terhe.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Story & Focus */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white font-display">
              Szia, Nyári Zsolt vagyok!
            </h3>
            <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
              <p>
                A zene és a rendezvények világa gyerekkorom óta az életem meghatározó része. Pályafutásom során több mint 450 sikeres esküvőn, céges rendezvényen és exkluzív partin állhattam a DJ pult mögött.
              </p>
              <p>
                Meggyőződésem, hogy egy jó rendezvény vagy esküvői DJ nem a saját öncélú zenei ízlését erőlteti a vendégekre, hanem mint egy jó karmester, folyamatosan olvassa a tánctér pulzusát. Tudja, mikor kell finom eleganciával kísérni a vacsorát, mikor kell a megható pillanatokhoz szólnia a dallamnak, és mikor jön el a pont, amikor robbanni kell a tánctérnek.
              </p>
              <p className="border-l-2 border-amber-500 pl-4 py-1 italic text-zinc-400">
                „A legnagyobb elismerés számomra mindig az, amikor a menyasszony és a vőlegény hajnalban izzadtan, de fültől fülig érő mosollyal köszöni meg, hogy ez volt életük legemlékezetesebb éjszakája.”
              </p>
            </div>

            {/* Quick checkmarks */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-200 font-medium">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Nincs üresjárat a táncparketten</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Kívánság- és tiltólisták kezelése</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Diszkrét és elegáns technikai kiépítés</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Ceremóniamesteri összhang</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 rounded-xl bg-zinc-900 border border-amber-500/40 hover:bg-amber-500 hover:text-zinc-950 font-bold text-sm text-amber-400 transition-all duration-300"
              >
                Ismerjük meg egymást &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: 4 Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_US.map((item, index) => (
              <div 
                key={item.title}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 hover:bg-zinc-900/90 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[index]}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-display">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
