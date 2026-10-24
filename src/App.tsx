import React, { useState } from 'react';
import { FilterCategory, PropertyUnit } from './types/property';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PropertyShowcase } from './components/PropertyShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocationShowcase } from './components/LocationShowcase';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('todos');
  const [selectedProperty, setSelectedProperty] = useState<PropertyUnit | null>(null);

  const handleOpenGeneralWhatsApp = () => {
    const text = `Olá Saymonn! Acessei o site da SAYMONN SPH e gostaria de receber o portfólio completo dos imóveis em Coroa Vermelha e na Orla de Porto Seguro.`;
    const url = `https://wa.me/5573999999999?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToHighlights = () => {
    const el = document.getElementById('destaques');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#FFFFFF] selection:bg-[#D4B07A] selection:text-[#2A2418] font-body antialiased relative">
      {/* 1. CABEÇALHO (NAVBAR) */}
      <Navbar onContactClick={handleOpenGeneralWhatsApp} />

      {/* 2. HERO SECTION */}
      <HeroSection
        onScrollToHighlights={handleScrollToHighlights}
      />

      {/* 3. SEÇÃO "IMÓVEIS EM DESTAQUE" (VITRINE PRINCIPAL COM FILTROS) */}
      <PropertyShowcase
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onSelectProperty={(property) => setSelectedProperty(property)}
      />

      {/* 4. SEÇÃO "POR QUE ESCOLHER NOSSOS IMÓVEIS" (ESTILO NESTORA HOMES) */}
      <WhyChooseUs />

      {/* LOCALIZAÇÃO PRIVILEGIADA A 300M DO MAR */}
      <LocationShowcase />

      {/* 5. BANNER DE CHAMADA FINAL (CTA) */}
      <CtaBanner onWhatsAppClick={handleOpenGeneralWhatsApp} />

      {/* RODAPÉ MINIMALISTA ESCURO COM REDES SOCIAIS EM CÍRCULOS DOURADOS */}
      <Footer />

      {/* MODAL DE DETALHES DO IMÓVEL */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
}
