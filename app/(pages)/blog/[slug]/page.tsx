import React from 'react';
import Link from 'next/link';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { getBlogPostBySlug } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity';
import { getResolvedLocale, type Locale } from '@/lib/locale';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-sans text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-b border-purple-500/20 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-sans text-xl font-semibold text-teal-200 mt-6 mb-3 tracking-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="font-sans text-base text-purple-100/90 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-teal-400 bg-purple-950/30 pl-4 py-2 my-4 italic text-purple-200 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-purple-100/90 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-purple-100/90 pl-2">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    code: ({ children }) => (
      <code className="font-mono text-xs bg-[#090217] border border-purple-500/30 text-teal-300 px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-300 underline underline-offset-2 hover:text-teal-200 transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      try {
        const imgUrl = urlFor(value).width(1000).url();
        return (
          <div className="my-8 rounded-xl overflow-hidden border border-purple-500/30">
            <img src={imgUrl} alt={value.alt || 'Imagem do artigo'} className="w-full h-auto object-cover" />
            {value.caption && (
              <p className="text-center text-xs text-purple-300/70 py-2 bg-[#090217] border-t border-purple-500/20 font-mono">
                {value.caption}
              </p>
            )}
          </div>
        );
      } catch {
        return null;
      }
    },
  },
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug).catch(() => null);
  if (!post) {
    return { title: 'Artigo | Gabriel Cruz Blog' };
  }
  return {
    title: `${post.title} | Gabriel Cruz Blog`,
    description: post.summary || 'Artigo técnico por Gabriel Da Silva Cruz',
  };
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale: Locale = await getResolvedLocale(lang);

  const post = await getBlogPostBySlug(slug).catch(() => null);

  if (!post) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4 max-w-4xl mx-auto space-y-8">
        <div className="p-8 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-teal-300 font-pixel text-[10px]">
            <span>★ CMS SANITY INTEGRADO ★</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Artigo não encontrado</h1>
          <p className="text-purple-300 text-sm">
            Este artigo ainda não foi publicado no Sanity CMS ou o link está incorreto.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link
              href={`/blog${locale === 'en' ? '?lang=en' : ''}`}
              className="px-5 py-2.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs font-mono hover:border-purple-300"
            >
              ← Voltar ao Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const getCoverUrl = () => {
    if (post.coverImage) {
      try {
        return urlFor(post.coverImage).width(1200).url();
      } catch {
        // fallback
      }
    }
    return 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDmtcYoXJ9yYgP4gVbGnO5blvgW_5wUIy0sEq-LYJCwo3Yp-TnVwaJmHdzV3MWwTfPFCK5a_3OuWYgCqtk0X3d-_jpTilMkb--pyCHAf17tedolblKJp8E4TRhpLZogqMQh0CA4bnfbxl1pn_0MchS33L4yxhJYUpJRLg15FZ9sxDEr-UBcZXHYZ9IVy8lm_7tc8FZWz-bt9yb52rv-C2YMdc6s_vcYsrbpT6KtK1lo9g4gRcCPZ6';
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
      {/* ── NAVEGAÇÃO & AÇÕES CMS ── */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-500/20 pb-4">
        <Link
          href={`/blog${locale === 'en' ? '?lang=en' : ''}`}
          className="inline-flex items-center gap-2 text-xs font-mono text-teal-300 hover:text-teal-200 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>{locale === 'pt' ? 'Voltar para o Blog' : 'Back to Blog'}</span>
        </Link>

        <div className="flex items-center gap-2">
          {post.externalUrl && (
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-400 text-slate-950 text-xs font-sans font-bold hover:bg-teal-300"
            >
              <span>Artigo Original</span>
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          )}
        </div>
      </div>

      {/* ── CABEÇALHO DO ARTIGO ── */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-md bg-purple-950/80 border border-teal-400/60 text-teal-300 font-semibold">
            {post.category || 'Tech'}
          </span>
          {post.publishedAt && (
            <span className="text-purple-300/80">
              {formatDate(post.publishedAt)}
            </span>
          )}
          {post.readTimeMinutes && (
            <>
              <span className="text-purple-500">•</span>
              <span className="text-purple-300/80">
                {post.readTimeMinutes} {locale === 'pt' ? 'min de leitura' : 'min read'}
              </span>
            </>
          )}
        </div>

        <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        {post.summary && (
          <p className="font-sans text-lg text-purple-200/90 leading-relaxed border-l-2 border-purple-500/40 pl-4 py-1">
            {post.summary}
          </p>
        )}

        {/* Autor */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-teal-400/60 bg-purple-950 flex items-center justify-center text-teal-300 font-pixel text-xs">
            GC
          </div>
          <div>
            <div className="font-sans font-bold text-sm text-white">Gabriel Da Silva Cruz</div>
            <div className="font-mono text-[11px] text-purple-300/80">
              Software Engineer • Automações &amp; Cloud
            </div>
          </div>
        </div>
      </header>

      {/* ── IMAGEM DE CAPA ── */}
      <div className="rounded-2xl overflow-hidden border border-purple-500/35 shadow-2xl aspect-video relative bg-[#090217]">
        <img
          src={getCoverUrl()}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── CONTEÚDO DO ARTIGO ── */}
      <article className="prose prose-invert max-w-none space-y-4">
        {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
          <PortableText value={post.body} components={portableTextComponents} />
        ) : (
          <div className="p-6 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-3 font-sans text-purple-200">
            <p className="leading-relaxed">
              {post.summary}
            </p>
            <p className="text-sm text-purple-300/80 italic">
              (Conteúdo completo pode ser adicionado e formatado no campo &quot;Conteúdo do Artigo&quot; dentro do Sanity Studio em <code className="text-teal-300">/studio</code>)
            </p>
          </div>
        )}
      </article>

      {/* ── RODAPÉ DO ARTIGO / CTA ── */}
      <footer className="pt-10 border-t border-purple-500/25 space-y-6">
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-sans font-bold text-white text-base">
              Gostou do artigo ou quer trocar uma ideia sobre arquitetura?
            </div>
            <div className="font-sans text-xs text-purple-300">
              Estou sempre aberto a discussões técnicas, projetos e conexões.
            </div>
          </div>
          <Link
            href={`/contact${locale === 'en' ? '?lang=en' : ''}`}
            className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-xs whitespace-nowrap transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)]"
          >
            Entrar em Contato
          </Link>
        </div>
      </footer>
    </main>
  );
}
