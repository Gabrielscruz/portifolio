import { translations } from '@/i18n/translations';

export default function ProjectsPage({ searchParams }: { searchParams: { lang?: string } }) {
  const locale = (searchParams.lang as 'pt' | 'en') || 'pt';
  const t = translations[locale].projects;
  const { all, featured } = t;

  // Função helper para lidar com caminhos de imagem
  const getFeaturedImageUrl = (imagePath: string) => {
    if (imagePath.startsWith('/')) {
      // Remove a barra inicial se já existir em process.env.NEXT_PUBLIC_BASE_PATH
      // Mas neste caso específico, sabemos que a imagem está em /portfolio2/...
      return `/portfolio2${imagePath}`; // Ajuste fixo temporário
    }
    return imagePath;
  };

  return (
    <div className="space-y-16 sm:space-y-24 mb-32">
      {/* ── HEADER INTRO ── */}
      <section className="space-y-6 relative">
        <div className="absolute -inset-x-4 -top-8 px-4 h-full bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none rounded-t-3xl" />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-purple-400">integration_instructions</span>
          </div>
          <h1 className="font-pixel text-2xl sm:text-3xl text-purple-100 uppercase drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            {t.title}
          </h1>
        </div>
        <p className="font-sans text-purple-200/80 max-w-2xl text-lg leading-relaxed shadow-sm">
          {t.description}
        </p>

        {/* Quick Stats Row */}
        <div className="pt-2 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-purple-300 uppercase tracking-wider bg-purple-900/30 px-3 py-1.5 rounded-lg border border-purple-500/20">
              10+ Repositórios Ativos
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 bg-blue-950/30 border border-blue-500/30 rounded-lg text-blue-300">
              40+ Entregas em Produção
            </span>
            <span className="px-3 py-1.5 bg-emerald-950/30 border border-emerald-500/30 rounded-lg text-emerald-300">
              Economia Comprovada: +R$ 40k/ano
            </span>
          </div>
        </div>
      </section>

      {/* ── PROJETO EM DESTAQUE ── */}
      {featured && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
            <span className="font-pixel text-teal-400 text-sm">✦ [EXEMPLO CORPORATIVO]</span>
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
                ★ IMPACTO DA EQUIPE
              </div>
              <div className="absolute bottom-3 right-3 bg-purple-950/90 border border-purple-400/50 px-2 py-0.5 rounded text-[10px] font-mono text-purple-200 backdrop-blur-sm">
                Projeto de Empresa
              </div>
            </div>

            {/* Conteúdo & Stats */}
            <div className="space-y-4">
              <div className="font-mono text-xs text-teal-300 tracking-wider uppercase font-semibold">
                {locale === 'pt' ? 'Exemplo de Projeto da Empresa' : 'Company Project Example'}
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
                {featured.title}
              </h3>
              
              <div className="bg-purple-900/20 border border-purple-500/20 p-3 rounded-lg text-xs font-mono text-purple-200/90 italic">
                {locale === 'pt' ? 'Nota: Este é um projeto desenvolvido como parte integral de uma equipe numa empresa, exibido aqui apenas como exemplo do meu trabalho e expertise técnica.' : 'Note: This is a project developed as part of a company team, shown here only as an example of my work and technical expertise.'}
              </div>

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
                    <span>{featured.caseStudyLabel ?? (locale === 'pt' ? 'Acessar Plataforma' : 'Visit Platform')}</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── OUTROS PROJETOS (GRID) ── */}
      <section className="space-y-6 pt-8">
        <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
          <span className="font-pixel text-purple-400 text-sm">✦ </span>
          <h2 className="font-sans text-lg font-bold text-purple-200 uppercase tracking-widest">
            {t.otherProjectsTitle ?? 'Outros Projetos'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {all.map((project, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-[#0f0720]/80 border border-purple-500/20 hover:border-teal-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/5 rounded-bl-full -z-10 group-hover:bg-teal-400/10 transition-colors" />

              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-teal-300 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{project.icon ?? 'code'}</span>
                </div>
                {project.status && (
                  <span className="px-2 py-1 rounded bg-purple-950/50 border border-purple-500/20 text-[10px] font-mono text-purple-300 uppercase tracking-wider">
                    {project.status}
                  </span>
                )}
              </div>

              <h3 className="font-sans font-bold text-xl text-white mb-2 group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="font-sans text-sm text-purple-200/70 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-purple-500/20 text-purple-300/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="pt-3 border-t border-purple-500/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      {locale === 'pt' ? 'Ver Mais' : 'View More'}
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}