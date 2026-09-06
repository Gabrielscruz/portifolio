'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang');
  const isEn = lang === 'en';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectPrefix = isEn
      ? `Contact from ${name || 'Recruiter / Client'} via Portfolio`
      : `Contato de ${name || 'Recrutador / Cliente'} via Portfólio`;
    const bodyPrefix = isEn
      ? `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      : `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`;

    const subject = encodeURIComponent(subjectPrefix);
    const body = encodeURIComponent(bodyPrefix);
    window.location.href = `mailto:gabriel-blz@outlook.com.br?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12">
      {/* ── HEADER MODERNO DE CONTATO ── */}
      <section className="rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 p-6 sm:p-10 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-teal-300 font-pixel text-[10px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isEn ? '★ DIRECT COMMUNICATION ★' : '★ COMUNICAÇÃO DIRETA ★'}</span>
          </div>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {isEn ? "Let's Connect!" : 'Vamos Conversar!'}
          </h1>
          <p className="font-sans text-base sm:text-lg text-purple-200/90 leading-relaxed">
            {isEn
              ? 'I am open to new challenges, technical leadership, microservices architecture, process automation, and high-criticality software systems. Reach out through your preferred channel:'
              : 'Estou à disposição para novos desafios, liderança técnica, arquitetura de microsserviços, automação de processos e desenvolvimento de sistemas de alta criticidade. Escolha o canal de sua preferência:'}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-purple-300">
            <span className="px-3 py-1 bg-emerald-950/40 border border-emerald-500/40 rounded-lg text-emerald-300 inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {isEn ? 'Status: Open to Opportunities' : 'Status: Aberto a Propostas'}
            </span>
            <span className="px-3 py-1 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-200">
              {isEn ? 'São Paulo, Brazil (Remote / Hybrid)' : 'São Paulo, Brasil (Remoto / Híbrido)'}
            </span>
          </div>
        </div>
      </section>

      {/* ── GRID: CANAIS DIRETOS (ESQUERDA) & FORMULÁRIO (DIREITA) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Lado Esquerdo: Cards de Contato Rápido */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
            <span className="font-pixel text-teal-400 text-sm">{isEn ? '✦ [DIRECT CHANNELS]' : '✦ [CANAIS DIRETOS]'}</span>
            <h2 className="font-sans font-bold text-base text-purple-200 uppercase tracking-wider">
              {isEn ? 'Immediate Channels' : 'Canais Imediatos'}
            </h2>
          </div>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/5511958773054?text=Ol%C3%A1%20Gabriel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 hover:border-emerald-400/80 transition-all flex items-center gap-4 group shadow-sm block"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-xl shrink-0 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider block font-semibold">
                {isEn ? 'Direct WhatsApp (Fastest)' : 'WhatsApp Direto (Recomendado)'}
              </span>
              <span className="font-sans text-sm sm:text-base text-white font-bold group-hover:text-emerald-300 transition-colors block truncate">
                +55 (11) 95877-3054
              </span>
            </div>
            <span className="material-symbols-outlined text-sm text-purple-400 group-hover:text-emerald-300 group-hover:translate-x-1 transition-transform">
              open_in_new
            </span>
          </a>

          {/* E-mail Card */}
          <a
            href="mailto:gabriel-blz@outlook.com.br"
            className="p-5 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 hover:border-teal-400/80 transition-all flex items-center gap-4 group shadow-sm block"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/50 flex items-center justify-center text-teal-300 text-xl shrink-0 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-mono text-[11px] text-teal-300 uppercase tracking-wider block font-semibold">
                {isEn ? 'Professional Email' : 'E-mail Profissional'}
              </span>
              <span className="font-sans text-sm sm:text-base text-white font-bold group-hover:text-teal-300 transition-colors block truncate">
                gabriel-blz@outlook.com.br
              </span>
            </div>
            <span className="material-symbols-outlined text-sm text-purple-400 group-hover:text-teal-300 group-hover:translate-x-1 transition-transform">
              send
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/gabriel-da-silva-cruz-a033a23b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 hover:border-purple-400 transition-all flex items-center gap-4 group shadow-sm block"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/50 flex items-center justify-center text-purple-300 text-xl shrink-0 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined">link</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-mono text-[11px] text-purple-300 uppercase tracking-wider block font-semibold">
                {isEn ? 'LinkedIn Profile' : 'LinkedIn Profissional'}
              </span>
              <span className="font-sans text-sm text-white font-bold group-hover:text-purple-200 transition-colors block truncate">
                linkedin.com/in/gabriel-da-silva-cruz
              </span>
            </div>
            <span className="material-symbols-outlined text-sm text-purple-400 group-hover:text-purple-200 group-hover:translate-x-1 transition-transform">
              open_in_new
            </span>
          </a>

          {/* Garantias de Engenharia */}
          <div className="p-5 rounded-2xl bg-[#0a0216] border border-purple-500/25 space-y-2 font-sans text-xs text-purple-200/80">
            <div className="flex items-center gap-2 text-teal-300 font-mono text-[11px] font-semibold">
              <span>{isEn ? '✦ ARCHITECTURE & CLEAN CODE' : '✦ ARQUITETURA & CLEAN CODE'}</span>
            </div>
            <p className="leading-relaxed">
              {isEn
                ? 'Strong SOLID fundamentals, continuous observability, automated CI/CD pipelines, and cloud infrastructure optimization on AWS.'
                : 'Práticas sólidas de SOLID, observabilidade contínua, pipelines CI/CD automatizados e otimização de infraestrutura em nuvem na AWS.'}
            </p>
          </div>
        </div>

        {/* Lado Direito: Formulário de Mensagem */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#160a2c] via-[#0f0422] to-[#080114] border border-purple-500/35 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-purple-500/25 font-mono text-xs text-teal-300">
            <span>{isEn ? '[ SEND MESSAGE ]' : '[ ENVIAR MENSAGEM ]'}</span>
            <span className="text-purple-300">{isEn ? 'AVAILABLE' : 'DISPONÍVEL'}</span>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-950/80 border border-emerald-400 flex items-center justify-center text-2xl text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.4)]">
                ✓
              </div>
              <h3 className="font-sans text-xl text-white font-extrabold">
                {isEn ? 'MESSAGE READY!' : 'MENSAGEM PREPARADA!'}
              </h3>
              <p className="font-sans text-sm text-purple-200/90 max-w-sm mx-auto">
                {isEn
                  ? 'Your email client has been opened with the drafted message. You can also click below to reach me immediately on WhatsApp:'
                  : 'Seu cliente de e-mail foi acionado com os dados preenchidos. Você também pode clicar abaixo para falar diretamente comigo no WhatsApp:'}
              </p>
              <div className="pt-2 flex flex-col gap-3 items-center">
                <a
                  href="https://wa.me/5511958773054?text=Ol%C3%A1%20Gabriel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-bold text-xs inline-flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>{isEn ? 'CHAT ON WHATSAPP' : 'CONVERSAR NO WHATSAPP'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-xs text-purple-300 hover:text-white underline cursor-pointer pt-1"
                >
                  {isEn ? '[ Send another message ]' : '[ Enviar outra mensagem ]'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-purple-200 block uppercase" htmlFor="name">
                  {isEn ? 'Your Name / Company:' : 'Seu Nome / Empresa:'}
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isEn ? 'e.g. John Doe (Tech Lead)' : 'Ex: Carlos Oliveira (Tech Lead)'}
                  required
                  className="w-full bg-[#0a0216] border border-purple-500/40 focus:border-teal-400 rounded-xl px-4 py-2.5 text-white font-sans text-sm placeholder:text-purple-400/40 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-purple-200 block uppercase" htmlFor="email">
                  {isEn ? 'Your Contact Email:' : 'Seu E-mail de Contato:'}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full bg-[#0a0216] border border-purple-500/40 focus:border-teal-400 rounded-xl px-4 py-2.5 text-white font-sans text-sm placeholder:text-purple-400/40 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-purple-200 block uppercase" htmlFor="message">
                  {isEn ? 'Message / Technical Challenge:' : 'Mensagem / Desafio Técnico:'}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    isEn
                      ? 'Describe your project, required architecture, or hiring opportunity...'
                      : 'Descreva o projeto, arquitetura a ser construída ou oportunidade de contratação...'
                  }
                  required
                  className="w-full bg-[#0a0216] border border-purple-500/40 focus:border-teal-400 rounded-xl px-4 py-2.5 text-white font-sans text-sm placeholder:text-purple-400/40 outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                  <span>{isEn ? 'SEND MESSAGE' : 'ENVIAR MENSAGEM'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={null}>
      <ContactContent />
    </Suspense>
  );
}
