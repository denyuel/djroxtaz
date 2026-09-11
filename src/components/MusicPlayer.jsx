import React, { useState, useEffect, useRef } from 'react';
import { MUSIC_STYLES } from '../data/content';
import { Play, Pause, Volume2, VolumeX, Disc, Sparkles, Radio, Flame, Music, PartyPopper, ListMusic } from 'lucide-react';

export default function MusicPlayer() {
  const [activeGenreIndex, setActiveGenreIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  const activeGenre = MUSIC_STYLES[activeGenreIndex];

  // Map icons
  const iconMap = {
    Disc: <Disc className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Radio: <Radio className="w-5 h-5" />,
    Flame: <Flame className="w-5 h-5" />,
    Music: <Music className="w-5 h-5" />,
    PartyPopper: <PartyPopper className="w-5 h-5" />
  };

  // Web Audio subtle beat simulator when playing & unmuted
  const playTone = (freq, duration, type = 'sine') => {
    if (isMuted) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + duration);
    } catch (e) {
      // Ignore if user haven't interacted yet
    }
  };

  useEffect(() => {
    if (isPlaying) {
      let step = 0;
      intervalRef.current = setInterval(() => {
        step = (step + 1) % 4;
        if (step === 0) playTone(120, 0.15, 'triangle'); // Kick beat
        else if (step === 2) playTone(240, 0.1, 'sine'); // Snare/clap hint
        else playTone(350, 0.05, 'sine'); // Hi-hat pulse
      }, 350);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, isMuted, activeGenreIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="zene" className="py-24 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Zenei Repertoár & Stílusok
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            A ti stílusotok, az én lemezestáskám. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-purple-400">
              Minden korosztály a parketten.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Nincs két egyforma este. A zenei választékot az ifjú pár ízlése és a vendégsereg aktuális lüktetése formálja tökéletes bulivá.
          </p>
        </div>

        {/* Music Player Interactive Stage */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Genre Selector */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 block">
                Kattints a stílusra az ízelítőhöz:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MUSIC_STYLES.map((style, idx) => (
                  <button
                    key={style.id}
                    onClick={() => {
                      setActiveGenreIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={`p-4 rounded-2xl text-left transition-all duration-200 border flex items-center gap-3 ${
                      activeGenreIndex === idx
                        ? 'bg-amber-500/15 border-amber-500/60 shadow-lg'
                        : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-950'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeGenreIndex === idx ? 'bg-amber-500 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-400'
                    }`}>
                      {iconMap[style.icon]}
                    </div>
                    <div>
                      <div className={`font-bold text-sm ${activeGenreIndex === idx ? 'text-amber-400' : 'text-white'}`}>
                        {style.name}
                      </div>
                      <div className="text-[11px] text-zinc-400 truncate max-w-[160px]">
                        {style.period}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Live Interactive Deck & Equalizer */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-zinc-950 border border-zinc-800/90 p-6 sm:p-8 relative">
                
                {/* Deck status header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-zinc-600'}`} />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      {isPlaying ? 'Élő lejátszás szimuláció' : 'Készenlétben (Válassz stílust)'}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 text-xs flex items-center gap-1.5"
                    title={isMuted ? 'Hang bekapcsolása' : 'Némítás'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    <span className="text-[11px]">{isMuted ? 'Néma' : 'Audio ON'}</span>
                  </button>
                </div>

                {/* Currently playing genre display */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                        Kiválasztott zenei blokk:
                      </span>
                      <h3 className="text-2xl font-black text-white font-display mt-0.5">
                        {activeGenre.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1">
                        {activeGenre.period}
                      </p>
                    </div>

                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 text-zinc-950 flex items-center justify-center shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-transform flex-shrink-0"
                    >
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
                    {activeGenre.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 pt-1">
                    <div>
                      <span className="text-zinc-500">Példa előadók: </span>
                      <span className="text-zinc-300 font-medium">{activeGenre.sampleArtist}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">Tánctér energiaszint: </span>
                      <span className="text-amber-400 font-bold">{activeGenre.energy}</span>
                    </div>
                  </div>

                  {/* Equalizer Visualizer Bars */}
                  <div className="pt-6">
                    <div className="flex items-end justify-between gap-1 sm:gap-1.5 h-16 px-2 bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-2">
                      {[40, 75, 55, 90, 65, 80, 45, 95, 70, 85, 60, 100, 50, 75, 90, 65, 45, 80].map((h, i) => (
                        <div
                          key={i}
                          className={`w-full rounded-t-sm transition-all duration-150 ${
                            isPlaying
                              ? 'bg-gradient-to-t from-amber-500 to-purple-500'
                              : 'bg-zinc-800'
                          }`}
                          style={{
                            height: isPlaying ? `${Math.max(15, (h * (0.4 + Math.random() * 0.6)))}%` : '15%',
                            transitionDelay: `${i * 10}ms`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Playlist Assurance Bar */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                <ListMusic className="w-4 h-4" />
              </div>
              <span>
                <strong>Kívánságlista és Tiltólista:</strong> Lehetőségetek van leadni kedvenc dalaitokat, és azokat is, amiket semmiképp nem szeretnétek hallani.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
