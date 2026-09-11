import React, { useState } from 'react';
import { SITE_INFO } from '../data/content';
import confetti from 'canvas-confetti';
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, MessageSquare, Calendar, Users, Clock } from 'lucide-react';

export default function BookingSection({ preselectedPackage, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: preselectedService?.includes('Esküvő') ? 'Esküvő' : 'Esküvő',
    eventDate: '',
    location: '',
    guestCount: '80-120 fő',
    selectedPackage: preselectedPackage || 'Gold Esküvő Csomag',
    extras: {
      heavyFog: false,
      wallLights: false,
      sparklers: false,
      ceremonySound: false
    },
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync props if changed
  React.useEffect(() => {
    if (preselectedPackage) {
      setFormData(prev => ({ ...prev, selectedPackage: preselectedPackage }));
    }
  }, [preselectedPackage]);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, message: prev.message ? prev.message : `Érdekel: ${preselectedService}` }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleExtraToggle = (extraKey) => {
    setFormData(prev => ({
      ...prev,
      extras: {
        ...prev.extras,
        [extraKey]: !prev.extras[extraKey]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 600);
  };

  return (
    <section id="kapcsolat" className="py-24 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Kapcsolat & Foglalás
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Kérj kötelezettségmentes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              árajánlatot 24 órán belül!
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Add meg a rendezvényed alapvető adatait, és hamarosan felveszem veled a kapcsolatot a pontos részletekkel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Benefits */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">
                Közvetlen elérhetőségek
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Szívesebben egyeztetsz telefonon? Hívj bizalommal, vagy írj WhatsAppon bármilyen kérdés esetén!
              </p>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <a 
                  href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-amber-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Telefonszám (Hívás / WhatsApp)</div>
                    <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {SITE_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-amber-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">E-mail cím</div>
                    <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {SITE_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Működési terület</div>
                    <div className="text-base font-bold text-white">
                      {SITE_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Booking Assurance */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Gyors válaszidő (általában pár órán belül)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Teljesen kötelezettségmentes ajánlatadás</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Előzetes személyes vagy online konzultáció</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    Köszönöm a megkeresést!
                  </h3>
                  <p className="text-zinc-300 max-w-md mx-auto text-sm sm:text-base">
                    Az ajánlatkérésed sikeresen megérkezett hozzám. Hamarosan átnézem a részleteket és 24 órán belül felveszem veled a kapcsolatot a megadott elérhetőségeken!
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                      className="px-6 py-3 rounded-xl bg-amber-500 text-zinc-950 font-bold text-sm"
                    >
                      Azonnali hívás indítása
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-zinc-800 text-zinc-300 font-semibold text-sm hover:bg-zinc-700"
                    >
                      Új űrlap kitöltése
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Teljes Neved *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Pl. Kovács Anna & Nagy Péter"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Telefonszámod *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+36 30 123 4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        E-mail címed *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="pelda@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Esemény Típusa
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      >
                        <option value="Esküvő">Esküvő</option>
                        <option value="Céges Rendezvény / Gála">Céges Rendezvény / Gála</option>
                        <option value="Születésnap / Jubileum">Születésnap / Jubileum</option>
                        <option value="Privát Parti / Egyéb">Privát Parti / Egyéb</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Tervezett Dátum *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Helyszín (Város / Helyszín neve) *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="Pl. Budapest, Gundel Étterem"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Becsült Vendéglétszám
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      >
                        <option value="30-50 fő">Kisebb (30-50 fő)</option>
                        <option value="50-80 fő">Közepes (50-80 fő)</option>
                        <option value="80-130 fő">Klasszikus (80-130 fő)</option>
                        <option value="130-200 fő">Nagyobb (130-200 fő)</option>
                        <option value="200+ fő">Nagyszabású (200+ fő)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Kiválasztott Csomag
                      </label>
                      <select
                        name="selectedPackage"
                        value={formData.selectedPackage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      >
                        <option value="Silver Csomag">Silver Csomag (Alap party)</option>
                        <option value="Gold Esküvő Csomag">Gold Esküvő Csomag (Legnépszerűbb)</option>
                        <option value="Diamond VIP Csomag">Diamond VIP Csomag (All-In látvány)</option>
                        <option value="Egyedi ajánlat">Egyedi csomagot szeretnék</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Extra Services */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Különleges kiegészítők (opcionális):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <label className="flex items-center gap-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 cursor-pointer hover:border-amber-500/50">
                        <input
                          type="checkbox"
                          checked={formData.extras.heavyFog}
                          onChange={() => handleExtraToggle('heavyFog')}
                          className="rounded text-amber-500 focus:ring-0 w-4 h-4 bg-zinc-900 border-zinc-700"
                        />
                        <span className="text-zinc-300">Nehézfüst nyitótánchoz</span>
                      </label>

                      <label className="flex items-center gap-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 cursor-pointer hover:border-amber-500/50">
                        <input
                          type="checkbox"
                          checked={formData.extras.wallLights}
                          onChange={() => handleExtraToggle('wallLights')}
                          className="rounded text-amber-500 focus:ring-0 w-4 h-4 bg-zinc-900 border-zinc-700"
                        />
                        <span className="text-zinc-300">Fali LED súrolófények</span>
                      </label>

                      <label className="flex items-center gap-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 cursor-pointer hover:border-amber-500/50">
                        <input
                          type="checkbox"
                          checked={formData.extras.sparklers}
                          onChange={() => handleExtraToggle('sparklers')}
                          className="rounded text-amber-500 focus:ring-0 w-4 h-4 bg-zinc-900 border-zinc-700"
                        />
                        <span className="text-zinc-300">Hidegszikra szökőkutak</span>
                      </label>

                      <label className="flex items-center gap-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 cursor-pointer hover:border-amber-500/50">
                        <input
                          type="checkbox"
                          checked={formData.extras.ceremonySound}
                          onChange={() => handleExtraToggle('ceremonySound')}
                          className="rounded text-amber-500 focus:ring-0 w-4 h-4 bg-zinc-900 border-zinc-700"
                        />
                        <span className="text-zinc-300">Külön szertartás hangosítás</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Üzenet / Különleges Kérések
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Írd meg bátran a zenei elképzeléseiteket, a tervezett menetrendet vagy bármilyen egyedi kérést..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-extrabold text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>Küldés folyamatban...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Kérem a személyre szabott árajánlatot</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center">
                    Az űrlap elküldése nem jár fizetési kötelezettséggel. Adataidat bizalmasan kezelem.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
