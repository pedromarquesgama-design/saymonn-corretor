import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onWhatsAppClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onWhatsAppClick }) => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-[#121212] relative z-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Banner Glassmorphism 28px com Foto de Interior de Luxo Escurecida */}
        <div className="relative rounded-[28px] overflow-hidden glass-card p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Foto de Fundo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80')`,
            }}
          />
          {/* Overlay escuro de alta sofisticação */}
          <div className="absolute inset-0 bg-[#121212]/85 backdrop-blur-[4px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent" />

          {/* Texto à Esquerda */}
          <div className="relative z-10 max-w-2xl space-y-3 text-center lg:text-left">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4B07A] font-body block">
              Atendimento Direto & Exclusivo
            </span>
            <h3 className="text-[clamp(1.75rem,5vw,3rem)] font-bold uppercase text-metallic-gold tracking-tight leading-tight font-display">
              PRONTO PARA ENCONTRAR SEU IMÓVEL NA BAHIA?
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-body max-w-xl">
              Fale diretamente com Saymonn SPH e receba os vídeos e plantas das unidades disponíveis.
            </p>
          </div>

          {/* Botão Primário em Ouro Escovado à Direita */}
          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onWhatsAppClick}
              className="w-full sm:w-auto btn-gold px-8 sm:px-10 py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.08em] flex items-center justify-center gap-3 cursor-pointer shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>VER PORTFÓLIO NO WHATSAPP &gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
