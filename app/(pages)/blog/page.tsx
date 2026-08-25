import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { getBlogPosts } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity';
import { BlogClient } from './BlogClient';
import { cookies } from 'next/headers';

type Locale = 'en' | 'pt';

interface BlogPost {
  _id: string; title: string; slug?: string; isFeatured?: boolean;
  category?: string; summary?: string; coverImage?: { asset: { _ref: string } };
  publishedAt?: string; readTimeMinutes?: number; externalUrl?: string;
}

const i18n = {
  en: {
    pageTitle: 'Blog & Insights', pageSubtitle: 'Exploring the frontiers of software architecture, data engineering and intelligent automation to create resilient systems.',
    featuredBadge: 'FEATURED', readTime: 'min read', readFull: 'Read full article',
    viewAll: 'View all articles', newsletterLabel: 'Newsletter',
    newsletterTitle: 'Stay up to date with the future of technology',
    newsletterDesc: 'Receive exclusive insights on software architecture and automation directly to your email. No spam, just knowledge.',
    subscribeBtn: 'Subscribe', emailPlaceholder: 'your@email.com',
    categories: ['Architecture', 'Data Engineering', 'Automation', 'Cloud'],
    allLabel: 'All',
  },
  pt: {
    pageTitle: 'Blog & Insights', pageSubtitle: 'Explorando as fronteiras da arquitetura de software, engenharia de dados e automação inteligente para criar sistemas resilientes.',
    featuredBadge: 'DESTAQUE', readTime: 'min de leitura', readFull: 'Ler artigo completo',
    viewAll: 'Ver todos os artigos', newsletterLabel: 'Newsletter',
    newsletterTitle: 'Mantenha-se atualizado com o futuro da tecnologia',
    newsletterDesc: 'Receba insights exclusivos sobre arquitetura de software e automação diretamente no seu e-mail. Sem spam, apenas conhecimento.',
    subscribeBtn: 'Inscrever-se', emailPlaceholder: 'seu@email.com',
    categories: ['Architecture', 'Data Engineering', 'Automation', 'Cloud'],
    allLabel: 'Tudo',
  },
};

const fallbackPosts: Record<Locale, BlogPost[]> = {
  en: [
    { _id: 'b1', title: 'The Future of Workflow Automation with n8n and Generative AI', isFeatured: true, category: 'Automation', publishedAt: '2024-01-28', readTimeMinutes: 12, summary: 'How we use n8n to orchestrate complex flows integrating LLMs, proprietary APIs and legacy systems to scale operations intelligently.' },
    { _id: 'b2', title: 'Scalable Microservices Architecture', category: 'Architecture', publishedAt: '2024-01-24', readTimeMinutes: 8, summary: 'Essential patterns for building systems that handle millions of requests per second.' },
    { _id: 'b3', title: 'Cloud Data Engineering: AWS vs GCP', category: 'Cloud', publishedAt: '2024-01-18', readTimeMinutes: 15, summary: 'A deep technical analysis of the best managed services for Big Data in 2024.' },
    { _id: 'b4', title: 'Automated Testing Strategies for CI/CD', category: 'Automation', publishedAt: '2024-01-12', readTimeMinutes: 10, summary: 'How to reduce deploy time from hours to minutes without compromising software quality.' },
  ],
  pt: [
    { _id: 'b1', title: 'O Futuro da Automação de Workflows com n8n e IA Generativa', isFeatured: true, category: 'Automation', publishedAt: '2024-01-28', readTimeMinutes: 12, summary: 'Como utilizamos n8n para orquestrar fluxos complexos integrando LLMs, APIs proprietárias e sistemas legados para escalar operações com inteligência.' },
    { _id: 'b2', title: 'Arquitetura de Microsserviços Escaláveis', category: 'Architecture', publishedAt: '2024-01-24', readTimeMinutes: 8, summary: 'Padrões essenciais para construir sistemas que suportam milhões de requisições por segundo.' },
    { _id: 'b3', title: 'Engenharia de Dados na Nuvem: AWS vs GCP', category: 'Cloud', publishedAt: '2024-01-18', readTimeMinutes: 15, summary: 'Uma análise técnica profunda sobre os melhores serviços gerenciados para Big Data em 2024.' },
    { _id: 'b4', title: 'Estratégias de Testes Automatizados em CI/CD', category: 'Automation', publishedAt: '2024-01-12', readTimeMinutes: 10, summary: 'Como reduzir o tempo de deploy de horas para minutos sem comprometer a qualidade do software.' },
  ],
};

const fallbackImages: Record<string, string> = {
  b1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDgBWpKfdKE8VgyFhUfWxmNEo8ODoNC_ARSviQxpntcfbi4KUfe1eDHHMcVWJwml8oLNbjLDtnWbQz7EhqyZP_E178v7R0BojoNcdcf3RZczZhyAfV8cSKJA2k8wc05wKHfzSvxAoi_NDBG6VFe8GA874sSuRSkr4yMck0v6TnsleVSxpaOSa7nvIf6ReiaOErHCkZj7ksF1J5NP9AbhDZFAZaTTpkphqi4UUJITGcfKfw9u-u2TAC',
  b2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXhi-ZU302thc71I59PjRBH6VxOfs5Hd82U41cxU7HRgz4gLn7j3VQG0g7ZtJAt6u7_Dm7GkoGy8ml0f2wRKDGRUsrFxHWo8Uk1dEu8c8K-IGVSukJe_HCywpy-3MnaenMQvUnM1Igay7qh-AOEPOKKJjI-jEeJua0Ygbua_KUrF3IJ3mw8gP8oKyCNw9FX00k105HG2m6N9go2UtKP1s12aT6Id5PnnD5M9kH74GZMG85MN25_-HR',
  b3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyvmssX58gWZW4sbStQEMBN21UW9ubsWSJRcwNoniud1FR2wAomyX2HvQDaZ6xzMzc26LbhvPdZOlfkaKnUd_hv312ICL19GCnSbw789Z1TaVw_3JL3PEabQ4LuYTmIZly868QU5-gy4yFNkfaT9-ophuhYgZuXoG0-NN7JbY9sOl5Wm6KC_p8UAZdn8HPbLno8t-11IJk_F0xkTrNYh3u9LFuvyBamm0BwxEQWU1IFM9y2wRmiMd1',
  b4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPjGlz48FaqzOQ_z58IZ6bTpSoVIOABcY2Bm3md54T9fRflq_FYey8ghOAInKEpsvRXLFft7TjkATDTNeVqYqLjQLWwvuuLnhmFsdGJ6xBbsBt8GYjFINHr2oWAo_GXavcombGHx0ZYgKeehSEF5LYdduU0Ztqg3X_YJgQNIBvB3S5ZxvshIlIju2tlgxn6_KAWc5aZPcQdVOmh-QiFGHOzEBwy05gk5ycut9GnuKSfh22zP8EFl',
};

function getImageUrl(post: BlogPost): string {
  if (post.coverImage) { try { return urlFor(post.coverImage).width(800).url(); } catch { /* noop */ } }
  return fallbackImages[post._id] ?? '';
}

function formatDate(dateStr?: string, locale?: Locale): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', { day: '2-digit', month: 'short', year: 'numeric' });
}

interface BlogPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const { lang } = await searchParams;
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value;
  const locale: Locale = (lang ?? cookieLocale) === 'pt' ? 'pt' : 'en';
  const t = i18n[locale];

  const postsData = await getBlogPosts(locale).catch(() => null);
  const posts: BlogPost[] = postsData?.length ? postsData : fallbackPosts[locale];

  const featured = posts.find((p) => p.isFeatured) ?? posts[0];
  const regularPosts = posts.filter((p) => !p.isFeatured).slice(0, 3);

  return (
    <>
      <main className="pt-32 pb-24 relative z-10">
        {/* Hero */}
        <Section.Root className="text-center mb-16 !py-0">
          <h1 className="font-display-xl text-3xl md:text-display-xl text-gradient mb-4">{t.pageTitle}</h1>
          <Section.Subtitle className="mx-auto">{t.pageSubtitle}</Section.Subtitle>
        </Section.Root>

        {/* Search & Categories (client) */}
        <BlogClient categories={t.categories} allLabel={t.allLabel} />

        {/* Featured Post */}
        {featured && (
          <Section.Root className="mb-20 !py-0">
            <Card.Root className="overflow-hidden !rounded-[32px] !p-0 grid md:grid-cols-2 group border-none" hoverEffect={false}>
              <div className="relative overflow-hidden h-64 md:h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${getImageUrl(featured)}')` }} />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-surface-container/40">
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="primary">{t.featuredBadge}</Badge>
                  {featured.readTimeMinutes && <span className="text-on-surface-variant font-label-sm text-xs">• {featured.readTimeMinutes} {t.readTime}</span>}
                </div>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mb-6 leading-tight">{featured.title}</h2>
                <p className="text-on-surface-variant mb-8 line-clamp-3">{featured.summary}</p>
                <a className="inline-flex items-center gap-2 text-primary font-title-md text-xl hover:translate-x-1 transition-transform" href={featured.externalUrl ?? '#'} target={featured.externalUrl ? '_blank' : undefined} rel="noopener noreferrer">
                  {t.readFull} <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </Card.Root>
          </Section.Root>
        )}

        {/* Post Grid */}
        <Section.Root className="!py-0">
          <div className="grid md:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card.Root key={post._id} className="!p-0 border-none group">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url('${getImageUrl(post)}')` }} />
                </div>
                <div className="p-6 flex flex-col flex-grow bg-surface-container/40 rounded-b-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary font-label-sm text-xs uppercase tracking-wider">{post.category}</span>
                    <span className="text-on-surface-variant font-label-sm text-xs">{formatDate(post.publishedAt, locale)}</span>
                  </div>
                  <h3 className="font-title-md text-xl text-on-surface mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{post.summary}</p>
                  <div className="mt-auto flex items-center gap-2 text-on-surface font-label-sm text-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                    {post.readTimeMinutes} {t.readTime}
                  </div>
                </div>
              </Card.Root>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface-container-highest hover:bg-surface-container-high text-on-surface px-8 py-4 rounded-2xl transition-colors">
              {t.viewAll} <span className="material-symbols-outlined text-primary">expand_more</span>
            </a>
          </div>
        </Section.Root>

        {/* Newsletter */}
        <Section.Root className="mt-32 !py-0">
          <Card.Root className="relative !p-12 md:!p-20 !rounded-[40px] overflow-hidden text-center" hoverEffect={false}>
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-primary font-label-sm text-xs uppercase tracking-[0.2em] mb-6 block">{t.newsletterLabel}</span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mb-6">{t.newsletterTitle}</h2>
              <p className="font-body-md text-on-surface-variant mb-10">{t.newsletterDesc}</p>
              <form className="flex flex-col md:flex-row gap-4 items-start" action="#">
                <input className="flex-grow bg-black/40 border border-outline-variant/30 rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary" placeholder={t.emailPlaceholder} type="email" name="email" />
                <button type="submit" className="px-8 py-4 rounded-2xl bg-primary text-on-primary font-semibold hover:shadow-[0_0_20px_rgba(221,183,255,0.4)] transition-shadow">{t.subscribeBtn}</button>
              </form>
            </div>
          </Card.Root>
        </Section.Root>
      </main>
    </>
  );
}
