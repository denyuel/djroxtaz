import React, { useState, useEffect } from 'react';
import { SITE_INFO, NAV_LINKS } from '../data/content';
import { Phone, Menu, X, Sparkles, Disc3 } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <Disc3 className="w-6 h-6 animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <div>
            <div className="font-extrabold tracking-wider text-lg sm:text-xl text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5 font-display">
              {SITE_INFO.brandName}
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            </div>
            <div className="text-[11px] text-zinc-400 tracking-wide font-medium">
              {SITE_INFO.name} • {SITE_INFO.title}
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{SITE_INFO.phone}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-zinc-950" />
            <span>Ajánlatkérés</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 rounded-lg bg-amber-500 text-zinc-950 font-bold text-xs"
          >
            Ajánlatkérés
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Menü nyitása"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0c0c0f]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-200 hover:text-amber-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-zinc-800/80 space-y-3">
            <a 
              href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-semibold text-zinc-200"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{SITE_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20"
            >
              Ingyenes Ajánlatkérés
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
