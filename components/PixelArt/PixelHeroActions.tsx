'use client';

import React from 'react';
import Link from 'next/link';

export interface PixelHeroActionsProps {
  locale?: 'pt' | 'en';
}

/**
 * PixelHeroActions - Botões modernos de ação no estilo PixelLab.ai:
 * - Botão principal em Teal com alto contraste e setinha moderna
 * - Botões secundários em roxo escuro com bordas sutis e tipografia legível
 * - Elementos de acento em pixel art sutis
 */
export function PixelHeroActions({ locale = 'pt' }: PixelHeroActionsProps) {
  const isPt = locale === 'pt';

  return (
    <div className="pt-4 flex flex-wrap items-center gap-3">
      {/* Botão Primário: Ver Projetos (Teal) */}
      <Link href={isPt ? '/projects' : '/projects?lang=en'}>
        <button className="group px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-sm flex items-center gap-2.5 transition-all shadow-[0_0_20px_rgba(45,212,191,0.35)] hover:shadow-[0_0_30px_rgba(45,212,191,0.55)] cursor-pointer">
          <span className="font-pixel text-xs">✦</span>
          <span>{isPt ? 'Explorar Projetos' : 'Explore Projects'}</span>
          <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </Link>

      {/* Botão Secundário: Trajetória */}
      <Link href={isPt ? '/experience' : '/experience?lang=en'}>
        <button className="px-5 py-3 rounded-xl bg-[#14072b] hover:bg-[#1f0b40] text-purple-200 hover:text-white border border-purple-500/40 hover:border-purple-400 font-sans font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer">
          <span className="text-purple-400 font-pixel text-xs">▣</span>
          <span>{isPt ? 'Trajetória & Stack' : 'Experience & Stack'}</span>
        </button>
      </Link>

      {/* Botão Contato Direto: WhatsApp */}
      <a
        href="https://wa.me/5511958773054?text=Ol%C3%A1%20Gabriel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 hover:text-emerald-100 border border-emerald-500/40 hover:border-emerald-400 font-sans font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
