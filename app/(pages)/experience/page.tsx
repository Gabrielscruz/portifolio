import { getExperiences, getEducation, getCertifications } from '@/lib/sanity.queries';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { ExperienceClient } from './ExperienceClient';
import { cookies } from 'next/headers';

type Locale = 'en' | 'pt';

// ─── Fallback bilíngue ────────────────────────────────────────────────────────
const fallbackExperiences: Record<Locale, object[]> = {
  en: [
    { _id: 'thinkin', company: 'Thinkin', role: 'Senior Software Engineer', period: 'OCT 2023 - PRESENT', isCurrent: true, description: 'Leading technical direction and architecting data-oriented solutions. Implemented strategic automation workflows reducing operational costs by ', highlight: 'R$ 40k monthly.', badges: ['Leadership', 'Data Engineering'], techStack: ['Python', 'PostgreSQL', 'n8n', 'NestJS', 'React Native'], listItems: ['Advanced Python & PostgreSQL orchestration', 'Complex n8n automation pipelines', 'NestJS / Node.js Microservices', 'React & React Native Ecosystem'] },
    { _id: 'konvix', company: 'Konvix Tecnologia', role: 'Full Stack Engineer', period: 'MAR 2022 - SEP 2023', description: 'Developed mission-critical web applications for government integrations and tax systems. Focused on high-availability and secure API communications.', techStack: ['Node.js', 'React', 'Gov API', 'TypeScript'] },
    { _id: 'winover', company: 'Winover Contact Center', role: 'MIS Analyst', period: 'JUN 2019 - MAR 2022', description: 'Engineered robust data pipelines and automated scraping for MIS reporting. Built an internal HR system from scratch using PHP and SQL Server.', techStack: ['SQL Server', 'Power BI', 'PHP', 'Scraping'] },
    { _id: 'suzano', company: 'Suzano', role: 'Line Feeder / Mechanic', period: '2015 - 2019', description: 'Industrial operations and maintenance. Foundation for structural thinking and logical problem-solving.' },
  ],
  pt: [
    { _id: 'thinkin', company: 'Thinkin', role: 'Engenheiro de Software Sênior', period: 'OUT 2023 - PRESENTE', isCurrent: true, description: 'Liderando a direção técnica e arquitetando soluções orientadas a dados. Implementei automações estratégicas reduzindo custos operacionais em ', highlight: 'R$ 40k mensais.', badges: ['Liderança', 'Engenharia de Dados'], techStack: ['Python', 'PostgreSQL', 'n8n', 'NestJS', 'React Native'], listItems: ['Orquestração avançada Python & PostgreSQL', 'Pipelines de automação n8n complexos', 'Microsserviços NestJS / Node.js', 'Ecossistema React & React Native'] },
    { _id: 'konvix', company: 'Konvix Tecnologia', role: 'Engenheiro Full Stack', period: 'MAR 2022 - SET 2023', description: 'Desenvolvi aplicações web mission-critical para integrações governamentais e sistemas tributários. Foco em alta disponibilidade e APIs seguras.', techStack: ['Node.js', 'React', 'API Gov', 'TypeScript'] },
    { _id: 'winover', company: 'Winover Contact Center', role: 'Analista MIS', period: 'JUN 2019 - MAR 2022', description: 'Desenvolvi pipelines de dados robustos e scraping automatizado para relatórios MIS. Construí um sistema de RH interno do zero com PHP e SQL Server.', techStack: ['SQL Server', 'Power BI', 'PHP', 'Scraping'] },
    { _id: 'suzano', company: 'Suzano', role: 'Alimentador de Linha / Mecânico', period: '2015 - 2019', description: 'Operações e manutenção industrial. Base para pensamento estrutural e resolução lógica de problemas.' },
  ],
};

const fallbackEducation: Record<Locale, object[]> = {
  en: [
    { _id: 'edu1', degree: 'Postgraduate: Cloud & AI DevOps', institution: 'Impacta Tecnologia', period: '2026 - 2027', isCurrent: true },
    { _id: 'edu2', degree: 'Technologist: IT Management', institution: 'Higher Education Institute', period: '2017 - 2019' },
  ],
  pt: [
    { _id: 'edu1', degree: 'Pós-Graduação: Cloud & AI DevOps', institution: 'Impacta Tecnologia', period: '2026 - 2027', isCurrent: true },
    { _id: 'edu2', degree: 'Tecnólogo: Gestão de TI', institution: 'Instituto de Ensino Superior', period: '2017 - 2019' },
  ],
};

const fallbackCertifications: Record<Locale, object[]> = {
  en: [
    { _id: 'c1', name: 'n8n Automation', level: 'Expert Level', icon: 'auto_fix_high' },
    { _id: 'c2', name: 'Adobe XD Design', level: 'UI/UX Foundational', icon: 'brush' },
    { _id: 'c3', name: 'ETL Mastery', level: 'Data Pipelines', icon: 'data_usage' },
    { _id: 'c4', name: 'React Native', level: 'Mobile Engineering', icon: 'smartphone' },
  ],
  pt: [
    { _id: 'c1', name: 'Automação n8n', level: 'Nível Expert', icon: 'auto_fix_high' },
    { _id: 'c2', name: 'Design Adobe XD', level: 'Fundamentos UI/UX', icon: 'brush' },
    { _id: 'c3', name: 'Domínio de ETL', level: 'Pipelines de Dados', icon: 'data_usage' },
    { _id: 'c4', name: 'React Native', level: 'Engenharia Mobile', icon: 'smartphone' },
  ],
};

const coreStack = [
  { icon: 'terminal', label: 'Node.js / NestJS' },
  { icon: 'code', label: 'Python / Go' },
  { icon: 'cloud', label: 'AWS / Docker' },
  { icon: 'auto_mode', label: 'n8n / ETL' },
  { icon: 'web', label: 'Next.js / React' },
];

const i18n = {
  en: { coreTitle: 'Core Expertise', experienceTitle: 'Experience & Journey', experienceSubtitle: 'A trajectory defined by continuous evolution, transitioning from industrial operations to high-impact software architecture and data engineering.', educationLabel: 'Education', certLabel: 'Certifications', ctaTitle: 'Interested in working together?', ctaDesc: "Let's discuss how my architectural approach and technical expertise can help your team scale and optimize.", ctaPrimary: 'Download Full CV', ctaSecondary: 'Get In Touch' },
  pt: { coreTitle: 'Especialidades Técnicas', experienceTitle: 'Experiência & Trajetória', experienceSubtitle: 'Uma trajetória marcada pela evolução contínua, transicionando de operações industriais para arquitetura de software e engenharia de dados de alto impacto.', educationLabel: 'Educação', certLabel: 'Certificações', ctaTitle: 'Interessado em trabalhar juntos?', ctaDesc: 'Vamos discutir como minha abordagem arquitetural e expertise técnica podem ajudar seu time a escalar e otimizar.', ctaPrimary: 'Baixar CV Completo', ctaSecondary: 'Entre em Contato' },
};

interface ExperiencePageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Experience({ searchParams }: ExperiencePageProps) {
  const { lang } = await searchParams;
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value;
  const locale: Locale = (lang ?? cookieLocale) === 'pt' ? 'pt' : 'en';
  const t = i18n[locale];

  const [experiencesData, educationData, certificationsData] = await Promise.all([
    getExperiences(locale).catch(() => null),
    getEducation(locale).catch(() => null),
    getCertifications(locale).catch(() => null),
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const experiences: any[] = experiencesData?.length ? experiencesData : fallbackExperiences[locale] as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const education: any[] = educationData?.length ? educationData : fallbackEducation[locale] as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const certifications: any[] = certificationsData?.length ? certificationsData : fallbackCertifications[locale] as any[];

  return (
    <>
      {/* Core Expertise (estático) */}
      <Section.Root className="mb-section-gap !py-0 pt-32">
        <br />
        <Section.Title className="mt-32">{t.coreTitle}</Section.Title>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {coreStack.map(({ icon, label }) => (
            <Card.Root key={label} className="!p-6 items-center justify-center gap-3">
              <Card.Icon icon={icon} className="w-12 h-12 rounded-lg" style={{ fontVariationSettings: "'FILL' 1" }} />
              <span className="font-label-md text-label-md">{label}</span>
            </Card.Root>
          ))}
        </div>
      </Section.Root>

      <ExperienceClient
        experiences={experiences}
        education={education}
        certifications={certifications}
        locale={locale}
        i18n={t}
      />
    </>
  );
}
