'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

export interface BlogPostItem {
  _id: string;
  title: string;
  slug?: string;
  isFeatured?: boolean;
  category?: string;
  summary?: string;
  imageUrl: string;
  publishedAt?: string;
  formattedDate?: string;
  readTimeMinutes?: number;
  externalUrl?: string;
}

interface BlogClientProps {
  posts: BlogPostItem[];
  categories: string[];
  allLabel: string;
  locale: string;
  readTimeLabel: string;
  readFullLabel: string;
  featuredBadgeLabel: string;
  recentLabel: string;
}

export function BlogClient({
  posts,
  categories,
  allLabel,
  locale,
  readTimeLabel,
  readFullLabel,
  featuredBadgeLabel,
  recentLabel,
}: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCmsInfo, setShowCmsInfo] = useState(false);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = !activeCategory || post.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.summary && post.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.category && post.category.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  // Featured post: find first featured post or fallback to first
  const featured = useMemo(() => {
    if (activeCategory || searchQuery) {
      // When filtering/searching, just use the list
      return null;
    }
    return filteredPosts.find((p) => p.isFeatured) ?? filteredPosts[0] ?? null;
  }, [filteredPosts, activeCategory, searchQuery]);

  // Regular posts: exclude featured when showing the default view
  const displayPosts = useMemo(() => {
    if (!featured) return filteredPosts;
    return filteredPosts.filter((p) => p._id !== featured._id);
  }, [filteredPosts, featured]);

  return (
    <div className="space-y-12">
      {/* ── CMS INFO & CONTROLS BAR ── */}
      <div className="space-y-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
          {/* Barra de Busca Moderna */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 text-sm">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={locale === 'pt' ? 'Buscar artigos técnicos...' : 'Search technical articles...'}
              className="w-full bg-[#090217] border border-purple-500/40 focus:border-teal-400 rounded-xl px-3 py-2 pl-9 text-xs text-white placeholder:text-purple-400/50 font-sans outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Categorias */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`font-mono text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeCategory === null
                ? 'bg-teal-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(45,212,191,0.4)]'
                : 'bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:border-purple-300'
                }`}
            >
              {allLabel}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeCategory === cat
                  ? 'bg-teal-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(45,212,191,0.4)]'
                  : 'bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:border-purple-300'
                  }`}
              >
                {cat}
              </button>
            ))}


          </div>
        </div>

        {/* CMS Helper Banner */}
        {showCmsInfo && (
          <div className="p-4 rounded-xl bg-[#100722] border border-teal-400/40 text-xs font-sans text-purple-200 space-y-2 shadow-lg">
            <div className="flex items-center justify-between font-bold text-white text-sm">
              <span className="flex items-center gap-2 text-teal-300">
                <span>✦</span> Gerenciamento de Blog via Sanity CMS
              </span>
              <button
                type="button"
                onClick={() => setShowCmsInfo(false)}
                className="text-purple-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-purple-200/90">
              O blog está 100% conectado ao <strong>Sanity CMS Studio</strong> embutido no projeto na rota <code className="text-teal-300 bg-purple-950 px-1 py-0.5 rounded">/studio</code>.
            </p>
            <ol className="list-decimal list-inside space-y-1 text-purple-300 pl-1">
              <li>No menu lateral, selecione <strong className="text-white">📝 Blog Posts</strong>.</li>
              <li>Clique no ícone de lápis/criar (<strong className="text-white">+</strong>) para adicionar um novo artigo.</li>
              <li>Preencha o idioma (pt/en), título, slug, categoria, resumo e imagem de capa.</li>
              <li>Clique em <strong className="text-teal-300">Publish</strong>. O post aparecerá imediatamente nesta lista!</li>
            </ol>
          </div>
        )}
      </div>

      {/* ── EMPTY STATE ── */}
      {filteredPosts.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-3">
          <div className="font-pixel text-teal-400 text-sm">✦ [NENHUM ARTIGO ENCONTRADO]</div>
          <p className="text-sm text-purple-300">
            Nenhum artigo corresponde à busca &quot;{searchQuery}&quot; ou categoria selecionada.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory(null);
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg bg-teal-400 text-slate-950 text-xs font-bold font-sans"
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* ── ARTIGO EM DESTAQUE ── */}
      {featured && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
            <span className="font-pixel text-teal-400 text-sm">✦ [DESTAQUE]</span>
            <h2 className="font-sans font-bold text-base text-purple-200 uppercase tracking-wider">
              {featuredBadgeLabel}
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#160a2c] via-[#100422] to-[#0a0216] border border-purple-500/35 shadow-xl grid lg:grid-cols-2 gap-8 items-center group">
            <Link
              href={`/blog/${featured.slug || featured._id}${locale === 'en' ? '?lang=en' : ''}`}
              className="relative rounded-xl overflow-hidden border border-purple-500/40 shadow-inner bg-[#090217] aspect-video sm:aspect-auto sm:h-72 block"
            >
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0216] via-transparent to-transparent opacity-75" />
              <div className="absolute top-3 left-3 bg-[#0a0216]/90 border border-teal-400/80 px-2.5 py-1 rounded-md font-mono text-xs text-teal-300 font-semibold backdrop-blur-sm">
                {featured.category}
              </div>
            </Link>

            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-purple-300">
                {featured.formattedDate && (
                  <span className="text-teal-300 font-medium">{featured.formattedDate}</span>
                )}
                {featured.readTimeMinutes && (
                  <>
                    <span>•</span>
                    <span>{featured.readTimeMinutes} {readTimeLabel}</span>
                  </>
                )}
              </div>

              <Link
                href={`/blog/${featured.slug || featured._id}${locale === 'en' ? '?lang=en' : ''}`}
                className="block"
              >
                <h3 className="font-sans text-2xl sm:text-3xl text-white font-extrabold leading-snug tracking-tight group-hover:text-teal-200 transition-colors">
                  {featured.title}
                </h3>
              </Link>

              <p className="font-sans text-sm text-purple-200/90 leading-relaxed">
                {featured.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-3 items-center">
                <Link
                  href={`/blog/${featured.slug || featured._id}${locale === 'en' ? '?lang=en' : ''}`}
                  className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans font-bold text-xs inline-flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)] cursor-pointer"
                >
                  <span>{readFullLabel}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>

                {featured.externalUrl && (
                  <a
                    href={featured.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 text-purple-200 text-xs font-mono inline-flex items-center gap-1.5 transition-all"
                  >
                    <span>Link Externo</span>
                    <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ARTIGOS RECENTES / FILTRADOS ── */}
      {displayPosts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
            <span className="font-pixel text-teal-400 text-sm">✦ [ARTIGOS]</span>
            <h2 className="font-sans font-bold text-base text-purple-200 uppercase tracking-wider">
              {recentLabel} ({displayPosts.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <div
                key={post._id}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#140828] to-[#0b0318] border border-purple-500/30 hover:border-purple-400/60 transition-all flex flex-col justify-between shadow-sm group"
              >
                <div className="space-y-3">
                  <Link
                    href={`/blog/${post.slug || post._id}${locale === 'en' ? '?lang=en' : ''}`}
                    className="relative rounded-xl overflow-hidden aspect-video border border-purple-500/25 block bg-[#090217]"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#0a0216]/90 border border-teal-400/60 px-2 py-0.5 rounded text-[10px] font-mono text-teal-300 backdrop-blur-sm">
                      {post.category}
                    </div>
                  </Link>

                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-teal-300 font-medium">{post.category}</span>
                    {post.formattedDate && (
                      <span className="text-purple-300/80">{post.formattedDate}</span>
                    )}
                  </div>

                  <Link
                    href={`/blog/${post.slug || post._id}${locale === 'en' ? '?lang=en' : ''}`}
                    className="block"
                  >
                    <h4 className="font-sans text-base text-white font-bold group-hover:text-teal-200 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </Link>

                  <p className="font-sans text-xs text-purple-200/80 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center justify-between font-mono text-xs text-purple-300">
                  <span>{post.readTimeMinutes || 5} {readTimeLabel}</span>
                  <Link
                    href={`/blog/${post.slug || post._id}${locale === 'en' ? '?lang=en' : ''}`}
                    className="text-teal-300 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>{locale === 'pt' ? 'Ler Artigo' : 'Read Article'}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
