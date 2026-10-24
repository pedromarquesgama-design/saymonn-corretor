import React from 'react';
import { MessageCircle, Instagram, Youtube, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121212] border-t border-[rgba(212,176,122,0.5)] pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand Col (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[18px] btn-icon p-2 shadow-inner text-[#D4B07A]">
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
              <div>
                <span className="text-xl font-bold uppercase tracking-wider text-white block font-display">
                  SAYMONN SPH
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#D4B07A] uppercase block font-display">
                  IMÓVEIS DE ALTO PADRÃO
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 max-w-md leading-relaxed font-body">
              Consultoria imobiliária de alto padrão especializada em condomínios fechados, casas e studios na Costa do Descobrimento. Empreendimentos exclusivos da Incorporadora Matilda em Coroa Vermelha e Porto Seguro - BA.
            </p>

            <div className="text-xs text-[#D4B07A] font-medium pt-1 font-body">
              CRECI-BA Credenciado · Segurança e Transparência Jurídica
            </div>
          </div>

          {/* Links Rápidos (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4B07A] block font-display">
              Navegação Rápida
            </span>
            <ul className="space-y-2 text-xs text-white/70 font-body">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('inicio')}
                  className="hover:text-[#D4B07A] transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('destaques')}
                  className="hover:text-[#D4B07A] transition-colors cursor-pointer"
                >
                  Imóveis em Destaque
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('diferenciais')}
                  className="hover:text-[#D4B07A] transition-colors cursor-pointer"
                >
                  Por Que Escolher Nossos Imóveis
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('localizacao')}
                  className="hover:text-[#D4B07A] transition-colors cursor-pointer"
                >
                  Localização a 300m do Mar
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contato')}
                  className="hover:text-[#D4B07A] transition-colors cursor-pointer"
                >
                  Falar no WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Redes Sociais em Botões Arredondados 18px (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4B07A] block font-display">
              Canais Oficiais
            </span>
            <p className="text-xs text-white/70 font-body">
              Acompanhe as atualizações de obras e lançamentos diários:
            </p>

            {/* Ícones de redes sociais em botões arredondados 18px */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/5573999999999?text=Ol%C3%A1%20Saymonn%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20im%C3%B3veis."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-[18px] btn-icon flex items-center justify-center text-[#D4B07A] hover:bg-[#D4B07A] hover:text-[#2A2418] transition-all shadow-md cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-[18px] btn-icon flex items-center justify-center text-[#D4B07A] hover:bg-[#D4B07A] hover:text-[#2A2418] transition-all shadow-md cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-[18px] btn-icon flex items-center justify-center text-[#D4B07A] hover:bg-[#D4B07A] hover:text-[#2A2418] transition-all shadow-md cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@saymonnsph.com.br"
                className="w-10 h-10 rounded-[18px] btn-icon flex items-center justify-center text-[#D4B07A] hover:bg-[#D4B07A] hover:text-[#2A2418] transition-all shadow-md cursor-pointer"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Base */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-body">
          <p>© {new Date().getFullYear()} SAYMONN SPH — Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Coroa Vermelha & Porto Seguro - Bahia</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-[18px] btn-icon flex items-center justify-center text-[#D4B07A] hover:border-[#D4B07A] transition-colors cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
