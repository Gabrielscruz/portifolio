import { getExperiences, getEducation, getCertifications } from '@/lib/sanity.queries';
import { ExperienceClient } from './ExperienceClient';
import { getResolvedLocale, type Locale } from '@/lib/locale';

// ─── Fallback bilíngue ────────────────────────────────────────────────────────
const fallbackExperiences: Record<Locale, object[]> = {
  en: [
    {
      _id: 'thinkin',
      company: 'Thinkin',
      companyUrl: 'https://thinkin.com.br',
      role: 'Senior Software Engineer & Architect',
      period: 'OCT 2023 - PRESENT',
      isCurrent: true,
      description: 'Leading technical direction, defining system architecture, and designing end-to-end data-driven solutions. Built an in-house platform replacing an expensive third-party solution, reducing annual licensing costs by approximately ',
      highlight: 'BRL 40,000 / year (USD 7,900+).',
      badges: ['Technical Leadership', 'System Architecture', 'Cost Optimization', 'Clean Code & SOLID'],
      techStack: ['Node.js', 'NestJS', 'React', 'React Native', 'Python', 'PostgreSQL', 'AWS (EC2/ECS/S3)', 'Docker', 'n8n'],
      listItems: [
        'Distributed microservices architecture with Node.js & NestJS',
        'Complex data integration pipelines & modeling with Python, n8n & PostgreSQL',
        'Scalable containerized cloud infrastructure on AWS (EC2, ECS, S3) with Docker',
        'Team leadership, task organization, developer mentorship, and Clean Code enforcement',
        'Full development lifecycle ownership and mobile solutions with React Native',
      ],
    },
    {
      _id: 'konvix',
      company: 'Konvix Tecnologia',
      companyUrl: 'https://www.konvix.com.br/',
      role: 'Full Stack Engineer',
      period: 'MAR 2022 - SEP 2023',
      description: 'Developed critical enterprise solutions for the Konvix system (cloud ERP for commerce and retail) with React and Node.js across frontend and backend. Built government integrations, fiscal tax systems, and automated invoice (NF-e/NFS-e) processing. ',
      highlight: 'Awarded merit-based promotion and salary increase within 8 months.',
      badges: ['Fiscal & Gov APIs', 'Cloud ERP', 'Fast Promotion', 'Full Stack'],
      techStack: ['React', 'Node.js', 'TypeScript', 'SQL', 'Gov Integrations', 'Invoicing'],
      listItems: [
        'Government tax integration & mission-critical invoice emission pipelines',
        'Secure, high-availability REST APIs with Node.js and TypeScript',
        'Responsive and high-performance interactive interfaces in React',
      ],
    },
    {
      _id: 'winover',
      company: 'Winover Contact Center',
      role: 'MIS Analyst & Team Lead',
      period: 'JUN 2019 - MAR 2022',
      description: 'Engineered SQL Server data pipelines, automated call data dumps, and developed web scraping tools from MIS systems. Built the company’s first centralized people management software using PHP and SQL Server, eliminating manual daily workloads and establishing Power BI operational dashboards ("Quadro do Operador"). ',
      highlight: 'Progressed from junior analyst to leading technical initiatives and team members.',
      badges: ['Data Engineering', 'Web Scraping', 'Internal Systems', 'Power BI'],
      techStack: ['SQL Server', 'Python', 'Power BI', 'Web Scraping', 'PHP', 'ETL'],
      listItems: [
        'Built company-wide people management and operational tracking software from scratch',
        'Automated ETL pipelines and data scraping from legacy contact center systems',
        'Centralized operational BI metrics through the unified "Quadro do Operador"',
        'Promoted to leadership responsibilities, mentoring teammates on SQL and reporting',
      ],
    },
    {
      _id: 'suzano',
      company: 'Suzano',
      role: 'Production Line Feeder & Formare',
      period: 'SEP 2015 - FEB 2019',
      description: 'Industrial manufacturing operations and mechanical maintenance. Established a rock-solid foundation in methodical troubleshooting, high-standard operational discipline, and structural thinking.',
      badges: ['Industrial Foundation', 'Process Discipline'],
      techStack: ['Safety Standards', 'Preventive Maintenance', 'Process Optimization'],
    },
  ],
  pt: [
    {
      _id: 'thinkin',
      company: 'Thinkin',
      companyUrl: 'https://thinkin.com.br',
      role: 'Engenheiro de Software Sênior & Arquiteto',
      period: 'OUT 2023 - PRESENTE',
      isCurrent: true,
      description: 'Liderando a direção técnica, definindo arquitetura de sistemas e desenhando fluxos de ponta a ponta orientados a dados. Construímos uma plataforma proprietária substituindo solução legada de terceiros, reduzindo custos de licença em aproximadamente ',
      highlight: 'R$ 40.000 / ano (~USD 7.900).',
      badges: ['Liderança Técnica', 'Arquitetura de Sistemas', 'Otimização de Custos', 'Clean Code & SOLID'],
      techStack: ['Node.js', 'NestJS', 'React', 'React Native', 'Python', 'PostgreSQL', 'AWS (EC2/ECS/S3)', 'Docker', 'n8n'],
      listItems: [
        'Arquitetura de microsserviços distribuídos com Node.js e NestJS',
        'Pipelines de integração de dados, automações n8n e modelagem em PostgreSQL',
        'Infraestrutura cloud escalável na AWS (EC2, ECS, S3) containerizada com Docker',
        'Liderança técnica da equipe, organização de backlog e garantia de Clean Code e SOLID',
        'Desenvolvimento full-cycle e soluções móveis com React Native',
      ],
    },
    {
      _id: 'konvix',
      company: 'Konvix Tecnologia',
      companyUrl: 'https://www.konvix.com.br/',
      role: 'Engenheiro Full Stack',
      period: 'MAR 2022 - SET 2023',
      description: 'Desenvolvimento de soluções estratégicas para o sistema Konvix (ERP em nuvem para varejo e gestão comercial) com forte atuação em React e Node.js. Implementação de integrações governamentais, sistemas fiscais e esteiras de emissão, validação e processamento de notas fiscais (NF-e, NFC-e). ',
      highlight: 'Promoção por mérito e reconhecimento de alta performance aos 8 meses.',
      badges: ['Sistemas Fiscais', 'ERP Cloud', 'APIs Governamentais', 'Promoção Acelerada'],
      techStack: ['React', 'Node.js', 'TypeScript', 'SQL', 'APIs Gov', 'Nota Fiscal Eletrônica'],
      listItems: [
        'Integrações governamentais de alta confiabilidade e processamento fiscal contínuo',
        'APIs REST seguras e de alta disponibilidade com Node.js e TypeScript',
        'Interfaces web reativas e componentizadas em React com alta fidelidade',
      ],
    },
    {
      _id: 'winover',
      company: 'Winover Contact Center',
      role: 'Analista de MIS & Liderança Técnica',
      period: 'JUN 2019 - MAR 2022',
      description: 'Engenharia de pipelines com SQL Server, extração de dados telefônicos, dumps automatizados e web scraping de sistemas MIS. Criei o primeiro software de gestão de pessoas da empresa em PHP e SQL Server, centralizando relatórios de ABS e métricas operacionais no Power BI ("Quadro do Operador"). ',
      highlight: 'Evolução de analista júnior para assunção de liderança de equipe e projetos críticos.',
      badges: ['Engenharia de Dados', 'Web Scraping', 'Sistemas Internos', 'Power BI'],
      techStack: ['SQL Server', 'Python', 'Power BI', 'Web Scraping', 'PHP', 'ETL'],
      listItems: [
        'Desenvolvimento do primeiro software de gestão operacional e de pessoas da empresa',
        'Automação de extração de dados e web scraping de relatórios de contact center',
        'Criação de dashboards consolidados no Power BI ("Quadro do Operador")',
        'Assunção de responsabilidades de liderança técnica e suporte à equipe',
      ],
    },
    {
      _id: 'suzano',
      company: 'Suzano',
      role: 'Alimentador de Linha de Produção & Formare',
      period: 'SET 2015 - FEV 2019',
      description: 'Operações industriais de manufatura e manutenção preventiva. Base fundamental para raciocínio analítico metódico, disciplina operacional e foco em segurança.',
      badges: ['Base Industrial', 'Disciplina Operacional'],
      techStack: ['Manutenção Preventiva', 'Normas de Segurança', 'Otimização de Processos'],
    },
  ],
};

const fallbackEducation: Record<Locale, object[]> = {
  en: [
    { _id: 'edu1', degree: 'Postgraduate: Cloud & AI DevOps', institution: 'Impacta Tecnologia (Lato Sensu)', period: '2026 - 2027', isCurrent: true },
    { _id: 'edu2', degree: 'Technologist: Information Technology Management', institution: 'Higher Education Degree (Gestão de TI)', period: '2017 - 2019' },
  ],
  pt: [
    { _id: 'edu1', degree: 'Pós-Graduação Lato Sensu: Cloud & AI DevOps', institution: 'Impacta Tecnologia', period: '2026 - 2027', isCurrent: true },
    { _id: 'edu2', degree: 'Tecnólogo: Gestão da Tecnologia da Informação (TI)', institution: 'Ensino Superior', period: '2017 - 2019' },
  ],
};

const fallbackCertifications: Record<Locale, object[]> = {
  en: [
    {
      _id: 'c0',
      name: 'Rocketseat One: Full Stack & Mobile',
      level: 'React, Next.js, Node.js & React Native',
      icon: 'verified',
      credentialUrl: 'https://www.rocketseat.com.br/referral/one?referral=gabriel-da-silva-cruz-1590257036&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one-certificate-modal&coupon=indicamgm',
    },
    {
      _id: 'c1',
      name: 'n8n Intelligent Automation',
      level: 'Advanced Workflow Orchestration',
      icon: 'auto_fix_high',
    },
    {
      _id: 'c2',
      name: 'ETL with Integration Services',
      level: 'Data Transformation & Modeling',
      icon: 'data_usage',
    },
    {
      _id: 'c3',
      name: 'React Native Fundamentals & Navigation',
      level: 'Cross-Platform Mobile Engineering',
      icon: 'smartphone',
    },
    {
      _id: 'c4',
      name: 'Adobe XD: UI/UX Prototyping',
      level: 'Interface Architecture & Design Systems',
      icon: 'brush',
    },
    {
      _id: 'c5',
      name: 'Assertive Communication & Leadership',
      level: 'Technical Leadership & Team Alignment',
      icon: 'groups',
    },
  ],
  pt: [
    {
      _id: 'c0',
      name: 'Rocketseat One: Full Stack & Mobile',
      level: 'React, Next.js, Node.js & React Native',
      icon: 'verified',
      credentialUrl: 'https://www.rocketseat.com.br/referral/one?referral=gabriel-da-silva-cruz-1590257036&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one-certificate-modal&coupon=indicamgm',
    },
    {
      _id: 'c1',
      name: 'Automação com n8n',
      level: 'Especialista em Orquestração de Fluxos',
      icon: 'auto_fix_high',
    },
    {
      _id: 'c2',
      name: 'ETL com Integration Services',
      level: 'Transformação de Dados & Modelagem SQL',
      icon: 'data_usage',
    },
    {
      _id: 'c3',
      name: 'React Native Fundamentos & Navegação',
      level: 'Engenharia Mobile Multiplataforma',
      icon: 'smartphone',
    },
    {
      _id: 'c4',
      name: 'Adobe XD: Design de Interfaces',
      level: 'Arquitetura de UI & Design Systems',
      icon: 'brush',
    },
    {
      _id: 'c5',
      name: 'Comunicação Assertiva & Liderança',
      level: 'Liderança Técnica & Gestão Colaborativa',
      icon: 'groups',
    },
  ],
};

const coreStack = [
  { icon: 'web', label: 'React / Next / Native' },
  { icon: 'terminal', label: 'Node.js / NestJS / Prisma' },
  { icon: 'code', label: 'Python / Go / ML' },
  { icon: 'cloud', label: 'AWS (EC2/ECS/S3) / Docker' },
  { icon: 'database', label: 'PostgreSQL / SQL Server / Mongo' },
  { icon: 'auto_mode', label: 'n8n / ETL / Automações' },
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
  const locale: Locale = await getResolvedLocale(lang);
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
    <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
      {/* ── HEADER MODERNO: TRAJETÓRIA & EXPERIÊNCIA ── */}
      <section className="rounded-2xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 p-6 sm:p-10 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-teal-300 font-pixel text-[10px]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>★ CARREIRA &amp; TRAJETÓRIA PROFISSIONAL ★</span>
          </div>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t.experienceTitle}
          </h1>
          <p className="font-sans text-base sm:text-lg text-purple-200/90 leading-relaxed">
            {t.experienceSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-purple-300">
            <span className="px-3 py-1 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-200">
              6+ Anos em Produção
            </span>
            <span className="px-3 py-1 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-200">
              Tech Lead &amp; Software Architect
            </span>
            <span className="px-3 py-1 bg-emerald-950/30 border border-emerald-500/30 rounded-lg text-emerald-300">
              +R$ 40k/ano Economizados
            </span>
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES TÉCNICAS (CORE STACK) ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
          <span className="font-pixel text-teal-400 text-sm">✦ [STACK]</span>
          <h2 className="font-sans font-bold text-base text-purple-200 uppercase tracking-wider">{t.coreTitle}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {coreStack.map(({ icon, label }) => (
            <div
              key={label}
              className="p-4 rounded-xl bg-gradient-to-b from-[#140828] to-[#0a0316] border border-purple-500/30 hover:border-purple-400/60 flex flex-col items-center justify-center gap-2 text-center transition-all shadow-sm group"
            >
              <span className="material-symbols-outlined text-2xl text-teal-400 group-hover:text-teal-300 transition-colors">
                {icon}
              </span>
              <span className="font-sans text-xs text-purple-100 font-semibold leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <ExperienceClient
        experiences={experiences}
        education={education}
        certifications={certifications}
        locale={locale}
        i18n={t}
      />
    </main>
  );
}
