import React from 'react';
import { PixelHeroActions, PixelHeroActionsProps } from './PixelHeroActions';

export interface PixelHeroRootProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PixelHero.Root - Container com iluminação ambiente roxa noturna e layout moderno.
 */
export function PixelHeroRoot({ children, className = '' }: PixelHeroRootProps) {
  return (
    <section className={`relative pt-12 pb-16 overflow-hidden bg-[#090314] ${className}`}>
      {/* Brilhos de luz ambiente sutis */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-700/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-20 w-full">
        {children}
      </div>
    </section>
  );
}

export interface PixelHeroStatsProps {
  locale?: 'pt' | 'en';
}

/**
 * PixelHero.Stats - Barra de métricas e status com acentos de pixel art (estilo PixelLab.ai).
 */
export function PixelHeroStats({ locale = 'pt' }: PixelHeroStatsProps) {
  const isPt = locale === 'pt';

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/30 text-teal-300 font-pixel text-[10px]">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        <span>GABRIEL CRUZ</span>
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#120526] border border-purple-500/25 text-purple-200 text-xs font-mono">
        <span className="text-amber-400 font-pixel text-[10px]">★</span>
        <span>{isPt ? 'Full Stack & Arquitetura' : 'Full Stack & Architecture'}</span>
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>{isPt ? 'Disponível para Projetos' : 'Available for Projects'}</span>
      </div>
    </div>
  );
}

export interface PixelHeroDialogueProps {
  children: React.ReactNode;
}

/**
 * PixelHero.DialogueBox - Card moderno com cantos arredondados, bordas sutis e fundo translúcido escuro.
 */
export function PixelHeroDialogueBox({ children }: PixelHeroDialogueProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#130726]/90 to-[#0c0419]/90 border border-purple-500/30 backdrop-blur-md p-6 sm:p-8 lg:p-10 space-y-6 shadow-2xl">
      {children}
    </div>
  );
}

export interface PixelHeroTextProps {
  locale?: 'pt' | 'en';
}

/**
 * PixelHero.Text - Texto profissional, limpo e direto:
 * - Sem exageros como "sistema que nunca quebra"
 * - Gabriel como engenheiro de software que constrói soluções robustas e joga RPG nas horas vagas
 * - Tipografia moderna (sans-serif) para leitura agradável
 */
export function PixelHeroText({ locale = 'pt' }: PixelHeroTextProps) {
  const isPt = locale === 'pt';

  return (
    <div className="space-y-4">
      {/* Título Principal */}
      <div className="space-y-2">
        <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          {isPt ? (
            <>
              Engenharia de Software &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-amber-300">
                Arquitetura de Sistemas
              </span>
            </>
          ) : (
            <>
              Software Engineering &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-amber-300">
                Systems Architecture
              </span>
            </>
          )}
        </h1>
      </div>

      {/* Descrição Autêntica e Profissional */}
      <p className="font-sans text-base sm:text-lg text-purple-200/90 leading-relaxed max-w-3xl">
        {isPt ? (
          <>
            Olá! Sou o <strong className="text-white font-semibold">Gabriel</strong>, engenheiro de software focado em construir aplicações web e mobile modernas, microsserviços resilientes com Node.js/NestJS/Go e automações inteligentes em nuvem (AWS).
          </>
        ) : (
          <>
            Hi! I am <strong className="text-white font-semibold">Gabriel</strong>, a software engineer specialized in building modern web and mobile apps, resilient microservices with Node.js/NestJS/Go, and smart cloud automations (AWS).
          </>
        )}
      </p>

      {/* Nota Pessoal sobre Jogar RPG & Games Retrô */}
      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-purple-300/80 pt-1">
        <span className="font-pixel text-teal-400 text-xs">🎮</span>
        <span>
          {isPt
            ? 'Nas horas vagas: jogador apaixonado de RPG de mesa e videogame, apreciador da estética pixel art e tecnologia.'
            : 'In my spare time: tabletop & video game RPG player, pixel art enthusiast, and tech tinkerer.'}
        </span>
      </div>
    </div>
  );
}

export type { PixelHeroActionsProps };
export { PixelHeroActions };

export const PixelHero = {
  Root: PixelHeroRoot,
  Stats: PixelHeroStats,
  DialogueBox: PixelHeroDialogueBox,
  Text: PixelHeroText,
  Actions: PixelHeroActions,
};
