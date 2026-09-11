import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, MapPin, Calendar, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="velemenyek" className="py-24 relative bg-zinc-950/70 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Ügyfélvélemények
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Akik már velem táncoltak <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              és hajnalig buliztak.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            A legőszintébb visszajelzés a kifulladásig teli táncparkett és az elégedett párok, szervezők ajánlása.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-8 flex flex-col justify-between hover:border-amber-500/30 hover:bg-zinc-900/70 transition-all duration-300 relative group"
            >
              <div>
                {/* Stars and Quote mark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-zinc-700 group-hover:text-amber-500/40 transition-colors" />
                </div>

                {/* Quote body */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{item.author}</span>
                    <CheckCircle className="w-4 h-4 text-amber-400 inline" />
                  </h4>
                  <div className="text-xs text-zinc-400">
                    {item.role}
                  </div>
                </div>

                <div className="text-right text-xs text-zinc-500 space-y-1">
                  <div className="flex items-center justify-end gap-1">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <Calendar className="w-3 h-3 text-zinc-400" />
                    <span>{item.eventDate}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              ★ 5.0 / 5.0
            </span>
            <span className="text-zinc-500">•</span>
            <span>Több száz boldog pár és visszatérő céges partner országszerte</span>
          </div>
        </div>

      </div>
    </section>
  );
}
