import React from 'react';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity';
import { BlogClient, type BlogPostItem } from './BlogClient';
import { getResolvedLocale, type Locale } from '@/lib/locale';

interface BlogPost {
  _id: string;
  title: string;
  slug?: string;
  isFeatured?: boolean;
  category?: string;
  summary?: string;
  coverImage?: { asset: { _ref: string } };
  publishedAt?: string;
  readTimeMinutes?: number;
  externalUrl?: string;
}

const i18n = {
  en: {
    pageTitle: 'Articles & Technical Insights',
    pageSubtitle: 'Exploring software architecture, cloud microservices, and practical production automation.',
    featuredBadge: 'FEATURED ARTICLE',
    readTime: 'min read',
    readFull: 'Read Article',
    recentLabel: 'Recent Articles',
    viewAll: 'View all articles',
    newsletterLabel: 'TECHNICAL NEWSLETTER',
    newsletterTitle: 'Receive software engineering insights directly in your inbox',
    newsletterDesc: 'No spam, zero fluff. Just practical lessons learned from production distributed systems and workflow automation.',
    subscribeBtn: 'Subscribe',
    emailPlaceholder: 'your@email.com',
    categories: ['Architecture', 'Data Engineering', 'Automation', 'Cloud'],
    allLabel: 'All Articles',
    cmsButton: 'Manage via CMS Studio',
  },
  pt: {
    pageTitle: 'Artigos & Insights Técnicos',
    pageSubtitle: 'Explorando arquitetura de software, microsserviços em nuvem e automação prática em produção.',
    featuredBadge: 'ARTIGO EM DESTAQUE',
    readTime: 'min de leitura',
    readFull: 'Ler Artigo',
    recentLabel: 'Artigos Publicados',
    viewAll: 'Ver todos os artigos',
    newsletterLabel: 'NEWSLETTER TÉCNICA',
    newsletterTitle: 'Receba novos artigos de engenharia diretamente no seu e-mail',
    newsletterDesc: 'Sem spam, sem enrolação. Apenas lições práticas de sistemas distribuídos, arquitetura limpa e automações em produção.',
    subscribeBtn: 'Inscrever-se',
    emailPlaceholder: 'seu@email.com',
    categories: ['Architecture', 'Data Engineering', 'Automation', 'Cloud'],
    allLabel: 'Todos os Artigos',
    cmsButton: 'Gerenciar no CMS Studio',
  },
};

const fallbackPosts: Record<Locale, BlogPost[]> = {
  en: [
    { _id: 'b1', slug: 'n8n-generative-ai', title: 'The Future of Workflow Automation with n8n and AI', isFeatured: true, category: 'Automation', publishedAt: '2024-01-28', readTimeMinutes: 12, summary: 'How we use n8n to orchestrate complex flows integrating LLMs, proprietary APIs and legacy systems to scale operations intelligently.' },
    { _id: 'b2', slug: 'scalable-microservices', title: 'Scalable Microservices Architecture in Production', category: 'Architecture', publishedAt: '2024-01-24', readTimeMinutes: 8, summary: 'Essential patterns for building high-availability systems that handle high concurrency without degradation.' },
    { _id: 'b3', slug: 'aws-vs-gcp-data', title: 'Cloud Data Engineering: AWS vs GCP in Practice', category: 'Cloud', publishedAt: '2024-01-18', readTimeMinutes: 15, summary: 'A deep technical comparison of the best managed cloud services for real-time ETL pipelines and cost efficiency.' },
    { _id: 'b4', slug: 'automated-testing-cicd', title: 'Automated Testing Strategies for Resilient CI/CD', category: 'Automation', publishedAt: '2024-01-12', readTimeMinutes: 10, summary: 'How to reduce deploy time from hours to minutes while keeping software quality and regression checks airtight.' },
  ],
  pt: [
    { _id: 'b1', slug: 'n8n-ia-generativa', title: 'O Futuro da Automação de Processos com n8n e IA', isFeatured: true, category: 'Automation', publishedAt: '2024-01-28', readTimeMinutes: 12, summary: 'Como estruturamos fluxos avançados no n8n conectando APIs proprietárias, inteligência artificial e bancos de dados para escalar operações.' },
    { _id: 'b2', slug: 'microsservicos-escalaveis', title: 'Arquitetura de Microsserviços Escaláveis em Produção', category: 'Architecture', publishedAt: '2024-01-24', readTimeMinutes: 8, summary: 'Padrões essenciais para desenvolver sistemas distribuídos resilientes, com alta concorrência e monitoramento contínuo.' },
    { _id: 'b3', slug: 'aws-vs-gcp-dados', title: 'Engenharia de Dados em Nuvem: AWS na Prática', category: 'Cloud', publishedAt: '2024-01-18', readTimeMinutes: 15, summary: 'Análise aprofundada dos melhores serviços gerenciados para pipelines de ETL em tempo real e eficiência de custos.' },
    { _id: 'b4', slug: 'testes-cicd', title: 'Estratégias de Testes Automatizados para CI/CD', category: 'Automation', publishedAt: '2024-01-12', readTimeMinutes: 10, summary: 'Como reduzir o tempo de deploy de horas para minutos mantendo a qualidade de código e cobertura contra regressões.' },
  ],
};

function formatDate(dateStr?: string, locale: Locale = 'pt') {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

interface BlogPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const { lang } = await searchParams;
  const locale: Locale = await getResolvedLocale(lang);
  const t = i18n[locale];

  const postsData = await getBlogPosts(locale).catch(() => null);
  const rawPosts: BlogPost[] = postsData?.length ? postsData : fallbackPosts[locale];

  const getImageUrl = (p: BlogPost) => {
    if (p.coverImage) {
      try {
        return urlFor(p.coverImage).width(800).url();
      } catch {
        // fallback
      }
    }
    return 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDmtcYoXJ9yYgP4gVbGnO5blvgW_5wUIy0sEq-LYJCwo3Yp-TnVwaJmHdzV3MWwTfPFCK5a_3OuWYgCqtk0X3d-_jpTilMkb--pyCHAf17tedolblKJp8E4TRhpLZogqMQh0CA4bnfbxl1pn_0MchS33L4yxhJYUpJRLg15FZ9sxDEr-UBcZXHYZ9IVy8lm_7tc8FZWz-bt9yb52rv-C2YMdc6s_vcYsrbpT6KtK1lo9g4gRcCPZ6';
  };

  const clientPosts: BlogPostItem[] = rawPosts.map((p) => ({
    _id: p._id,
    title: p.title,
    slug: p.slug,
    isFeatured: p.isFeatured,
    category: p.category,
    summary: p.summary,
    imageUrl: getImageUrl(p),
    publishedAt: p.publishedAt,
    formattedDate: formatDate(p.publishedAt, locale),
    readTimeMinutes: p.readTimeMinutes,
    externalUrl: p.externalUrl,
  }));

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-16">
      {/* ── HEADER MODERNO DO BLOG TÉCNICO ── */}
      <section className="rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 p-6 sm:p-10 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-teal-300 font-pixel text-[10px]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>★ ARTIGOS TÉCNICOS &amp; APRENDIZADOS ★</span>
          </div>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t.pageTitle}
          </h1>
          <p className="font-sans text-base sm:text-lg text-purple-200/90 leading-relaxed">
            {t.pageSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-200">
              Arquitetura &amp; Boas Práticas
            </span>
            <span className="px-3 py-1 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-200">
              Automações &amp; Cloud
            </span>
            <Link
              href="/studio"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-xs transition-all shadow-[0_0_12px_rgba(45,212,191,0.3)]"
            >
              <span>✎</span>
              <span>{t.cmsButton}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FILTROS, BUSCA & LISTAGEM DINÂMICA DE ARTIGOS ── */}
      <BlogClient
        posts={clientPosts}
        categories={t.categories}
        allLabel={t.allLabel}
        locale={locale}
        readTimeLabel={t.readTime}
        readFullLabel={t.readFull}
        featuredBadgeLabel={t.featuredBadge}
        recentLabel={t.recentLabel}
      />

      {/* ── NEWSLETTER TÉCNICA ── */}
      <section className="rounded-2xl bg-gradient-to-b from-[#15072c] to-[#090314] border border-purple-500/35 p-8 sm:p-12 text-center space-y-4 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 font-pixel text-[10px] text-teal-300">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span>★ {t.newsletterLabel} ★</span>
        </div>
        <h3 className="font-sans text-2xl md:text-3xl text-white font-extrabold tracking-tight">
          {t.newsletterTitle}
        </h3>
        <p className="text-sm sm:text-base text-purple-200/90 max-w-xl mx-auto font-sans leading-relaxed">
          {t.newsletterDesc}
        </p>
        <form
          action="#"
          className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-md mx-auto pt-2"
        >
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            required
            className="w-full sm:flex-1 bg-[#0a0216] border border-purple-500/40 focus:border-teal-400 rounded-xl px-4 py-3 text-sm text-white placeholder:text-purple-400/50 font-sans outline-none transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-xs whitespace-nowrap cursor-pointer transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)]"
          >
            {t.subscribeBtn}
          </button>
        </form>
      </section>
    </main>
  );
}
