import React from 'react';
import { SITE_INFO, NAV_LINKS } from '../data/content';
import { Disc3, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 font-black text-xl shadow-lg shadow-amber-500/20">
                <Disc3 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-wider font-display">
                  {SITE_INFO.brandName}
                </span>
                <div className="text-xs text-zinc-500 font-medium">
                  {SITE_INFO.name} • {SITE_INFO.title}
                </div>
              </div>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professzionális zenei és technikai lebonyolítás esküvőkre, céges partikra és privát rendezvényekre országszerte. Emlékezetes pillanatok, garantáltan megtöltött táncparkett.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Gyorsmenü
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Elérhetőségek
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {SITE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors">
                  {SITE_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{SITE_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {SITE_INFO.name} ({SITE_INFO.brandName}) – Minden jog fenntartva.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-amber-400 transition-colors py-1 px-3 rounded-lg bg-zinc-900 border border-zinc-800"
          >
            <span>Vissza a tetejére</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
