import React from 'react';
import { PropertyUnit, FilterCategory } from '../types/property';
import { SHOWCASE_PROPERTIES } from '../data/properties';
import { MapPin, ArrowRight, MessageCircle } from 'lucide-react';

interface PropertyShowcaseProps {
  activeFilter: FilterCategory;
  onFilterChange?: (filter: FilterCategory) => void;
  onSelectProperty: (property: PropertyUnit) => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({
  activeFilter,
  onFilterChange,
  onSelectProperty,
}) => {
  const filterTabs: { id: FilterCategory; label: string }[] = [
    { id: 'todos', label: 'Todos (5)' },
    { id: 'coroa-vermelha', label: 'Coroa Vermelha' },
    { id: 'porto-seguro', label: 'Orla Porto Seguro' },
    { id: 'studios-1q', label: 'Studios & 1 Quarto' },
    { id: 'duplex-casas', label: 'Duplex & Casas' },
  ];

  // Filter logic
  const filteredProperties = SHOWCASE_PROPERTIES.filter((prop) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'coroa-vermelha') return prop.regionId === 'coroa-vermelha';
    if (activeFilter === 'porto-seguro') return prop.regionId === 'porto-seguro';
    if (activeFilter === 'studios-1q') return prop.category === 'studios-1q';
    if (activeFilter === 'duplex-casas') return prop.category === 'duplex-casas';
    return true;
  });

  return (
    <section id="destaques" className="py-20 md:py-28 bg-[#121212] relative z-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Título Centralizado em Caixa Alta */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4B07A] font-body block mb-2">
            Portfólio Selecionado
          </span>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold uppercase tracking-tight text-metallic-gold mb-4 font-display">
            IMÓVEIS EM DESTAQUE
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-sm sm:text-base text-white/70 font-body max-w-xl mx-auto">
            Condições de pagamento negociáveis · Financiamento Caixa ou Direto com a Construtora Matilda
          </p>
        </div>

        {/* Barra de Filtros Centralizada */}
        {onFilterChange && (
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onFilterChange(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer font-body ${
                    isActive
                      ? 'btn-gold shadow-md'
                      : 'bg-[#1B1B1D] text-white/70 hover:text-white border border-white/15 hover:border-[rgba(212,176,122,0.5)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Grid Responsivo de Cards Glassmorphism (28px radius) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className="glass-card rounded-[28px] overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Imagem do Imóvel com Badge */}
              <div className="relative h-60 w-full overflow-hidden bg-[#1B1B1D]">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151516] via-transparent to-black/30" />

                {/* Badge no Canto da Foto */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-[#1B1B1D]/90 text-[#F1DDB0] border border-[rgba(212,176,122,0.5)] backdrop-blur-md shadow-md font-body">
                    {property.badge}
                  </span>
                </div>

                {/* Tag de Praia no Canto Direito */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#121212]/80 text-white/90 backdrop-blur-md border border-white/15 font-body">
                    {property.distanceToBeachMeters}m do mar
                  </span>
                </div>
              </div>

              {/* Informações do Card */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Localização com Pino Dourado */}
                  <div className="flex items-center gap-1.5 text-xs text-[#D4B07A] font-medium mb-2 font-body">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>

                  {/* Nome do Imóvel em Cinzel */}
                  <h3 className="text-lg sm:text-xl font-bold uppercase text-white group-hover:text-[#F1DDB0] transition-colors line-clamp-1 font-display">
                    {property.title}
                  </h3>
                </div>

                {/* Preço em Cinzel Dourado */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/60 font-body block">
                    A Partir de
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-metallic-gold font-display tracking-tight">
                    {property.formattedPrice}
                  </div>
                </div>

                {/* Ícones na Base do Card */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 text-[11px] text-white/70 font-body">
                  {property.cardIcons.map((iconText, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-[12px] bg-[#1B1B1D] border border-white/15 text-[11px] font-medium"
                    >
                      {iconText}
                    </span>
                  ))}
                </div>

                {/* Botão no Card: Ver Detalhes / WhatsApp (Estilo Secundário Pill) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProperty(property);
                  }}
                  className="w-full btn-secondary py-3 px-4 text-xs font-medium uppercase tracking-[0.08em] flex items-center justify-center gap-2 group-hover:bg-[rgba(212,176,122,0.15)] group-hover:border-[#D4B07A] transition-all cursor-pointer mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ver Detalhes / WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
