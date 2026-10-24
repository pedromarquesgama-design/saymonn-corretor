import React from 'react';
import { MapPin, Landmark, ShieldCheck, Handshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: MapPin,
      title: 'LOCALIZAÇÃO PRIVILEGIADA',
      desc: 'A apenas 300 metros (5 min a pé) das primeiras praias de Coroa Vermelha, próximo a mercado, farmácia e Caminho de Moisés.',
    },
    {
      icon: Landmark,
      title: 'FINANCIAMENTO FACILITADO',
      desc: 'Opções flexíveis pelo banco (Caixa Econômica Federal) ou financiamento direto com a construtora.',
    },
    {
      icon: ShieldCheck,
      title: 'TRADIÇÃO E SEGURANÇA',
      desc: '7º Condomínio construído pela Incorporadora Matilda em Coroa Vermelha, com cartório de registro a 500 metros.',
    },
    {
      icon: Handshake,
      title: 'CONDIÇÕES NEGOCIÁVEIS',
      desc: 'Atendimento direto e personalizado com Saymonn SPH para estruturar a melhor proposta para você.',
    },
  ];

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-[#121212] relative z-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Container Glassmorphism com Borda 28px e Realce Dourado */}
        <div className="glass-card rounded-[28px] p-8 md:p-14">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4B07A] font-body block mb-2">
              Diferenciais Exclusivos
            </span>
            <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase text-metallic-gold tracking-tight font-display">
              POR QUE ESCOLHER NOSSOS IMÓVEIS
            </h3>
            <div className="gold-divider mx-auto mt-4" />
          </div>

          {/* 4 Colunas com Linhas Verticais Sutis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/15">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start lg:px-6 first:lg:pl-0 last:lg:pr-0 space-y-3"
                >
                  {/* Ícone Linear em Botão Arredondado 18px */}
                  <div className="w-14 h-14 rounded-[18px] btn-icon flex items-center justify-center text-[#D4B07A] shadow-inner">
                    <IconComp className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-wide text-white font-display">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
