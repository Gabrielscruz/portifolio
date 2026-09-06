import React from 'react';
import Link from 'next/link';
import { getProjects } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity';
import { ProjectsClient } from './ProjectsClient';
import { getResolvedLocale, type Locale } from '@/lib/locale';

interface Project {
  _id: string;
  title: string;
  slug?: string;
  category: string;
  isFeatured?: boolean;
  description?: string;
  highlight?: string;
  image?: { asset: { _ref: string } };
  techStack?: string[];
  icon?: string;
  projectUrl?: string;
  githubUrl?: string;
  caseStudyLabel?: string;
}

const i18n = {
  en: {
    pageTitle: 'Projects & Engineering',
    pageSubtitle: 'Architecting scalable enterprise platforms, cloud backends, and high-impact automated workflows.',
    featuredLabel: 'FEATURED ARCHITECTURAL PROJECT',
    featuredSuffix: 'in annual licensing costs while dramatically improving throughput and system uptime.',
    archTitle: 'Software Architecture & Cloud Deployments',
    eduTitle: 'Technical Education & Mentorship',
    eduSubtitle: 'Bridging software theory and practical engineering through courses, real-world pipelines, and direct mentorship.',
    personalTitle: 'Personal Projects & Prototyping',
    impactLabel: 'Impact & Students',
    impactNumber: '500+ Students',
    impactDesc: 'Engineers & developers mentored in workflow automation, React Native, and software architecture.',
    ctaTitle: 'Ready to build your next platform?',
    ctaDesc: "Whether designing an enterprise platform, automating critical workflows, or upgrading cloud infrastructure—I'm ready to collaborate.",
    ctaPrimary: 'Get in Touch',
    ctaSecondary: 'View GitHub',
  },
  pt: {
    pageTitle: 'Projetos & Portfólio',
    pageSubtitle: 'Desenvolvimento de sistemas corporativos escaláveis, arquitetura em nuvem e automações de alto impacto.',
    featuredLabel: 'PROJETO ARQUITETURAL EM DESTAQUE',
    featuredSuffix: 'em custos anuais de licenciamento, elevando o throughput de dados e a estabilidade do sistema.',
    archTitle: 'Arquitetura de Software & Soluções Cloud',
    eduTitle: 'Educação Técnica & Mentoria',
    eduSubtitle: 'Conectando a teoria de software à prática da engenharia através de cursos, pipelines reais e mentoria.',
    personalTitle: 'Projetos Pessoais & Prototipação',
    impactLabel: 'Impacto & Alunos',
    impactNumber: '500+ Alunos',
    impactDesc: 'Desenvolvedores e engenheiros mentorados em automação, React Native e engenharia de software.',
    ctaTitle: 'Vamos construir sua próxima plataforma?',
    ctaDesc: 'Seja desenvolvendo um software do zero, integrando APIs fiscais ou automatizando workflows críticos—vamos conversar.',
    ctaPrimary: 'Entrar em Contato',
    ctaSecondary: 'Ver GitHub',
  },
};

const fallbackProjects: Record<Locale, Project[]> = {
  en: [
    { _id: 'fp', title: 'Thinkin Custom Enterprise Platform', category: 'featured', isFeatured: true, description: 'Engineered a mission-critical platform to replace expensive third-party enterprise software. This delivered over ', highlight: 'R$ 40,000 / year saved', techStack: ['React Native', 'Node.js', 'NestJS', 'AWS Cloud', 'PostgreSQL'], caseStudyLabel: 'Explore Platform', projectUrl: 'https://thinkin.com.br' },
    { _id: 'a0', title: 'Konvix Cloud ERP & Fiscal Engine', category: 'architecture', icon: 'receipt_long', description: 'Engineered mission-critical retail ERP modules with React and Node.js. Built high-availability government tax integrations (SEFAZ) and continuous invoice generation (NF-e/NFC-e).', techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Fiscal APIs'], projectUrl: 'https://www.konvix.com.br/', caseStudyLabel: 'konvix.com.br' },
    { _id: 'a1', title: 'Enterprise n8n Workflow Ecosystem', category: 'architecture', icon: 'hub', description: 'Architected complex automation ecosystems connecting legacy CRMs with modern cloud tools across 50+ enterprise processes.', techStack: ['n8n', 'Webhooks', 'REST APIs', 'Docker'] },
    { _id: 'a2', title: 'Scalable ETL & Ingestion Pipelines', category: 'architecture', icon: 'database', description: 'Designed robust data ingestion and transformation layers for real-time analytics in high-concurrency environments.', techStack: ['Python', 'SQL', 'Docker', 'ETL'] },
    { _id: 'a3', title: 'Legacy-to-Cloud AWS Migration', category: 'architecture', icon: 'cloud_sync', description: 'Led cloud migration to AWS ensuring zero downtime and 40% reduction in infrastructure maintenance.', techStack: ['AWS (EC2/ECS/S3)', 'IAM', 'Terraform', 'Docker'] },
    { _id: 'e1', title: 'Workflow Automation Masterclass', category: 'education', description: 'A practical, comprehensive curriculum for developers to master visual and code-driven automation workflows.' },
    { _id: 'e2', title: 'React Native Production Patterns', category: 'education', description: 'Teaching cross-platform mobile development with a focus on performant UI and clean state management.' },
    { _id: 'e3', title: 'Data Pipelines & ETL Foundations', category: 'education', description: 'Exploring the data lifecycle: from raw inputs to clean, actionable insights using Python and SQL.' },
    { _id: 'p1', title: 'Virtual Tabletop 3D (VTT)', category: 'personal', icon: 'sports_esports', description: 'Personal project — a 3D Virtual Tabletop for RPG sessions with friends. Built with Three.js, turn-based mechanics and 3D models.', techStack: ['Next.js', 'Three.js', 'TypeScript'], projectUrl: 'https://rpg-3d.vercel.app', caseStudyLabel: 'Live Preview' },
  ],
  pt: [
    { _id: 'fp', title: 'Plataforma Customizada Thinkin', category: 'featured', isFeatured: true, description: 'Desenvolvi do zero uma plataforma mission-critical para substituir software de terceiros. Resultou em mais de ', highlight: 'R$ 40.000 de economia anual', techStack: ['React Native', 'Node.js', 'NestJS', 'AWS Cloud', 'PostgreSQL'], caseStudyLabel: 'Ver Plataforma', projectUrl: 'https://thinkin.com.br' },
    { _id: 'a0', title: 'Sistema Cloud ERP & Motor Fiscal Konvix', category: 'architecture', icon: 'receipt_long', description: 'Desenvolvimento de módulos de alta criticidade para o sistema ERP em nuvem da Konvix com React e Node.js. Integrações governamentais (SEFAZ), mensageria fiscal e emissão contínua de NF-e/NFC-e.', techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'APIs Fiscais'], projectUrl: 'https://www.konvix.com.br/', caseStudyLabel: 'konvix.com.br' },
    { _id: 'a1', title: 'Workflows n8n Empresariais', category: 'architecture', icon: 'hub', description: 'Arquitetei ecossistemas de automação conectando CRMs legados com ferramentas cloud modernas em 50+ processos.', techStack: ['n8n', 'Webhooks', 'REST APIs', 'Docker'] },
    { _id: 'a2', title: 'Pipelines ETL Escaláveis', category: 'architecture', icon: 'database', description: 'Projetei camadas robustas de ingestão e transformação de dados para analytics em tempo real.', techStack: ['Python', 'SQL', 'Docker', 'ETL'] },
    { _id: 'a3', title: 'Migração Legacy para Cloud AWS', category: 'architecture', icon: 'cloud_sync', description: 'Liderei a migração para AWS com zero downtime e 40% de redução na manutenção de infraestrutura.', techStack: ['AWS (EC2/ECS/S3)', 'IAM', 'Terraform', 'Docker'] },
    { _id: 'e1', title: 'Introdução à Automação com n8n', category: 'education', description: 'Guia prático para desenvolvedores dominarem a automação visual de fluxos de dados empresariais.' },
    { _id: 'e2', title: 'Fundamentos de React Native', category: 'education', description: 'Ensinando desenvolvimento mobile cross-platform com foco em componentes UI performáticos e fluidez.' },
    { _id: 'e3', title: 'Fundamentos de Engenharia de Dados', category: 'education', description: 'Explorando o ciclo de vida dos dados: de fontes brutas a visualizações úteis usando Python e SQL.' },
    { _id: 'p1', title: 'Virtual Tabletop 3D (VTT)', category: 'personal', icon: 'sports_esports', description: 'Projeto pessoal — Virtual Tabletop 3D para sessões de RPG de mesa com amigos. Three.js, movimentação e modelos 3D.', techStack: ['Next.js', 'Three.js', 'TypeScript'], projectUrl: 'https://rpg-3d.vercel.app', caseStudyLabel: 'Ver Projeto' },
  ],
};

interface ProjectsPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Projects({ searchParams }: ProjectsPageProps) {
  const { lang } = await searchParams;
  const locale: Locale = await getResolvedLocale(lang);
  const t = i18n[locale];

  const projectsData = await getProjects(locale).catch(() => null);
  const projects: Project[] = projectsData?.length ? projectsData : fallbackProjects[locale];

  const featured = projects.find((p) => p.isFeatured);
  const architectureProjects = projects.filter((p) => p.category === 'architecture');
  const educationProjects = projects.filter((p) => p.category === 'education');
  const personalProjects = projects.filter((p) => p.category === 'personal');

  const getFeaturedImageUrl = (img?: { asset: { _ref: string } }) => {
    if (!img) return '/thinkin-platform.svg';
    try {
      const url = urlFor(img).width(800).url();
      return url || '/thinkin-platform.svg';
    } catch {
      return '/thinkin-platform.svg';
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-16">
      {/* ── HEADER MODERNO COM ACENTO PIXEL ART ── */}
      <section className="rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 p-6 sm:p-10 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-teal-300 font-pixel text-[10px]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>★ PROJETOS &amp; ENTREGAS EM PRODUÇÃO ★</span>
          </div>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t.pageTitle}
          </h1>
          <p className="font-sans text-base sm:text-lg text-purple-200/90 leading-relaxed">
            {t.pageSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-purple-300">
            <span className="px-3 py-1 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-200">
              40+ Entregas em Produção
            </span>
            <span className="px-3 py-1 bg-emerald-950/30 border border-emerald-500/30 rounded-lg text-emerald-300">
              Economia Comprovada: +R$ 40k/ano
            </span>
          </div>
        </div>
      </section>

      {/* ── PROJETO EM DESTAQUE ── */}
      {featured && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
            <span className="font-pixel text-teal-400 text-sm">✦ [DESTAQUE]</span>
            <h2 className="font-sans font-bold text-base text-purple-200 uppercase tracking-wider">{t.featuredLabel}</h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#160a2c] via-[#100422] to-[#0a0216] border border-purple-500/35 shadow-xl grid lg:grid-cols-2 gap-8 items-center">
            {/* Imagem / Mockup */}
            <div className="relative rounded-xl overflow-hidden border border-purple-500/40 shadow-2xl bg-[#090217] aspect-video sm:aspect-auto sm:h-72 group">
              <img
                src={getFeaturedImageUrl(featured.image)}
                alt={featured.title}
                className="w-full h-full object-cover object-left-top sm:object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0216]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 bg-[#0a0216]/90 border border-teal-400/80 px-2.5 py-1 rounded-md font-pixel text-[9px] text-teal-300 backdrop-blur-sm shadow-md">
                ★ ECONOMIA: R$ 40.000 / ANO
              </div>
              <div className="absolute bottom-3 right-3 bg-purple-950/90 border border-purple-400/50 px-2 py-0.5 rounded text-[10px] font-mono text-purple-200 backdrop-blur-sm">
                Thinkin Platform
              </div>
            </div>

            {/* Conteúdo & Stats */}
            <div className="space-y-4">
              <div className="font-mono text-xs text-teal-300 tracking-wider uppercase font-semibold">
                {locale === 'pt' ? 'Sistema Mission-Critical' : 'Mission-Critical System'}
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
                {featured.title}
              </h3>
              <p className="font-sans text-sm text-purple-100/90 leading-relaxed">
                {featured.description}
                {featured.highlight && (
                  <strong className="text-teal-300 font-sans font-semibold block mt-1">
                    ✦ {featured.highlight}
                  </strong>
                )}{' '}
                {t.featuredSuffix}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {featured.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-400/30 text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {featured.projectUrl && (
                <div className="pt-2">
                  <a
                    href={featured.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-xs inline-flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)] cursor-pointer"
                  >
                    <span>{featured.caseStudyLabel ?? 'Acessar Plataforma'}</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── ARQUITETURA DE SOFTWARE & SOLUÇÕES CLOUD ── */}
      {architectureProjects.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
            <span className="font-pixel text-teal-400 text-sm">✦ [ARQUITETURA]</span>
            <h2 className="font-sans font-bold text-base text-purple-200 uppercase tracking-wider">{t.archTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {architectureProjects.map((p) => (
              <div
                key={p._id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0b0318] border border-purple-500/30 hover:border-purple-400/60 transition-all flex flex-col justify-between shadow-sm group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-2xl text-teal-400 group-hover:text-teal-300 transition-colors">
                      {p.icon ?? 'code'}
                    </span>
                    <span className="font-mono text-[10px] text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-md border border-purple-500/30">
                      PRODUÇÃO
                    </span>
                  </div>
                  <h3 className="font-sans text-lg text-white font-bold">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm text-purple-200/90 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-500/20 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {p.projectUrl && (
                    <a
                      href={p.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-semibold text-xs text-teal-300 hover:text-teal-200 inline-flex items-center gap-1.5 transition-colors pt-1"
                    >
                      <span>{p.caseStudyLabel ?? (locale === 'pt' ? 'Acessar Sistema' : 'Access System')}</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PROJETOS PESSOAIS & EXPERIMENTOS ── */}
      {personalProjects.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
            <span className="font-pixel text-teal-400 text-sm">✦ [PROTOTIPAGEM]</span>
            <h2 className="font-sans font-bold text-base text-purple-200 uppercase tracking-wider">{t.personalTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((p) => (
              <div
                key={p._id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0b0216] border border-purple-500/30 hover:border-purple-400/60 transition-all flex flex-col justify-between shadow-sm group"
              >
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-2xl text-teal-400 group-hover:text-teal-300 transition-colors">
                    {p.icon ?? 'sports_esports'}
                  </span>
                  <h3 className="font-sans text-base text-white font-bold">{p.title}</h3>
                  <p className="font-sans text-xs text-purple-200/90 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-500/20 space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {p.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {p.projectUrl && (
                    <a
                      href={p.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-semibold text-xs text-teal-300 hover:text-teal-200 inline-flex items-center gap-1.5 transition-colors pt-1"
                    >
                      <span>{p.caseStudyLabel ?? (locale === 'pt' ? 'Ver Projeto' : 'View Project')}</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── EDUCAÇÃO & MENTORIA TÉCNICA ── */}
      {educationProjects.length > 0 && (
        <section className="p-8 rounded-2xl bg-gradient-to-b from-[#160a2c] via-[#0d041c] to-[#080114] border border-purple-500/30 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs text-teal-300 uppercase tracking-widest mb-1 font-semibold">
                ✦ {locale === 'pt' ? 'COMPARTILHAMENTO DE CONHECIMENTO' : 'KNOWLEDGE SHARING'} ✦
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl text-white font-extrabold mb-2 tracking-tight">
                {t.eduTitle}
              </h2>
              <p className="font-sans text-sm text-purple-200/90 leading-relaxed">
                {t.eduSubtitle}
              </p>
            </div>

            <div className="space-y-4">
              {educationProjects.map((p, idx) => (
                <div key={p._id} className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-400/40 flex items-center justify-center font-mono text-xs text-teal-300 font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm text-white font-bold">{p.title}</h4>
                    <p className="font-sans text-xs text-purple-200/80 mt-0.5">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ProjectsClient
            impactLabel={t.impactLabel}
            impactNumber={t.impactNumber}
            impactDesc={t.impactDesc}
          />
        </section>
      )}

      {/* ── CTA FINAL ── */}
      <section className="rounded-2xl bg-gradient-to-b from-[#15072c] to-[#090314] border border-purple-500/35 p-8 sm:p-12 text-center space-y-4 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 font-pixel text-[10px] text-teal-300">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span>★ {locale === 'pt' ? 'VAMOS CONVERSAR' : 'COLLABORATION'} ★</span>
        </div>
        <h3 className="font-sans text-2xl md:text-3xl text-white font-extrabold tracking-tight">
          {t.ctaTitle}
        </h3>
        <p className="text-sm sm:text-base text-purple-200/90 max-w-xl mx-auto font-sans leading-relaxed">
          {t.ctaDesc}
        </p>
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-xs inline-flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)] cursor-pointer"
          >
            <span>✦ {t.ctaPrimary}</span>
          </Link>
          <a
            href="https://github.com/gabriel-cruz-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 text-purple-200 border border-purple-500/40 font-sans font-semibold text-xs inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">code</span>
            <span>{t.ctaSecondary}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
