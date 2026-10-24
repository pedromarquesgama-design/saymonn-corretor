import React from 'react';
import { REAL_PROXIMITIES } from '../data/properties';
import { MapPin, Footprints, Waves, Navigation, Compass } from 'lucide-react';

export const LocationShowcase: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 md:py-24 bg-[#121212] relative z-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4B07A] font-body block mb-2">
            Localização Privilegiada
          </span>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold uppercase text-metallic-gold tracking-tight font-display">
            DEIXE O CARRO NA GARAGEM
          </h2>
          <div className="gold-divider mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-white/70 font-body">
            Tudo o que você e seus hóspedes precisam entre 300 e 700 metros de caminhada em Coroa Vermelha.
          </p>
        </div>

        {/* Grid de Proximidades em Cards Glassmorphism (28px radius) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_PROXIMITIES.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-[28px] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-lg sm:text-xl font-bold text-metallic-gold bg-[#1B1B1D] px-3.5 py-1 rounded-[14px] border border-white/15">
                  {item.distance}
                </span>
                <Footprints className="w-5 h-5 text-[#D4B07A]" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 uppercase font-display">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Destaque Costa do Descobrimento */}
        <div className="mt-10 p-6 sm:p-7 rounded-[28px] glass-card flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80 font-body">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#D4B07A] shrink-0" />
            <span>
              <strong className="text-white">Coroa Vermelha (Santa Cruz Cabrália) & Orla de Porto Seguro - Bahia:</strong> O polo litorâneo de maior valorização turística e patrimonial do Nordeste.
            </span>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Praia+de+Coroa+Vermelha+Bahia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.08em] flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Ver no Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};
