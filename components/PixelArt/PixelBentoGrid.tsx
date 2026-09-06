import React from 'react';

export interface BentoItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
  badges: string[];
  highlight?: string;
  span?: string;
}

interface PixelBentoGridProps {
  items: BentoItem[];
  locale?: 'pt' | 'en';
}

/**
 * PixelBentoGrid - Grid moderno e elegante de capacidades inspirado no PixelLab.ai:
 * - Cards escuros com cantos arredondados e bordas sutis em roxo/índigo
 * - Ícones de alto contraste em Ciano / Teal vibrante
 * - Tipografia limpa e moderna (sans-serif) para leitura impecável
 * - Elementos de pixel art nos badges, indicadores e detalhes pontuais
 */
export function PixelBentoGrid({ items, locale = 'pt' }: PixelBentoGridProps) {
  const isPt = locale === 'pt';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <div
          key={item.id}
          className={`relative group rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/25 hover:border-teal-400/50 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] ${item.span ?? ''
            }`}
        >
          {/* Brilho sutil no canto do card ao passar o mouse */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 group-hover:bg-teal-500/15 blur-2xl rounded-full transition-all duration-500 pointer-events-none" />

          <div className="space-y-4 relative z-10">
            {/* Cabeçalho do Card: Ícone em Teal + Indicador Retrô */}
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-400/40 flex items-center justify-center text-teal-300 group-hover:text-teal-200 group-hover:border-teal-400/60 shadow-[0_0_15px_rgba(45,212,191,0.15)] transition-all">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <span className="font-pixel text-[9px] px-2.5 py-1 rounded bg-[#090314] border border-purple-500/30 text-purple-300">
                [ 32-BIT ]
              </span>
            </div>

            {/* Título & Descrição em Tipografia Moderna e Legível */}
            <div>
              <h3 className="font-sans font-bold text-lg text-white group-hover:text-teal-200 transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-purple-200/80 leading-relaxed mt-2">
                {item.desc}
              </p>
            </div>


          </div>

          {/* Rodapé: Tags Técnicas Limpas com Acento Pixel */}
          <div className="pt-5 mt-5 border-t border-purple-500/15 relative z-10">
            <div className="flex flex-wrap gap-1.5">
              {item.badges.map((b) => (
                <span
                  key={b}
                  className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-200 group-hover:border-purple-400/40 transition-colors"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
