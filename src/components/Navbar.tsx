import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-brushed ${
        scrolled ? 'py-3 shadow-2xl shadow-black/80' : 'py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        {/* Esquerda: Ícone geométrico dourado em botão arredondado 18px + texto SAYMONN SPH em Cinzel */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          {/* Ícone geométrico de casa minimalista em botão 18px radius */}
          <div className="w-10 h-10 rounded-[18px] btn-icon p-2 shadow-inner group-hover:border-[#D4B07A] transition-colors">
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-[#D4B07A]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 9v11a1 1 0 001 1h12a1 1 0 001-1V9" />
              <path d="M9 21V13h6v8" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold tracking-wider text-white uppercase leading-tight font-display">
              SAYMONN SPH
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#D4B07A] uppercase leading-none mt-0.5 font-display">
              IMÓVEIS DE ALTO PADRÃO
            </span>
          </div>
        </a>

        {/* Centro (Desktop): Links suaves para rolagem na página */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-white/70 font-body">
          <button
            type="button"
            onClick={() => scrollTo('inicio')}
            className="hover:text-[#D4B07A] transition-colors cursor-pointer"
          >
            Início
          </button>
          <button
            type="button"
            onClick={() => scrollTo('destaques')}
            className="hover:text-[#D4B07A] transition-colors cursor-pointer"
          >
            Destaques
          </button>
          <button
            type="button"
            onClick={() => scrollTo('diferenciais')}
            className="hover:text-[#D4B07A] transition-colors cursor-pointer"
          >
            Diferenciais
          </button>
          <button
            type="button"
            onClick={() => scrollTo('localizacao')}
            className="hover:text-[#D4B07A] transition-colors cursor-pointer"
          >
            Localização
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contato')}
            className="hover:text-[#D4B07A] transition-colors cursor-pointer"
          >
            Contato
          </button>
        </nav>

        {/* Direita: Botão secundário dourado / pílula transparente com borda dourada */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={onContactClick}
            className="btn-secondary px-5 py-2.5 text-xs font-medium uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Saymonn</span>
          </button>
        </div>

        {/* Mobile Menu Button & Falar Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onContactClick}
            className="btn-secondary px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wide flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-[18px] btn-icon flex items-center justify-center text-white cursor-pointer"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1B1B1D]/95 backdrop-blur-2xl border-b border-[rgba(212,176,122,0.5)] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium uppercase tracking-wider text-white/80 font-body">
            <button
              type="button"
              onClick={() => scrollTo('inicio')}
              className="text-left py-2 hover:text-[#D4B07A] transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              type="button"
              onClick={() => scrollTo('destaques')}
              className="text-left py-2 hover:text-[#D4B07A] transition-colors cursor-pointer"
            >
              Destaques
            </button>
            <button
              type="button"
              onClick={() => scrollTo('diferenciais')}
              className="text-left py-2 hover:text-[#D4B07A] transition-colors cursor-pointer"
            >
              Diferenciais
            </button>
            <button
              type="button"
              onClick={() => scrollTo('localizacao')}
              className="text-left py-2 hover:text-[#D4B07A] transition-colors cursor-pointer"
            >
              Localização
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contato')}
              className="text-left py-2 hover:text-[#D4B07A] transition-colors cursor-pointer"
            >
              Contato
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full btn-gold py-3 text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com Saymonn no WhatsApp</span>
          </button>
        </div>
      )}
    </header>
  );
};
