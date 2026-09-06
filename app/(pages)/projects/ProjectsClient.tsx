'use client';

import React from 'react';

interface ProjectsClientProps {
  impactLabel: string;
  impactNumber: string;
  impactDesc: string;
}

export function ProjectsClient({ impactLabel, impactNumber, impactDesc }: ProjectsClientProps) {
  return (
    <div className="relative flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-sm p-6 sm:p-8 bg-gradient-to-b from-[#180a30] via-[#0f0422] to-[#080114] border border-purple-500/40 shadow-xl rounded-2xl text-center space-y-4">
        {/* Topo do Card de Impacto */}
        <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 font-mono text-[11px] text-teal-300">
          <span>[ EDUCAÇÃO & MENTORIA ]</span>
          <span className="text-emerald-400 font-bold inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ATIVO
          </span>
        </div>

        {/* Ícone de Destaque */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-950/80 border border-teal-400/40 flex items-center justify-center text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
          <span className="material-symbols-outlined text-3xl">school</span>
        </div>

        {/* Estatísticas de Impacto */}
        <div className="space-y-1">
          <p className="font-mono text-xs text-purple-300 uppercase tracking-wider">{impactLabel}</p>
          <p className="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-tight">{impactNumber}</p>
          <p className="font-sans text-xs text-purple-200/80 leading-relaxed px-2 pt-1">{impactDesc}</p>
        </div>

        {/* Indicador */}
        <div className="pt-2 border-t border-purple-500/20">
          <div className="flex justify-between font-mono text-[10px] text-purple-300 mb-1.5">
            <span>COMUNIDADE TÉCNICA</span>
            <span className="text-teal-300 font-semibold">ALTO ENGAJAMENTO</span>
          </div>
          <div className="w-full h-1.5 bg-[#090217] rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-purple-500 via-teal-400 to-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
