'use client';

import React from 'react';
import Link from 'next/link';

interface ExperienceItem {
  _id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  description?: string;
  highlight?: string;
  badges?: string[];
  techStack?: string[];
  listItems?: string[];
  companyUrl?: string;
}
interface EducationItem {
  _id: string;
  degree: string;
  institution: string;
  period?: string;
  isCurrent?: boolean;
}
interface CertificationItem {
  _id: string;
  name: string;
  level?: string;
  icon?: string;
  credentialUrl?: string;
}

interface I18nStrings {
  experienceTitle: string;
  experienceSubtitle: string;
  educationLabel: string;
  certLabel: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

interface ExperienceClientProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  locale: 'en' | 'pt';
  i18n: I18nStrings;
}

export function ExperienceClient({
  experiences,
  education,
  certifications,
  locale,
  i18n,
}: ExperienceClientProps) {
  return (
    <div className="space-y-16 pb-20">
      {/* ── TIMELINE DE EXPERIÊNCIAS PROFISSIONAIS ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 border-b border-purple-500/30 pb-3">
          <span className="font-pixel text-teal-400 text-sm">✦ [CARREIRA]</span>
          <h2 className="font-sans font-bold text-base md:text-lg text-purple-200 uppercase tracking-wider">
            {locale === 'pt' ? 'Histórico Profissional & Cargos' : 'Career History & Key Roles'}
          </h2>
        </div>

        <div className="space-y-8 relative">
          {/* Linha da timeline moderna */}
          <div className="absolute left-4 md:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-teal-400/80 via-purple-500 to-purple-900 hidden sm:block" />

          {experiences.map((exp) => (
            <div key={exp._id} className="relative sm:pl-14">
              {/* Marcador de checkpoint */}
              <div className="absolute left-2.5 md:left-4.5 top-6 w-3.5 h-3.5 -translate-x-1/2 bg-[#090217] border-2 border-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.6)] hidden sm:flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
              </div>

              {/* Card Moderno do Cargo */}
              <div
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border ${
                  exp.isCurrent
                    ? 'border-purple-400/60 shadow-[0_0_25px_rgba(168,85,247,0.15)]'
                    : 'border-purple-500/25 hover:border-purple-400/50 transition-colors'
                }`}
              >
                {/* Cabeçalho do Card */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-purple-500/20">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs text-teal-300 bg-purple-950/80 px-2.5 py-0.5 rounded-md border border-purple-500/40">
                        {exp.period}
                      </span>
                      {exp.isCurrent && (
                        <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-500/40 font-semibold inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {locale === 'pt' ? 'CARGO ATUAL' : 'CURRENT POSITION'}
                        </span>
                      )}
                    </div>
                    <h3 className="font-sans text-xl sm:text-2xl text-white font-extrabold flex flex-wrap items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-purple-400 font-normal">@</span>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-300 hover:text-teal-200 underline decoration-teal-400/50 underline-offset-4 inline-flex items-center gap-1 transition-colors"
                        >
                          {exp.company}
                          <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                      ) : (
                        <span className="text-teal-300">{exp.company}</span>
                      )}
                    </h3>
                  </div>

                  {/* Badges de Destaque */}
                  {exp.badges && exp.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.badges.map((b) => (
                        <span
                          key={b}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/30 text-purple-200"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Descrição & Destaque */}
                <div className="mb-6 space-y-3 font-sans text-sm text-purple-100/90 leading-relaxed">
                  <p>
                    {exp.description}
                    {exp.highlight && (
                      <span className="inline-block mt-2 font-sans font-semibold text-xs text-teal-300 bg-teal-950/30 border border-teal-400/30 px-3 py-1.5 rounded-lg">
                        ✦ {exp.highlight}
                      </span>
                    )}
                  </p>
                </div>

                {/* Lista de Realizações Técnicas */}
                {exp.listItems && exp.listItems.length > 0 && (
                  <div className="mb-6 bg-[#0c0317]/80 p-5 rounded-xl border border-purple-500/20">
                    <p className="font-mono text-xs text-purple-300 mb-3 uppercase tracking-wider font-semibold">
                      {locale === 'pt' ? 'Realizações & Responsabilidades:' : 'Key Impact & Responsibilities:'}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {exp.listItems.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-purple-200">
                          <span className="text-teal-400 font-pixel text-[10px] shrink-0 mt-0.5 select-none">✦</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack & Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-purple-500/20">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.companyUrl && (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-semibold text-xs px-3.5 py-1.5 rounded-lg bg-purple-950/60 hover:bg-purple-900/80 text-purple-200 hover:text-white flex items-center gap-1.5 transition-colors border border-purple-400/30"
                    >
                      <span>Visitar {exp.company.replace(' Tecnologia', '')}</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCAÇÃO & CERTIFICAÇÕES ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Educação */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
            <span className="font-pixel text-teal-400 text-sm">✦ [FORMAÇÃO]</span>
            <h3 className="font-sans font-bold text-base text-purple-200 uppercase">
              {i18n.educationLabel}
            </h3>
          </div>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu._id}
                className="p-5 rounded-xl bg-gradient-to-b from-[#140828] to-[#0c0318] border border-purple-500/30 space-y-1.5 hover:border-purple-400/50 transition-colors"
              >
                <span className="font-mono text-xs text-teal-300 font-semibold">{edu.period}</span>
                <h4 className="font-sans text-base text-white font-bold">{edu.degree}</h4>
                <p className="text-xs text-purple-300/80 font-sans">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
            <span className="font-pixel text-teal-400 text-sm">✦ [CERTIFICAÇÕES]</span>
            <h3 className="font-sans font-bold text-base text-purple-200 uppercase">
              {i18n.certLabel}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert) => {
              const card = (
                <div className="p-4 rounded-xl bg-gradient-to-b from-[#140828] to-[#0c0318] border border-purple-500/30 hover:border-purple-400/60 flex items-start gap-3 transition-colors h-full">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-400/40 flex items-center justify-center shrink-0 text-teal-300">
                    <span className="material-symbols-outlined text-base">{cert.icon ?? 'verified'}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="font-sans font-semibold text-xs text-white truncate">{cert.name}</h5>
                    <p className="text-[11px] text-purple-300 font-sans leading-tight mt-0.5">{cert.level}</p>
                  </div>
                </div>
              );

              return cert.credentialUrl ? (
                <a
                  key={cert._id}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-[1.01] transition-transform"
                >
                  {card}
                </a>
              ) : (
                <div key={cert._id}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="rounded-2xl bg-gradient-to-b from-[#15072c] to-[#090314] border border-purple-500/35 p-8 sm:p-12 text-center space-y-4 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 font-pixel text-[10px] text-teal-300">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span>★ {locale === 'pt' ? 'OPORTUNIDADES' : 'OPPORTUNITIES'} ★</span>
        </div>
        <h3 className="font-sans text-2xl md:text-3xl text-white font-extrabold tracking-tight">
          {i18n.ctaTitle}
        </h3>
        <p className="text-sm sm:text-base text-purple-200/90 max-w-xl mx-auto font-sans leading-relaxed">
          {i18n.ctaDesc}
        </p>
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-xs inline-flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)] cursor-pointer"
          >
            <span>✦ {i18n.ctaSecondary}</span>
          </Link>
          <a
            href="https://wa.me/5511958773054?text=Ol%C3%A1%20Gabriel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 font-sans font-semibold text-xs inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
