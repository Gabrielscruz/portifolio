import React from 'react';
import Link from 'next/link';
import { getResolvedLocale, type Locale } from '@/lib/locale';
import {
  PixelHero,
  PixelSection,
  PixelCitySkyline,
  PixelBentoGrid,
  BentoItem,
} from '@/components/PixelArt';
import { getHero, getCompetencies } from '@/lib/sanity.queries';

/**
 * Textos limpos, autênticos e profissionais inspirados no PixelLab.ai:
 * - Sem exageros ("sistema que nunca quebra")
 * - Gabriel como engenheiro de software que joga RPG nas horas vagas (não mestre)
 * - Elementos selecionados de pixel art em harmonia com design moderno
 */
const copy = {
  pt: {
    // Top Bar Status
    playerClass: 'Engenheiro de Software & Arquiteto de Soluções',
    missionsCount: '40+ Projetos & Deploys',
    experienceCount: '6+ Anos em Produção',
    statusReady: 'DISPONÍVEL PARA PROJETOS',

    // Árvore de Capacidades
    skillsTag: 'ESPECIALIDADES TÉCNICAS',
    skillsTitle: 'O Que Eu Construo',
    skillsSubtitle:
      'Soluções completas com arquitetura limpa, alta performance e foco no valor de negócio.',

    // Resultados & Métricas Reais
    statsTag: 'IMPACTO & CONFIABILIDADE',
    statsTitle: 'Engenharia com Foco em Resultados',
    statsSubtitle:
      'Compromisso com código legível, entregas consistentes e infraestrutura estável.',
    statsItems: [
      'Entregas ágeis com arquitetura limpa e manutenível',
      'Comunicação direta, transparente e colaborativa',
      'Aplicações rápidas e responsivas para web e mobile',
      'Microsserviços resilientes preparados para escalar com segurança',
    ],
    powerLevelVal: '99.9% Uptime',
    powerLevelLabel: 'Foco em arquiteturas estáveis, monitoradas e escaláveis',
    expYearsVal: '6+ Anos',
    expYearsLabel: 'Experiência prática em produção',
    savingsVal: 'R$ 40k+ / mês',
    savingsLabel: 'Economizados com automações n8n e integrações',
    savingsQuote:
      '"Meu foco é automatizar tarefas manuais repetitivas e desenvolver softwares que geram impacto real e mensurável."',

    // Hobbies
    hobbiesTag: 'ALÉM DO TERMINAL',
    hobbiesTitle: 'Interesses & Hobbies',
    hobbiesSubtitle:
      'O que me inspira e recarrega a criatividade fora do ambiente de trabalho.',

    // Chamada Final
    bossTag: 'CONTATO DIRETO',
    bossTitle: 'Vamos conversar sobre o seu próximo projeto?',
    bossSubtitle:
      'Estou à disposição para novos desafios técnicos, consultoria e desenvolvimento de softwares de alto impacto.',
    recruitBtn: 'ENTRAR EM CONTATO',
    whatsappBtn: 'FALAR NO WHATSAPP',
  },
  en: {
    playerClass: 'Software Engineer & Solutions Architect',
    missionsCount: '40+ Projects & Deploys',
    experienceCount: '6+ Years in Production',
    statusReady: 'AVAILABLE FOR WORK',

    skillsTag: 'CORE EXPERTISE',
    skillsTitle: 'What I Build',
    skillsSubtitle:
      'Complete end-to-end solutions built with clean architecture, high speed, and business impact.',

    statsTag: 'IMPACT & RELIABILITY',
    statsTitle: 'Engineering Driven by Real Value',
    statsSubtitle:
      'Commitment to maintainable code, agile delivery, and robust infrastructure.',
    statsItems: [
      'Agile releases with clean and documented architecture',
      'Clear, honest, and direct technical collaboration',
      'High-performance, responsive web and mobile interfaces',
      'Resilient microservices engineered to scale safely',
    ],
    powerLevelVal: '99.9% Uptime',
    powerLevelLabel: 'Focus on stable, monitored, and resilient cloud architectures',
    expYearsVal: '6+ Years',
    expYearsLabel: 'Production coding & system scaling',
    savingsVal: 'R$ 40k+ / year',
    savingsLabel: 'Saved through workflow automations and integrations',
    savingsQuote:
      '"My focus is eradicating manual bottlenecks and crafting fast, reliable software that drives measurable savings."',

    hobbiesTag: 'BEYOND THE CODE',
    hobbiesTitle: 'Passions & Downtime',
    hobbiesSubtitle:
      'What sparks my curiosity and creative energy outside the development workstation.',

    bossTag: 'GET IN TOUCH',
    bossTitle: 'Interested in collaborating together?',
    bossSubtitle:
      'I am available to discuss new technical challenges, architectural consulting, and full-stack software development.',
    recruitBtn: 'GET IN TOUCH',
    whatsappBtn: 'CHAT ON WHATSAPP',
  },
};

const skillsList: Record<Locale, BentoItem[]> = {
  pt: [
    {
      id: 'backend',
      icon: 'dns',
      title: 'APIs & Microsserviços Resilientes',
      desc: 'Desenvolvimento de servidores robustos com Node.js, NestJS e Go. Arquitetura em camadas, autenticação segura e filas assíncronas.',
      badges: ['Node.js', 'NestJS', 'Go', 'REST APIs', 'Microsserviços', 'SOLID'],
      highlight: 'APIs preparadas para concorrência e alta disponibilidade',
    },
    {
      id: 'cloud',
      icon: 'cloud_done',
      title: 'Nuvem AWS & Containers Docker',
      desc: 'Configuração de infraestrutura em nuvem (EC2, ECS, S3), conteinerização com Docker, proxies reversos Nginx e deploys contínuos.',
      badges: ['AWS', 'Docker', 'Nginx', 'Linux', 'CI/CD'],
      highlight: 'Ambientes isolados e monitorados em produção 24/7',
    },
    {
      id: 'automation',
      icon: 'sync_alt',
      title: 'Automação Sistemática & Integrações',
      desc: 'Orquestração de processos empresariais com n8n, webhooks e APIs de faturamento fiscal (NF-e/NFS-e), eliminando tarefas manuais.',
      badges: ['n8n', 'Webhooks', 'Integrações Fiscais', 'SEFAZ', 'ETL'],
      highlight: 'Mais de R$ 40 mil/ano economizados em processos',
    },
    {
      id: 'frontend',
      icon: 'devices',
      title: 'Aplicações Web & Mobile',
      desc: 'Interfaces interativas, rápidas e com navegação fluida em Next.js, React e React Native com TypeScript e Tailwind CSS.',
      badges: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind'],
      highlight: 'Design responsivo e excelente experiência do usuário',
    },
    {
      id: 'db',
      icon: 'database',
      title: 'Bancos de Dados & Modelagem',
      desc: 'Estruturação eficiente de dados relacionais e não relacionais. Queries otimizadas, migrações seguras e backups automatizados.',
      badges: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Prisma'],
      highlight: 'Modelagem voltada para integridade e velocidade',
    },
    {
      id: 'data',
      icon: 'insights',
      title: 'Pipelines de Dados & IA',
      desc: 'Extração inteligente de dados com Python, web scraping ético e uso de inteligência artificial aplicada para otimizar fluxos de trabalho.',
      badges: ['Python', 'Web Scraping', 'Machine Learning', 'Dashboards'],
      highlight: 'Inteligência de dados aplicada ao software',
    },
  ],
  en: [
    {
      id: 'backend',
      icon: 'dns',
      title: 'Resilient APIs & Microservices',
      desc: 'Engineering scalable backend services with Node.js, NestJS, and Go. Layered architecture, secure authentication, and messaging queues.',
      badges: ['Node.js', 'NestJS', 'Go', 'REST APIs', 'Microservices', 'SOLID'],
      highlight: 'Engineered for high concurrency and zero-downtime',
    },
    {
      id: 'cloud',
      icon: 'cloud_done',
      title: 'AWS Cloud & Docker Containers',
      desc: 'Production cloud deployments on AWS (EC2, ECS, S3), Docker containerization, Nginx reverse proxies, and automated CI/CD pipelines.',
      badges: ['AWS', 'Docker', 'Nginx', 'Linux', 'CI/CD'],
      highlight: 'Isolated, monitored 24/7 production infrastructure',
    },
    {
      id: 'automation',
      icon: 'sync_alt',
      title: 'Workflow Automation & Integrations',
      desc: 'Complex workflow orchestration with n8n, webhooks, and government fiscal APIs (NF-e/NFS-e) to eliminate manual business bottlenecks.',
      badges: ['n8n', 'Webhooks', 'Fiscal APIs', 'ETL Pipelines'],
      highlight: 'Over BRL 40,000 / year saved in manual operations',
    },
    {
      id: 'frontend',
      icon: 'devices',
      title: 'Web & Mobile Applications',
      desc: 'Interactive, responsive, and blazing-fast user interfaces in Next.js, React, and React Native with TypeScript and Tailwind CSS.',
      badges: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind'],
      highlight: 'Mobile-first responsive UX and smooth navigation',
    },
    {
      id: 'db',
      icon: 'database',
      title: 'Databases & Data Modeling',
      desc: 'Reliable schema design across SQL and NoSQL engines. Query indexing, safe migration pipelines, and automated backup routines.',
      badges: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Prisma'],
      highlight: 'Engineered for strict integrity and fast queries',
    },
    {
      id: 'data',
      icon: 'insights',
      title: 'Data Pipelines & Applied AI',
      desc: 'Data extraction pipelines using Python, web scraping, and generative AI models integrated into core software workflows.',
      badges: ['Python', 'Web Scraping', 'Machine Learning', 'Dashboards'],
      highlight: 'Pragmatic data science applied to software products',
    },
  ],
};

const hobbiesList: Record<
  Locale,
  { icon: string; title: string; tag: string; desc: string }[]
> = {
  pt: [
    {
      icon: 'casino',
      title: 'Jogador de RPG de Mesa & Games',
      tag: 'COOPERAÇÃO & ESTRATÉGIA',
      desc: 'Aventuras em equipe com amigos: raciocínio tático, pensamento analítico e colaboração mútua para superar desafios complexos.',
    },
    {
      icon: 'sports_esports',
      title: 'Games Retrô & PC Gamer',
      tag: 'ENTUSIASTA',
      desc: 'Apreciação por clássicos pixel art e RPGs eletrônicos, além de montagem de hardware e computadores de alta performance.',
    },
    {
      icon: 'palette',
      title: 'Desenho & Pixel Art',
      tag: 'CRIATIVIDADE VISUAL',
      desc: 'Interesse por estética retrô e design visual, que apoiam o olhar apurado para tipografia, espaçamento e UX nas aplicações.',
    },
    {
      icon: 'movie_filter',
      title: 'Animes & Cultura Pop',
      tag: 'HISTÓRIAS',
      desc: 'Fã de sagas bem construídas, evolução contínua, disciplina e dedicação para superar metas.',
    },
  ],
  en: [
    {
      icon: 'casino',
      title: 'Tabletop RPG Player & Gamer',
      tag: 'COOPERATION & STRATEGY',
      desc: 'Party adventures with friends: tactical problem-solving, structured thinking, and close teamwork to tackle challenges.',
    },
    {
      icon: 'sports_esports',
      title: 'Retro Gaming & PC Rigs',
      tag: 'ENTHUSIAST',
      desc: 'Passionate about pixel art classics and video game RPGs, alongside custom PC hardware building and tuning.',
    },
    {
      icon: 'palette',
      title: 'Drawing & Pixel Art Aesthetics',
      tag: 'CREATIVITY',
      desc: 'Interest in visual arts and retro gaming palettes, giving keen attention to typography, spacing, and front-end polish.',
    },
    {
      icon: 'movie_filter',
      title: 'Anime & Pop Culture',
      tag: 'NARRATIVE',
      desc: 'Appreciation for character growth arcs, discipline, persistent learning, and tackling complex milestones.',
    },
  ],
};

interface HomePageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const { lang } = await searchParams;
  const locale: Locale = await getResolvedLocale(lang);

  const t = copy[locale];

  // Tenta carregar dados do Sanity com fallback elegante
  await Promise.all([
    getHero(locale).catch(() => null),
    getCompetencies(locale).catch(() => null),
  ]);

  const skills = skillsList[locale];
  const hobbies = hobbiesList[locale];

  return (
    <>
      {/* ── BANNER CÊNICO PIXEL ART (INSPIRADO NO PIXELLAB.AI & IMAGEM DO USUÁRIO) ── */}
      <PixelCitySkyline badgeText={locale === 'pt' ? '★ SKYLINE NOTURNO 32-BIT ★' : '★ NIGHT CITYSCAPE 32-BIT ★'} />

      {/* ── HERO SECTION: APRESENTAÇÃO MODERNA E PROFISSIONAL ── */}
      <PixelHero.Root>
        <div className="max-w-4xl mx-auto space-y-6">
          <PixelHero.Stats locale={locale} />

          <PixelHero.DialogueBox>
            <PixelHero.Text locale={locale} />
            <PixelHero.Actions locale={locale} />
          </PixelHero.DialogueBox>

          {/* Cards de Métricas Rápidas em Estilo Bento */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-gradient-to-b from-[#130728] to-[#0a0316] border border-purple-500/25">
              <span className="font-pixel text-[9px] text-teal-300 block mb-1">EXPERIÊNCIA</span>
              <span className="font-sans font-bold text-lg sm:text-xl text-white block">{t.expYearsVal}</span>
              <span className="font-sans text-xs text-purple-200/70">{locale === 'pt' ? 'Em Produção' : 'In Production'}</span>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-b from-[#130728] to-[#0a0316] border border-purple-500/25">
              <span className="font-pixel text-[9px] text-teal-300 block mb-1">ENTREGAS</span>
              <span className="font-sans font-bold text-lg sm:text-xl text-white block">{t.missionsCount}</span>
              <span className="font-sans text-xs text-purple-200/70">{locale === 'pt' ? 'Projetos no Ar' : 'Live Releases'}</span>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-b from-[#130728] to-[#0a0316] border border-purple-500/25">
              <span className="font-pixel text-[9px] text-amber-300 block mb-1">ECONOMIA</span>
              <span className="font-sans font-bold text-lg sm:text-xl text-amber-300 block">{t.savingsVal}</span>
              <span className="font-sans text-xs text-purple-200/70">{locale === 'pt' ? 'Em Automações' : 'In Automations'}</span>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-b from-[#130728] to-[#0a0316] border border-purple-500/25">
              <span className="font-pixel text-[9px] text-purple-300 block mb-1">HOBBY</span>
              <span className="font-sans font-bold text-lg sm:text-xl text-purple-200 block">RPG & Games</span>
              <span className="font-sans text-xs text-purple-200/70">{locale === 'pt' ? 'Jogador nas Horas Vagas' : 'Tabletop & Retro'}</span>
            </div>
          </div>
        </div>
      </PixelHero.Root>

      {/* ── BENTO GRID DE CAPACIDADES TÉCNICAS (ESTILO PIXELLAB.AI) ── */}
      <PixelSection.Root className="bg-[#090314]">
        <PixelSection.Header>
          <PixelSection.Tag>{t.skillsTag}</PixelSection.Tag>
          <PixelSection.Title>{t.skillsTitle}</PixelSection.Title>
          <PixelSection.Subtitle>{t.skillsSubtitle}</PixelSection.Subtitle>
        </PixelSection.Header>

        <PixelBentoGrid items={skills} locale={locale} />
      </PixelSection.Root>

      {/* ── IMPACTO REAL & ENGENHARIA DE SOFTWARE ── */}
      <PixelSection.Root className="bg-[#0b0419]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Lado Esquerdo: Princípios & Práticas de Engenharia */}
          <div className="lg:col-span-6 space-y-6">
            <PixelSection.Tag>{t.statsTag}</PixelSection.Tag>
            <PixelSection.Title className="!text-left">{t.statsTitle}</PixelSection.Title>
            <PixelSection.Subtitle className="!text-left">{t.statsSubtitle}</PixelSection.Subtitle>

            <div className="space-y-3.5 pt-2 font-sans text-base text-purple-100">
              {t.statsItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-teal-400 font-pixel text-xs shrink-0 select-none mt-1">✦</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Métricas Limpas & Modernas */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card Uptime & Disponibilidade */}
            <div className="sm:col-span-2 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0d041c] border border-purple-500/30 p-6 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-500/20 text-[11px] font-mono text-teal-300">
                <span>[ ARQUITETURA ESTÁVEL ]</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  PRODUÇÃO
                </span>
              </div>
              <div className="font-sans text-3xl sm:text-4xl text-white font-extrabold mb-2 tracking-tight">
                {t.powerLevelVal}
              </div>
              <p className="font-sans text-sm sm:text-base text-purple-200/80 leading-relaxed">
                {t.powerLevelLabel}
              </p>
            </div>

            {/* Exp Box */}
            <div className="rounded-xl bg-gradient-to-b from-[#120624] to-[#090314] border border-purple-500/25 p-5">
              <div className="font-sans text-2xl text-white font-bold mb-1">
                {t.expYearsVal}
              </div>
              <div className="font-mono text-xs text-purple-300 uppercase">
                {t.expYearsLabel}
              </div>
            </div>

            {/* Savings Box */}
            <div className="rounded-xl bg-gradient-to-b from-[#120624] to-[#090314] border border-emerald-500/30 p-5">
              <div className="font-sans text-2xl text-emerald-400 font-bold mb-1">
                {t.savingsVal}
              </div>
              <div className="font-mono text-xs text-emerald-200/80 uppercase">
                {t.savingsLabel}
              </div>
            </div>

            {/* Citação Direta */}
            <div className="sm:col-span-2 rounded-xl bg-purple-950/30 border border-purple-500/20 p-5">
              <p className="font-sans text-sm sm:text-base text-purple-100 italic leading-relaxed">
                {t.savingsQuote}
              </p>
            </div>
          </div>
        </div>
      </PixelSection.Root>

      {/* ── INTERESSES & HOBBIES (ALÉM DO CÓDIGO) ── */}
      <PixelSection.Root className="bg-[#090314]">
        <PixelSection.Header>
          <PixelSection.Tag>{t.hobbiesTag}</PixelSection.Tag>
          <PixelSection.Title>{t.hobbiesTitle}</PixelSection.Title>
          <PixelSection.Subtitle>{t.hobbiesSubtitle}</PixelSection.Subtitle>
        </PixelSection.Header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {hobbies.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/25 p-5 space-y-3 flex flex-col justify-between hover:border-purple-400/50 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-teal-300">
                    <span className="material-symbols-outlined text-xl">{h.icon}</span>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-purple-900/30 text-purple-300 border border-purple-500/20">
                    {h.tag}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-base text-white">{h.title}</h3>
                <p className="font-sans text-xs text-purple-200/80 leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </PixelSection.Root>

      {/* ── CHAMADA FINAL PARA AÇÃO (ESTILO MODERNO PIXELLAB.AI) ── */}
      <PixelSection.Root className="bg-[#06020c]">
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-[#15072c] to-[#090314] border border-purple-500/35 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 font-pixel text-[10px] text-teal-300">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>{t.bossTag}</span>
          </div>

          <h3 className="font-sans text-2xl sm:text-3xl text-white font-extrabold tracking-tight leading-snug">
            {t.bossTitle}
          </h3>

          <p className="font-sans text-base sm:text-lg text-purple-200 max-w-xl mx-auto leading-relaxed">
            {t.bossSubtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href={`/contact${locale === 'en' ? '?lang=en' : ''}`}>
              <button className="px-6 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(45,212,191,0.35)] cursor-pointer">
                <span>✦ {t.recruitBtn}</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </Link>

            <a
              href="https://wa.me/5511958773054?text=Ol%C3%A1%20Gabriel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 hover:text-emerald-100 border border-emerald-500/40 font-sans font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.whatsappBtn}</span>
            </a>
          </div>
        </div>
      </PixelSection.Root>
    </>
  );
}
