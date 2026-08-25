import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { CtaCard } from '@/components/CtaCard';
import { getProjects } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity';
import { ProjectsClient } from './ProjectsClient';
import { cookies } from 'next/headers';

type Locale = 'en' | 'pt';
interface Project { _id: string; title: string; slug?: string; category: string; isFeatured?: boolean; description?: string; highlight?: string; image?: { asset: { _ref: string } }; techStack?: string[]; icon?: string; projectUrl?: string; githubUrl?: string; caseStudyLabel?: string; }

const i18n = {
  en: { pageTitle: 'Projects & Initiatives', pageSubtitle: 'Architecting scalable data environments and empowering technical teams through systematic automation.', featuredLabel: 'Featured Architectural Win', featuredSuffix: 'in licensing costs while improving data throughput and system reliability.', archTitle: 'Software Architecture & Data', eduTitle: 'Education & Teaching', eduSubtitle: 'Passionate about bridging the gap between theoretical architecture and practical engineering.', personalTitle: 'Personal Projects', impactLabel: 'Impact', impactNumber: '500+ Students', impactDesc: 'Mentored in automation and data engineering worldwide.', ctaTitle: 'Have a project in mind?', ctaDesc: "Whether building a data lake, automating workflows, or training your team—I'm ready to help.", ctaPrimary: 'Start a Collaboration', ctaSecondary: 'View Github' },
  pt: { pageTitle: 'Projetos & Iniciativas', pageSubtitle: 'Arquitetando ambientes de dados escaláveis e capacitando equipes técnicas através de automação sistemática.', featuredLabel: 'Destaque Arquitetural', featuredSuffix: 'em custos de licença, melhorando o throughput de dados e a confiabilidade do sistema.', archTitle: 'Arquitetura de Software & Dados', eduTitle: 'Educação & Ensino', eduSubtitle: 'Apaixonado por conectar a arquitetura teórica com a engenharia prática através de cursos e mentoria.', personalTitle: 'Projetos Pessoais', impactLabel: 'Impacto', impactNumber: '500+ Alunos', impactDesc: 'Mentorados em automação e engenharia de dados no mundo todo.', ctaTitle: 'Tem um projeto em mente?', ctaDesc: 'Seja um data lake, automação de workflows ou treinamento de equipe—estou pronto para escalar a sua visão.', ctaPrimary: 'Iniciar Colaboração', ctaSecondary: 'Ver Github' },
};

const fallbackProjects: Record<Locale, Project[]> = {
  en: [
    { _id: 'fp', title: 'Thinkin Custom Platform', category: 'featured', isFeatured: true, description: 'Engineered a mission-critical platform to replace legacy enterprise software. This resulted in a ', highlight: 'R$ 40,000 annual saving', techStack: ['React Native', 'Node.js', 'AWS Cloud', 'PostgreSQL'], caseStudyLabel: 'Case Study Breakdown', projectUrl: 'https://thinkin.com.br' },
    { _id: 'a1', title: 'Enterprise n8n Workflows', category: 'architecture', icon: 'hub', description: 'Architected complex automation ecosystems connecting legacy CRMs with modern cloud tools across 50+ processes.', techStack: ['n8n', 'Webhooks', 'REST APIs'] },
    { _id: 'a2', title: 'Scalable ETL Pipelines', category: 'architecture', icon: 'database', description: 'Designed robust data ingestion and transformation layers for real-time analytics in high-concurrency environments.', techStack: ['Python', 'SQL', 'Docker'] },
    { _id: 'a3', title: 'Legacy-to-Cloud Migration', category: 'architecture', icon: 'cloud_sync', description: 'Led migration to AWS ensuring zero downtime and 40% reduction in infrastructure maintenance.', techStack: ['AWS', 'IAM', 'Terraform'] },
    { _id: 'e1', title: 'Intro to n8n Automation', category: 'education', description: 'A comprehensive guide for non-coders and engineers to master visual workflow automation.' },
    { _id: 'e2', title: 'React Native Fundamentals', category: 'education', description: 'Teaching cross-platform mobile development with a focus on performant UI and state management.' },
    { _id: 'e3', title: 'ETL Foundations', category: 'education', description: 'Exploring the data lifecycle: from raw inputs to clean, actionable insights using Python and SQL.' },
    { _id: 'p1', title: 'RPG 3D VTT', category: 'personal', icon: 'sports_esports', description: 'Personal project — a 3D Virtual Tabletop for RPG sessions with friends. Three.js, turn-based combat and 3D character models.', techStack: ['Next.js', 'Three.js', 'TypeScript'], projectUrl: 'https://rpg-3d.vercel.app', caseStudyLabel: 'Play now' },
  ],
  pt: [
    { _id: 'fp', title: 'Plataforma Customizada Thinkin', category: 'featured', isFeatured: true, description: 'Desenvolvi do zero uma plataforma mission-critical para substituir software legado. Resultou em ', highlight: 'R$ 40.000 de economia anual', techStack: ['React Native', 'Node.js', 'AWS Cloud', 'PostgreSQL'], caseStudyLabel: 'Ver Case Completo', projectUrl: 'https://thinkin.com.br' },
    { _id: 'a1', title: 'Workflows n8n Empresariais', category: 'architecture', icon: 'hub', description: 'Arquitetei ecossistemas de automação conectando CRMs legados com ferramentas cloud modernas em 50+ processos.', techStack: ['n8n', 'Webhooks', 'REST APIs'] },
    { _id: 'a2', title: 'Pipelines ETL Escaláveis', category: 'architecture', icon: 'database', description: 'Projetei camadas robustas de ingestão e transformação de dados para analytics em tempo real.', techStack: ['Python', 'SQL', 'Docker'] },
    { _id: 'a3', title: 'Migração Legacy para Cloud', category: 'architecture', icon: 'cloud_sync', description: 'Liderei a migração para AWS com zero downtime e 40% de redução na manutenção de infraestrutura.', techStack: ['AWS', 'IAM', 'Terraform'] },
    { _id: 'e1', title: 'Introdução à Automação n8n', category: 'education', description: 'Um guia completo para não-coders e engenheiros dominarem a automação visual de workflows.' },
    { _id: 'e2', title: 'Fundamentos de React Native', category: 'education', description: 'Ensinando desenvolvimento mobile cross-platform com foco em componentes UI performáticos.' },
    { _id: 'e3', title: 'Fundamentos de ETL', category: 'education', description: 'Explorando o ciclo de vida dos dados: de entradas brutas a insights limpos usando Python e SQL.' },
    { _id: 'p1', title: 'RPG 3D VTT', category: 'personal', icon: 'sports_esports', description: 'Projeto pessoal — Virtual Tabletop 3D para sessões de RPG com amigos. Three.js, combate por turnos e modelos 3D.', techStack: ['Next.js', 'Three.js', 'TypeScript'], projectUrl: 'https://rpg-3d.vercel.app', caseStudyLabel: 'Jogar agora' },
  ],
};

interface ProjectsPageProps { searchParams: Promise<{ lang?: string }>; }

export default async function Projects({ searchParams }: ProjectsPageProps) {
  const { lang } = await searchParams;
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value;
  const locale: Locale = (lang ?? cookieLocale) === 'pt' ? 'pt' : 'en';
  const t = i18n[locale];

  const projectsData = await getProjects(locale).catch(() => null);
  const projects: Project[] = projectsData?.length ? projectsData : fallbackProjects[locale];

  const featured = projects.find((p) => p.isFeatured);
  const architectureProjects = projects.filter((p) => p.category === 'architecture');
  const educationProjects = projects.filter((p) => p.category === 'education');
  const personalProjects = projects.filter((p) => p.category === 'personal');

  const getFeaturedImageUrl = (img?: { asset: { _ref: string } }) => {
    if (!img) return 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDmtcYoXJ9yYgP4gVbGnO5blvgW_5wUIy0sEq-LYJCwo3Yp-TnVwaJmHdzV3MWwTfPFCK5a_3OuWYgCqtk0X3d-_jpTilMkb--pyCHAf17tedolblKJp8E4TRhpLZogqMQh0CA4bnfbxl1pn_0MchS33L4yxhJYUpJRLg15FZ9sxDEr-UBcZXHYZ9IVy8lm_7tc8FZWz-bt9yb52rv-C2YMdc6s_vcYsrbpT6KtK1lo9g4gRcCPZ6';
    try { return urlFor(img).width(800).url(); } catch { return ''; }
  };

  return (
    <>
      <Section.Root className="pt-24 pb-12">
        <div className="max-w-4xl">
          <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl mb-4 text-gradient">{t.pageTitle}</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">{t.pageSubtitle}</p>
        </div>
      </Section.Root>

      {featured && (
        <Section.Root className="py-12">
          <Card.Root className="!p-0 overflow-hidden grid md:grid-cols-2 gap-0 border border-outline-variant/30" hoverEffect={false}>
            <div className="relative min-h-[400px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${getFeaturedImageUrl(featured.image)}')` }} />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/90 to-transparent" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-surface-container">
              <span className="font-label-sm text-primary uppercase tracking-widest mb-4">{t.featuredLabel}</span>
              <h2 className="font-headline-lg text-title-md md:text-headline-lg mb-6">{featured.title}</h2>
              <p className="font-body-md text-on-surface-variant mb-8">
                {featured.description}{featured.highlight && <strong className="text-primary font-semibold">{featured.highlight}</strong>} {t.featuredSuffix}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.techStack?.map((tech) => <Badge key={tech} variant="outline" className="!bg-surface-container-highest border-primary/20 !text-primary">{tech}</Badge>)}
              </div>
              <a className="inline-flex items-center text-primary font-semibold group" href={featured.projectUrl ?? '#'} target="_blank" rel="noopener noreferrer">
                {featured.caseStudyLabel}<span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </Card.Root>
        </Section.Root>
      )}

      {architectureProjects.length > 0 && (
        <Section.Root className="py-24">
          <div className="flex items-center gap-6 mb-16"><h2 className="font-title-md text-on-surface shrink-0">{t.archTitle}</h2><div className="h-px flex-1 bg-outline-variant/20" /></div>
          <div className="grid md:grid-cols-3 gap-gutter">
            {architectureProjects.map((p) => (
              <Card.Root key={p._id} className="!p-8 h-full border-outline-variant/20" hoverEffect={false}>
                <Card.Icon icon={p.icon ?? 'code'} className="mb-8" />
                <Card.Title className="mb-4">{p.title}</Card.Title>
                <Card.Description className="mb-8">{p.description}</Card.Description>
                <Card.Footer className="!pt-0 !mt-auto border-none">
                  {p.techStack?.map((tech) => <Badge key={tech} variant="outline" className="!bg-surface-container-high">{tech}</Badge>)}
                </Card.Footer>
              </Card.Root>
            ))}
          </div>
        </Section.Root>
      )}

      {personalProjects.length > 0 && (
        <Section.Root className="py-12">
          <div className="flex items-center gap-6 mb-10"><h2 className="font-title-md text-on-surface shrink-0">{t.personalTitle}</h2><div className="h-px flex-1 bg-outline-variant/20" /></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {personalProjects.map((p) => (
              <Card.Root key={p._id} className="!p-8 h-full border-outline-variant/20 group" hoverEffect={true}>
                <Card.Icon icon={p.icon ?? 'code'} className="mb-6" />
                <Card.Title className="mb-3">{p.title}</Card.Title>
                <Card.Description className="mb-6">{p.description}</Card.Description>
                <Card.Footer className="!pt-0 !mt-auto border-none flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">{p.techStack?.map((tech) => <Badge key={tech} variant="outline" className="!bg-surface-container-high">{tech}</Badge>)}</div>
                  {p.projectUrl && (
                    <a href={p.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all">
                      {p.caseStudyLabel ?? (locale === 'pt' ? 'Ver projeto' : 'View project')}<span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  )}
                </Card.Footer>
              </Card.Root>
            ))}
          </div>
        </Section.Root>
      )}

      {educationProjects.length > 0 && (
        <Section.Root className="py-24 bg-surface-container-lowest" container={false}>
          <div className="container max-w-container-max mx-auto px-margin-mobile md:px-gutter grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline-lg mb-8">{t.eduTitle}</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">{t.eduSubtitle}</p>
              <div className="space-y-10">
                {educationProjects.map((p, i) => (
                  <div key={p._id} className="flex gap-8 group">
                    <div className="shrink-0 w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">{String(i + 1).padStart(2, '0')}</div>
                    <div><h4 className="font-title-md mb-2 text-on-surface">{p.title}</h4><p className="font-body-md text-on-surface-variant">{p.description}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <ProjectsClient impactLabel={t.impactLabel} impactNumber={t.impactNumber} impactDesc={t.impactDesc} />
          </div>
        </Section.Root>
      )}

      <Section.Root className="py-24 text-center">
        <CtaCard title={t.ctaTitle} description={t.ctaDesc} primaryActionText={t.ctaPrimary} secondaryActionText={t.ctaSecondary} />
      </Section.Root>
    </>
  );
}


// ─── Types ─────────────────────────────────────────────────────────────────────
