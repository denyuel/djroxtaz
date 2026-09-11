import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import MusicPlayer from './components/MusicPlayer';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import { Phone, Calendar } from 'lucide-react';
import { SITE_INFO } from './data/content';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const scrollToBooking = (pkgName = null, serviceName = null) => {
    if (pkgName) setSelectedPackage(pkgName);
    if (serviceName) setSelectedService(serviceName);

    const bookingEl = document.getElementById('kapcsolat');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-100 selection:bg-amber-500 selection:text-zinc-950">
      {/* Navigation */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main sections */}
      <main>
        <Hero onOpenBooking={() => scrollToBooking()} />
        <About onOpenBooking={() => scrollToBooking()} />
        <Services onSelectService={(srv) => scrollToBooking(null, srv)} />
        <Packages onSelectPackage={(pkg) => scrollToBooking(pkg, null)} />
        <MusicPlayer />
        <Testimonials />
        <Faq />
        <BookingSection 
          preselectedPackage={selectedPackage} 
          preselectedService={selectedService} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Button (Mobile & Desktop corner) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
          className="w-12 h-12 rounded-full bg-zinc-900/90 border border-zinc-700 text-amber-400 hover:text-amber-300 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all backdrop-blur-md"
          title="Azonnali telefonos hívás"
          aria-label="Telefonhívás"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={() => scrollToBooking()}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-xs shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Időpontfoglalás</span>
        </button>
      </div>
    </div>
  );
}
