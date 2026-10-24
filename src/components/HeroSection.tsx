import React, { useEffect, useState, useRef } from 'react';
import { FilterCategory } from '../types/property';
import { ArrowDown } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

interface HeroSectionProps {
  activeFilter?: FilterCategory;
  onFilterChange?: (filter: FilterCategory) => void;
  onScrollToHighlights: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToHighlights,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Ensure autoplay starts reliably and reloads latest media
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [isMobile]);

  // Subtle scroll parallax on desktop without scaling up (disabled on mobile to keep 100% full screen coverage)
  const translateY = isMobile ? 0 : Math.min(scrollY * 0.12, 60);

  return (
    <section
      id="inicio"
      className="relative min-h-screen min-h-[100dvh] h-[100dvh] sm:h-auto sm:min-h-screen w-full flex flex-col justify-end pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#121212]"
      style={{
        minHeight: '100dvh',
      }}
    >
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="w-full h-full transition-transform duration-100 ease-out will-change-transform"
          style={{
            transform: isMobile ? 'none' : `translateY(${translateY}px)`,
          }}
        >
          <video
            key={isMobile ? 'hero-mobile-new-20261024' : 'hero-desktop-20261024'}
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover sm:scale-[1.04] sm:origin-top"
            style={{
              objectPosition: isMobile ? '28% top' : '38% top',
            }}
          >
            <source
              src={isMobile ? '/videos/hero-mobile-new.mp4?v=202610241519' : '/videos/hero-desktop.mp4?v=202610241519'}
              type="video/mp4"
            />
            <source
              src={isMobile ? '/videos/hero-mobile.mp4?v=202610241519' : '/videos/hero-desktop.mp4?v=202610241519'}
              type="video/mp4"
            />
          </video>
        </div>

      </div>

      {/* Hero Content - Aligned Left, Positioned Down */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full mt-auto">
        <div className="max-w-2xl">
          {/* Título Principal Embossed 3D Champagne Gold Regal */}
          <h1 className="hero-headline text-[clamp(2.15rem,7vw,4.5rem)] font-bold uppercase tracking-tight mb-4 sm:mb-5 font-display">
            <span className="hero-title-line-1">ENCONTRE</span>
            <span className="hero-title-line-rest">SEU IMÓVEL</span>
            <span className="hero-title-line-rest">PERFEITO</span>
            <span className="hero-title-line-rest">NA BAHIA</span>
          </h1>

          {/* Linha Divisória Dourada + Overlay "SAYMONN MACHADO - CONSULTOR IMOBILIÁRIO" */}
          <div className="max-w-lg sm:max-w-xl flex items-end justify-between gap-3 mb-3 sm:mb-4">
            {/* Divisória Curta Dourada */}
            <div className="gold-divider mb-1 sm:mb-1.5" />

            {/* Overlay Saymonn Machado: Posicionado à direita sobre o terno escuro do corretor, acima do card */}
            <div className="flex flex-col items-end text-right select-none pl-2">
              {/* Traço fino dourado */}
              <div className="saymonn-overlay-line" />
              {/* Nome */}
              <span className="saymonn-overlay-name text-[0.85rem] sm:text-[0.98rem] md:text-[1.1rem]">
                SAYMONN MACHADO
              </span>
              {/* Subtítulo */}
              <span className="saymonn-overlay-subtitle text-[8px] sm:text-[9px] md:text-[10px] mt-0.5">
                CONSULTOR IMOBILIÁRIO
              </span>
            </div>
          </div>

          {/* Subtítulo em Card Glassmorphism com Efeito Animated Border Beam */}
          <div className="relative overflow-hidden max-w-lg sm:max-w-xl mb-6 sm:mb-7 p-4 sm:p-5 rounded-[28px] glass-card">
            <BorderBeam
              lightColor="#E8CC91"
              borderWidth={1.5}
              lightWidth={260}
              duration={9}
            />
            <p className="relative z-10 text-sm sm:text-base text-white/90 font-body font-normal leading-relaxed">
              Descubra condomínios exclusivos, studios, apartamentos duplex e casas de alto padrão a apenas 300 metros da praia em Coroa Vermelha e na Orla de Porto Seguro.
            </p>
          </div>

          {/* CTA Button: Botão Primário Pílula Completa com Gradiente Ouro Escovado e Brilho Dourado */}
          <div className="relative z-10 pt-1">
            <button
              type="button"
              onClick={onScrollToHighlights}
              className="btn-gold px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.08em] gap-2.5 cursor-pointer w-full sm:w-auto"
            >
              <span>Ver Destaques</span>
              <ArrowDown className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
