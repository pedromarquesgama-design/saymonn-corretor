import React from 'react';
import { PropertyUnit } from '../types/property';
import { REAL_PROXIMITIES } from '../data/properties';
import { X, MapPin, MessageCircle, CheckCircle2, ShieldCheck, Footprints } from 'lucide-react';

interface PropertyDetailModalProps {
  property: PropertyUnit | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
}) => {
  if (!property) return null;

  const handleWhatsAppContact = () => {
    const text = `Olá Saymonn! Vi no site o imóvel *${property.title}* (${property.location}) anunciado por *${property.formattedPrice}* e gostaria de receber o vídeo, planta e as condições de pagamento negociáveis.`;
    const url = `https://wa.me/5573999999999?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-card rounded-[28px] overflow-hidden text-white my-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar em Quadrado Arredondado 18px */}
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-[18px] btn-icon absolute top-4 right-4 z-20 flex items-center justify-center text-white cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Foto Ampliada */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#1B1B1D]">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151516] via-transparent to-black/40" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-[#1B1B1D]/90 text-[#F1DDB0] border border-[rgba(212,176,122,0.5)] backdrop-blur-md font-body">
              {property.badge}
            </span>
          </div>

          {/* Preço em Cinzel Dourado sobre a imagem */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#D4B07A] font-medium font-body block">
                Valor de Lançamento
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-metallic-gold font-display">
                {property.formattedPrice}
              </div>
            </div>
            <span className="text-xs font-medium px-3.5 py-1 rounded-full bg-[#1B1B1D] text-white/80 border border-white/15 font-body">
              Condições Negociáveis
            </span>
          </div>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Título & Localização */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-2 font-display">
              {property.title}
            </h3>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D4B07A] font-body">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{property.location}</span>
            </div>
          </div>

          {/* Descrição */}
          <p className="text-sm text-white/70 font-body leading-relaxed">
            {property.description}
          </p>

          {/* Ícones de Características */}
          <div className="flex flex-wrap gap-2 pt-1">
            {property.cardIcons.map((iconStr, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 rounded-[14px] bg-[#1B1B1D] border border-white/15 text-xs text-white/80 font-medium font-body"
              >
                {iconStr}
              </span>
            ))}
          </div>

          {/* Diferenciais Principais */}
          <div className="bg-[#1B1B1D]/60 p-5 rounded-[20px] border border-white/15 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4B07A] font-display block mb-2">
              Diferenciais Construtivos
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70 font-body">
              {property.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4B07A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lista de Proximidades Reais */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4B07A] font-display">
              <Footprints className="w-4 h-4" />
              <span>Proximidades Reais (A Pé):</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {REAL_PROXIMITIES.map((prox, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[16px] bg-[#1B1B1D] border border-white/15 flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-xs font-bold text-white font-display">{prox.title}</h5>
                    <p className="text-[11px] text-white/60 font-body">{prox.desc}</p>
                  </div>
                  <span className="font-display text-xs font-bold text-metallic-gold ml-2 shrink-0">
                    {prox.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Credibilidade Matilda */}
          <div className="flex items-center gap-3 p-4 rounded-[20px] bg-[#1B1B1D] border border-[rgba(212,176,122,0.3)] text-xs text-white/70 font-body">
            <ShieldCheck className="w-5 h-5 text-[#D4B07A] shrink-0" />
            <span>
              7º Empreendimento construído pela <strong className="text-white">Incorporadora Matilda</strong>. Financiamento Caixa ou direto com a construtora sem burocracia.
            </span>
          </div>

          {/* Botão de Contato Direto */}
          <button
            onClick={handleWhatsAppContact}
            className="w-full btn-gold py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.08em] flex items-center justify-center gap-2.5 cursor-pointer shadow-xl"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Falar com Saymonn sobre este imóvel no WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
