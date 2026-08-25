import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { List, ListItem } from '@/components/List';
import { HeroGraphic } from '@/components/HeroGraphic';
import Link from 'next/link';
import { getHero, getCompetencies, getSiteConfig } from '@/lib/sanity.queries';

type Locale = 'en' | 'pt';

const fallbackHero: Record<Locale, object> = {
  en: {
    tagline: 'Architecting the Future', title: 'Software Architect',
    subtitle: 'Data Engineering, Automation & Cloud Infrastructure',
    description: 'Technology professional with 6+ years of experience in software development, system architecture, data integration, and cloud infrastructure.',
    yearsExperience: 6, automationFocus: 100,
    quote: '"Simplicity is the ultimate sophistication. I build systems that are as maintainable as they are powerful."',
    primaryCta: 'View Experience', secondaryCta: 'Get in Touch',
    builtForScaleTitle: 'Built for Scale',
    builtForScaleDescription: "Combining deep technical knowledge with business acumen to deliver software that evolves with your enterprise.",
    builtForScaleItems: ['Modern Microservices Architecture', 'Automated CI/CD Workflows', 'Enterprise Data Orchestration'],
  },
  pt: {
    tagline: 'Arquitetando o Futuro', title: 'Arquiteto de Software',
    subtitle: 'Engenharia de Dados, Automação & Infraestrutura Cloud',
    description: 'Profissional de tecnologia com 6+ anos de experiência em desenvolvimento de software, arquitetura de sistemas e infraestrutura em nuvem.',
    yearsExperience: 6, automationFocus: 100,
    quote: '"Simplicidade é a sofisticação máxima. Construo sistemas tão manuteníveis quanto poderosos."',
    primaryCta: 'Ver Experiência', secondaryCta: 'Entrar em Contato',
    builtForScaleTitle: 'Construído para Escalar',
    builtForScaleDescription: 'Combinando profundo conhecimento técnico com visão de negócio para entregar software que evolui com a sua empresa.',
    builtForScaleItems: ['Arquitetura de Microsserviços Moderna', 'Workflows CI/CD Automatizados', 'Orquestração de Dados Empresariais'],
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fallbackCompetencies: Record<Locale, any[]> = {
  en: [
    { _id: '1', icon: 'architecture', title: 'Software Architecture', description: 'Defining structural blueprints for high-availability systems.', badges: ['DDD', 'SOLID'] },
    { _id: '2', icon: 'database', title: 'Data Engineering', description: 'Streamlining data pipelines, ETL processes, and real-time integrations.', badges: ['Spark', 'Kafka'] },
    { _id: '3', icon: 'terminal', title: 'Full Stack Backend', description: 'Building robust APIs with a focus on clean code and performance.', badges: ['Go', 'Python'] },
    { _id: '4', icon: 'cloud', title: 'Cloud (AWS/Docker)', description: 'Deploying and managing containerized workloads in cloud-native environments.', badges: ['EKS', 'Terraform'] },
  ],
  pt: [
    { _id: '1', icon: 'architecture', title: 'Arquitetura de Software', description: 'Definindo blueprints estruturais para sistemas de alta disponibilidade.', badges: ['DDD', 'SOLID'] },
    { _id: '2', icon: 'database', title: 'Engenharia de Dados', description: 'Otimizando pipelines de dados, processos ETL e integrações em tempo real.', badges: ['Spark', 'Kafka'] },
    { _id: '3', icon: 'terminal', title: 'Backend Full Stack', description: 'Construindo APIs robustas com foco em código limpo e performance.', badges: ['Go', 'Python'] },
    { _id: '4', icon: 'cloud', title: 'Cloud (AWS/Docker)', description: 'Implantando e gerenciando workloads containerizados em ambientes cloud-native.', badges: ['EKS', 'Terraform'] },
  ],
};

interface HomeProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { lang } = await searchParams;
  const locale: Locale = lang === 'pt' ? 'pt' : 'en';

  const [heroData, competenciesData, siteConfig] = await Promise.all([
    getHero(locale).catch(() => null),
    getCompetencies(locale).catch(() => null),
    getSiteConfig().catch(() => null),
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hero = (heroData ?? fallbackHero[locale]) as any;
  const competencies = competenciesData?.length ? competenciesData : fallbackCompetencies[locale];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 hero-gradient">
        <div className="absolute inset-0 tech-grid-bg pointer-events-none opacity-40"></div>
        <div className="container max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 grid grid-cols-12 gap-gutter">
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-center gap-6">
            <div className="inline-flex items-center gap-3 text-primary text-label-md uppercase tracking-[0.3em] font-bold">
              <span className="w-12 h-0.5 bg-primary"></span>
              {hero.tagline}
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white leading-[1.05]">
              <span className="text-on-surface-variant">{hero.title}</span>
            </h1>
            <h2 className="text-headline-sm md:text-headline-md text-on-surface-variant/80 max-w-2xl font-semibold">
              {hero.subtitle}
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-5 mt-10">
              <Link href={`/experience${locale === 'pt' ? '?lang=pt' : ''}`}>
                <Button variant="primary">
                  {hero.primaryCta}
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Button>
              </Link>
              <Link href={`/contact${locale === 'pt' ? '?lang=pt' : ''}`}>
                <Button variant="glass">{hero.secondaryCta}</Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex col-span-4 items-center justify-center relative">
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* Key Competencies Section */}
      <Section.Root className="bg-surface-container-lowest">
        <Section.Header className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Section.Title>{locale === 'pt' ? 'Especialidades em Arquitetura & Dados' : 'Core Architecture & Data Expertise'}</Section.Title>
            <Section.Subtitle>{locale === 'pt' ? 'Abordagem sistemática para engenharia de sistemas distribuídos complexos, garantindo confiabilidade, escalabilidade e performance.' : 'Systematic approach to engineering complex distributed systems, ensuring reliability, scalability, and performance.'}</Section.Subtitle>
          </div>
          <div className="flex gap-3">
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <div className="w-6 h-1 bg-white/10 rounded-full"></div>
          </div>
        </Section.Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((c: { _id: string; icon: string; title: string; description: string; badges?: string[] }) => (
            <Card.Root key={c._id} className="!p-10 hover:bg-white/[0.08]" hoverEffect={false}>
              <Card.Icon icon={c.icon} />
              <Card.Title className="mt-6">{c.title}</Card.Title>
              <Card.Description>{c.description}</Card.Description>
              <Card.Footer>
                {c.badges?.map((b) => <Badge key={b} variant="glass">{b}</Badge>)}
              </Card.Footer>
            </Card.Root>
          ))}
        </div>
      </Section.Root>

      {/* Bento Metrics */}
      <Section.Root className="bg-background">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4 mb-10 lg:mb-0">
            <Section.Title>{hero.builtForScaleTitle}</Section.Title>
            <Section.Subtitle className="mb-10">{hero.builtForScaleDescription}</Section.Subtitle>
            <List>
              {hero.builtForScaleItems?.map((item: string) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card.Root className="!p-10 justify-between items-start border-none shadow-2xl" hoverEffect={true}>
              <div className="text-display-lg text-white font-extrabold mb-2">{hero.yearsExperience}+</div>
              <div className="text-label-md text-primary tracking-widest uppercase font-bold">{locale === 'pt' ? 'Anos de Arquitetura' : 'Years of Architecture'}</div>
            </Card.Root>
            <Card.Root className="bg-primary/10 !p-10 border-primary/20 justify-between relative overflow-hidden group" hoverEffect={true}>
              <div className="relative z-10">
                <div className="text-display-lg text-primary font-extrabold mb-2">{hero.automationFocus}%</div>
                <div className="text-label-md text-white/80 tracking-widest uppercase font-bold">{locale === 'pt' ? 'Foco em Automação' : 'Automation Focus'}</div>
              </div>
              <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-[160px] opacity-10 group-hover:rotate-12 transition-transform text-primary">settings_suggest</span>
            </Card.Root>
            <Card.Root className="md:col-span-2 !p-10 flex-col md:flex-row items-center gap-10 border-none shadow-2xl" hoverEffect={true}>
              <div className="flex-1">
                <h5 className="text-headline-sm text-white mb-4 font-bold">{locale === 'pt' ? 'Filosofia Arquitetural' : 'Architectural Philosophy'}</h5>
                <p className="text-body-lg text-on-surface-variant italic leading-relaxed">{hero.quote}</p>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-2 border-white/10 flex-shrink-0 shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfWIRti_soTI9p0CEVh549PWdFIfPwRQkseVONEzo7aOt0VsuiUlK3TfNTV5Utl4gjWLrwDXMp0xB2D8wyen82_tbfb_o6w-RUBqF8vHfLAB3DW1XLGwtglzK23JlEKEDMXfGln21rFhhNgXoJTLKAA7B6Wyccpv7znjZcovQBNmFAdkX2wjwWKQ-5-bm5rL6SJyzUgqcJlT0qygg2u5JutaUOoia5Wwk6VtvRi9Y8D5vAiO0cOphl')" }}
                ></div>
              </div>
            </Card.Root>
          </div>
        </div>
      </Section.Root>
    </>
  );
}
