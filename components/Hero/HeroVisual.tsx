'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

export interface HeroVisualProps extends React.HTMLAttributes<HTMLDivElement> {
  locale?: 'pt' | 'en';
}

/**
 * Hero.Visual - Ilustração e palco 3D com estilo Pixar Art no tema Roxo.
 * Apresenta uma estética lúdica e sofisticada, com iluminação quente de estúdio e materiais táteis.
 */
export function HeroVisual({ locale = 'pt', className, ...props }: HeroVisualProps) {
  const [activeTab, setActiveTab] = useState<'build' | 'stack'>('build');

  const isPt = locale === 'pt';

  return (
    <div
      className={classNames(
        'relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center',
        className
      )}
      {...props}
    >
      {/* Halo de iluminação volumétrica Pixar */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600/35 via-fuchsia-500/25 to-amber-400/25 blur-3xl opacity-80 animate-pulse pointer-events-none" />

      {/* Cartão principal no estilo Pixar Art 3D */}
      <div className="relative w-full rounded-3xl bg-[#170d33]/90 p-6 sm:p-8 border-2 border-purple-400/30 shadow-[0_25px_60px_-15px_rgba(147,51,234,0.5),0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-xl overflow-hidden">
        {/* Luz de topo (Specular highlight Pixar) */}
        <div className="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-transparent via-purple-200/60 to-transparent rounded-full" />

        {/* Cabeçalho do Card com Avatar Pixar */}
        <div className="flex items-center justify-between pb-6 border-b border-purple-500/20">
          <div className="flex items-center gap-3.5">
            {/* Avatar 3D Pixar Stylized */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-800 p-0.5 shadow-lg shadow-purple-600/40 border border-purple-300/40 flex items-center justify-center overflow-hidden group">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background glow */}
                <circle cx="50" cy="50" r="45" fill="url(#avatarBg)" />
                {/* Hoodie body */}
                <path d="M20 95 C20 70 35 60 50 60 C65 60 80 70 80 95 Z" fill="#6b21a8" />
                <path d="M38 65 L50 78 L62 65 Z" fill="#9333ea" />
                {/* Head */}
                <circle cx="50" cy="42" r="22" fill="#fcd34d" />
                {/* Hair */}
                <path d="M28 40 C28 22 40 18 50 18 C60 18 72 22 72 40 C70 32 65 26 50 26 C35 26 30 32 28 40 Z" fill="#451a03" />
                {/* Pixar Glasses */}
                <circle cx="41" cy="42" r="7" stroke="#1e1b4b" strokeWidth="2.5" fill="#e0e7ff" fillOpacity="0.3" />
                <circle cx="59" cy="42" r="7" stroke="#1e1b4b" strokeWidth="2.5" fill="#e0e7ff" fillOpacity="0.3" />
                <line x1="48" y1="42" x2="52" y2="42" stroke="#1e1b4b" strokeWidth="2" />
                {/* Eyes */}
                <circle cx="42" cy="42" r="2.5" fill="#1e1b4b" />
                <circle cx="60" cy="42" r="2.5" fill="#1e1b4b" />
                <circle cx="43" cy="41" r="0.8" fill="#ffffff" />
                <circle cx="61" cy="41" r="0.8" fill="#ffffff" />
                {/* Smile */}
                <path d="M44 52 Q50 57 56 52" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Defs */}
                <defs>
                  <radialGradient id="avatarBg" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Ponto de luz da Lâmpada Pixar */}
              <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-white/60 shadow-sm shadow-amber-300 animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 text-xs">✦</span>
                <span className="text-xs font-bold text-amber-300 tracking-wide uppercase">
                  {isPt ? 'Engenheiro de Software' : 'Software Engineer'}
                </span>
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">Gabriel Da Silva Cruz</h3>
              <p className="text-xs text-purple-300/80">{isPt ? 'São Paulo, Brasil' : 'São Paulo, Brazil'}</p>
            </div>
          </div>

          {/* Badge de disponibilidade */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{isPt ? 'Disponível' : 'Available'}</span>
          </div>
        </div>

        {/* Palco interativo interno com luz suave de estúdio */}
        <div className="my-6 relative rounded-2xl bg-[#110924] p-5 sm:p-6 border border-purple-500/20 overflow-hidden shadow-inner">
          {/* Lâmpada de estúdio Pixar (luz quente) */}
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-amber-400/15 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-purple-600/25 blur-2xl pointer-events-none" />

          {/* Botões seletores táteis estilo Pixar */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <button
              onClick={() => setActiveTab('build')}
              className={classNames(
                'px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer',
                activeTab === 'build'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_4px_16px_rgba(147,51,234,0.5)] border border-purple-300/40 scale-105'
                  : 'text-purple-300 hover:text-white bg-purple-950/40 border border-transparent'
              )}
            >
              {isPt ? '🚀 O Que Eu Construo' : '🚀 What I Build'}
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={classNames(
                'px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer',
                activeTab === 'stack'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_4px_16px_rgba(147,51,234,0.5)] border border-purple-300/40 scale-105'
                  : 'text-purple-300 hover:text-white bg-purple-950/40 border border-transparent'
              )}
            >
              {isPt ? '🛠️ Tecnologias Principais' : '🛠️ Main Technologies'}
            </button>
          </div>

          {activeTab === 'build' ? (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0">
                  <span className="material-symbols-outlined text-base">web</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">
                    {isPt ? 'Aplicações Web & Mobile' : 'Web & Mobile Applications'}
                  </h4>
                  <p className="text-[11px] text-purple-200/75 leading-relaxed">
                    {isPt
                      ? 'Telas bonitas, fluidas e que funcionam rápido em qualquer celular ou computador.'
                      : 'Fast, responsive interfaces crafted for smooth user experiences on web and mobile.'}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
                  <span className="material-symbols-outlined text-base">dns</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">
                    {isPt ? 'APIs e Servidores Seguros' : 'APIs & Secure Servers'}
                  </h4>
                  <p className="text-[11px] text-purple-200/75 leading-relaxed">
                    {isPt
                      ? 'Sistemas de retaguarda que aguentam muitos acessos simultâneos sem travar.'
                      : 'Robust backends and microservices built for high throughput and reliable uptime.'}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <span className="material-symbols-outlined text-base">cloud_done</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">
                    {isPt ? 'Nuvem, Docker & Deploy' : 'Cloud, Docker & Deployment'}
                  </h4>
                  <p className="text-[11px] text-purple-200/75 leading-relaxed">
                    {isPt
                      ? 'Projetos configurados na AWS e Docker para rodarem 24 horas por dia.'
                      : 'Containerized infrastructure on AWS running 24/7 with zero headaches.'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <p className="text-xs font-bold text-purple-200 mb-1">Frontend</p>
                <p className="text-[11px] text-purple-300/80 font-mono">React • Next.js • Tailwind</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <p className="text-xs font-bold text-purple-200 mb-1">Mobile</p>
                <p className="text-[11px] text-purple-300/80 font-mono">React Native • Expo</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <p className="text-xs font-bold text-purple-200 mb-1">Backend</p>
                <p className="text-[11px] text-purple-300/80 font-mono">Node.js • NestJS • Python</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <p className="text-xs font-bold text-purple-200 mb-1">Nuvem & Bancos</p>
                <p className="text-[11px] text-purple-300/80 font-mono">AWS • Docker • PostgreSQL</p>
              </div>
            </div>
          )}

          {/* Nota amigável sobre Engenharia & Dados */}
          <div className="mt-4 p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-between text-xs text-amber-200">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-amber-400">code</span>
              <span>
                {isPt
                  ? 'Foco 100% em Engenharia de Software'
                  : 'Dedicated to Full Stack Software Engineering'}
              </span>
            </span>
            <span className="font-bold text-white bg-amber-500/30 px-2 py-0.5 rounded-full text-[10px]">
              6+ Anos
            </span>
          </div>
        </div>

        {/* Rodapé do cartão com estilo Pixar */}
        <div className="flex items-center justify-between text-xs text-purple-300/80 pt-1">
          <span className="flex items-center gap-1.5">
            <span className="text-amber-300">✨</span>
            <span>
              {isPt
                ? 'Sistemas práticos, bonitos e bem construídos'
                : 'Crafted with passion, clarity, and precision'}
            </span>
          </span>
          <span className="text-[11px] text-purple-400 font-mono">v6.0</span>
        </div>
      </div>
    </div>
  );
}
