'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PixelSprite } from './PixelSprite';

export type Locale = 'en' | 'pt';

interface PixelShowcaseStageProps {
  locale?: Locale;
}

/**
 * PixelShowcaseStage - Inspirado diretamente na seção "Make your characters move" do PixelLab.ai.
 * Palco interativo de demonstração com o Sprite 32-bit do Gabriel, alternância de estados
 * (Idle, Modo Produção, Super Saiyan > 8000) e especificações técnicas de engenharia.
 */
export function PixelShowcaseStage({ locale = 'pt' }: PixelShowcaseStageProps) {
  const isPt = locale === 'pt';
  const [activeMode, setActiveMode] = useState<'idle' | 'build' | 'saiyan'>('idle');

  return (
    <section className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#13092b] via-[#0d041c] to-[#080214] border-2 border-purple-500/40 shadow-[0_0_0_2px_#040108,0_0_0_4px_#6b21a8,0_20px_50px_rgba(0,0,0,0.85)] space-y-8">
      {/* Header da Seção Estilo PixelLab */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-500/30 pb-4">
        <div>
          <span className="font-pixel text-[10px] text-teal-300 uppercase tracking-widest block">
            {isPt ? '✦ ENGENHARIA EM MOVIMENTO ✦' : '✦ LIVE SYSTEMS IN MOTION ✦'}
          </span>
          <h2 className="font-pixel text-base sm:text-xl text-white font-bold tracking-wide mt-1">
            {isPt ? 'Arquitetura Viva & Sistemas em Produção' : 'Living Architecture & Production Systems'}
          </h2>
        </div>

        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/80 border border-teal-400/40 text-[9px] font-pixel text-teal-300 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_6px_#2dd4bf]" />
          <span>{isPt ? 'STAGE: ATIVO (60 FPS)' : 'STAGE: ACTIVE (60 FPS)'}</span>
        </div>
      </div>

      {/* Grid Principal: Palco Interativo (Esquerda) vs Conteúdo Técnico (Direita) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Lado Esquerdo: Palco do Personagem com Seletores Interativos */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-b from-[#180c38] to-[#0a0216] border border-purple-500/30 shadow-inner relative overflow-hidden group">
          {/* Efeitos de Fundo de Acordo com o Modo */}
          {activeMode === 'build' && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/15 via-transparent to-transparent pointer-events-none animate-pulse" />
          )}
          {activeMode === 'saiyan' && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-purple-900/20 to-transparent pointer-events-none" />
          )}

          {/* Sprite 32-Bit Reativo */}
          <div className="relative z-10 py-4 transition-transform duration-300 group-hover:scale-105">
            <PixelSprite
              size="md"
              hasAura={activeMode !== 'idle'}
            />

            {/* Balão de Status Dinâmico sobre o Sprite */}
            <div className="mt-3 text-center">
              {activeMode === 'idle' && (
                <span className="inline-block px-2.5 py-1 rounded bg-purple-950/90 border border-purple-500/50 font-pixel text-[8px] text-purple-200">
                  {isPt ? '💤 MODO: RECEPTIVO / ANFITRIÃO' : '💤 MODE: WELCOME / IDLE'}
                </span>
              )}
              {activeMode === 'build' && (
                <span className="inline-block px-2.5 py-1 rounded bg-teal-950/90 border border-teal-400 font-pixel text-[8px] text-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.4)]">
                  {isPt ? '⚡ MODO: COMPILAÇÃO EM PRODUÇÃO' : '⚡ MODE: PRODUCTION BUILD'}
                </span>
              )}
              {activeMode === 'saiyan' && (
                <span className="inline-block px-2.5 py-1 rounded bg-amber-950/90 border border-amber-400 font-pixel text-[8px] text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.5)] animate-pulse">
                  {isPt ? '🔥 PODER > 8000! ATIVADO' : '🔥 POWER > 8000! ACTIVATED'}
                </span>
              )}
            </div>
          </div>

          {/* Botões de Alternância de Animação (Estilo Controle Arcade do PixelLab) */}
          <div className="w-full pt-4 border-t border-purple-500/20 flex items-center justify-center gap-2 font-pixel text-[8px]">
            <button
              type="button"
              onClick={() => setActiveMode('idle')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                activeMode === 'idle'
                  ? 'bg-purple-600 text-white font-bold shadow-[0_0_8px_rgba(168,85,247,0.6)]'
                  : 'bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:border-purple-300'
              }`}
            >
              [ IDLE ]
            </button>

            <button
              type="button"
              onClick={() => setActiveMode('build')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                activeMode === 'build'
                  ? 'bg-teal-500 text-black font-bold shadow-[0_0_8px_rgba(45,212,191,0.6)]'
                  : 'bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:border-teal-400'
              }`}
            >
              [ BUILD ]
            </button>

            <button
              type="button"
              onClick={() => setActiveMode('saiyan')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                activeMode === 'saiyan'
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_10px_rgba(245,158,11,0.7)]'
                  : 'bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:border-amber-400'
              }`}
            >
              [ &gt; 8000! ]
            </button>
          </div>
        </div>

        {/* Lado Direito: Texto Explicativo Técnico & Chamada de Ação */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-2">
            <span className="font-pixel text-[9px] text-teal-400 uppercase tracking-wider block">
              {isPt ? 'ALTA DISPONIBILIDADE & RESILIÊNCIA' : 'HIGH AVAILABILITY & RESILIENCE'}
            </span>
            <h3 className="font-pixel text-lg sm:text-2xl text-white font-bold leading-tight">
              {isPt ? 'Construa Sistemas que Nunca Quebram' : 'Engineer Systems That Never Fail'}
            </h3>
          </div>

          <p className="font-sans text-sm sm:text-base text-purple-200/90 leading-relaxed">
            {isPt ? (
              <>
                Assim como cada pixel se encaixa com precisão matemática na tela, cada camada dos seus sistemas — de microsserviços orientados a eventos no <strong>Node.js/NestJS</strong> a pipelines no <strong>n8n</strong> e clusters <strong>AWS ECS</strong> — é orquestrada para suportar alta concorrência com latência mínima.
              </>
            ) : (
              <>
                Just like each pixel locks with mathematical precision into the canvas, every layer of your systems — from event-driven microservices in <strong>Node.js/NestJS</strong> to <strong>n8n</strong> pipelines and <strong>AWS ECS</strong> clusters — is orchestrated to handle massive traffic with sub-second latency.
              </>
            )}
          </p>

          {/* Badges de Métricas Chave em Estilo PixelLab */}
          <div className="grid grid-cols-3 gap-3 pt-1 font-pixel text-center">
            <div className="p-3 rounded-lg bg-[#140b2a] border border-purple-500/30">
              <span className="block text-teal-400 text-xs sm:text-sm font-bold">&lt; 50ms</span>
              <span className="text-[8px] text-purple-300 block uppercase mt-0.5">{isPt ? 'Latência' : 'Latency'}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#140b2a] border border-purple-500/30">
              <span className="block text-emerald-400 text-xs sm:text-sm font-bold">99.9%</span>
              <span className="text-[8px] text-purple-300 block uppercase mt-0.5">Uptime</span>
            </div>
            <div className="p-3 rounded-lg bg-[#140b2a] border border-purple-500/30">
              <span className="block text-amber-300 text-xs sm:text-sm font-bold">+R$ 40k/ano</span>
              <span className="text-[8px] text-purple-300 block uppercase mt-0.5">{isPt ? 'Economia' : 'Saved'}</span>
            </div>
          </div>

          {/* Botões de Ação Estilo PixelLab */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href={`/projects${locale === 'en' ? '?lang=en' : ''}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-pixel text-xs font-bold transition-all shadow-[0_0_12px_rgba(45,212,191,0.35)] cursor-pointer"
            >
              <span>{isPt ? 'VER ARQUITETURAS' : 'VIEW ARCHITECTURES'}</span>
              <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </Link>

            <Link
              href={`/contact${locale === 'en' ? '?lang=en' : ''}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-950/80 hover:bg-purple-900 border border-purple-400/50 text-purple-200 hover:text-white font-pixel text-xs transition-all cursor-pointer"
            >
              <span>{isPt ? 'INICIAR TRANSMISSÃO' : 'START TRANSMISSION'}</span>
              <span className="material-symbols-outlined text-sm">mail</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
