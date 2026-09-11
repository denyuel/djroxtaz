import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="gyik" className="py-24 relative bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            GYIK / Gyakori Kérdések
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Minden, amit a foglalás előtt <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              tudni érdemes.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base">
            Gyakran felmerülő kérdések az esküvői és rendezvényes zenei szolgáltatásról.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900/80 border-amber-500/40 shadow-lg'
                    : 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white flex items-center gap-3">
                    <span className="text-amber-400 text-sm font-black">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-amber-500 text-zinc-950' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-zinc-300 text-sm leading-relaxed border-t border-zinc-800/60 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional question prompt */}
        <div className="mt-12 text-center text-sm text-zinc-400">
          Nem találod a kérdésedre a választ?{' '}
          <a href="#kapcsolat" className="text-amber-400 font-bold hover:underline">
            Kérdezz bátran az ajánlatkérő űrlapon vagy telefonon!
          </a>
        </div>

      </div>
    </section>
  );
}
