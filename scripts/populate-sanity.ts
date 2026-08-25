// Script para popular o Sanity com conteúdo bilíngue (PT + EN)
// Execute: npx ts-node --project tsconfig.json scripts/populate-sanity.ts

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ik916dx0',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const docs = [
  // ─── SITE CONFIG ─────────────────────────────────────────────────────────────
  {
    _id: 'siteConfig',
    _type: 'siteConfig',
    name: 'Gabriel',
    fullName: 'Gabriel Silva',
    role: 'Software Architect',
    github: 'https://github.com/gabrielsilva',
    linkedin: 'https://linkedin.com/in/gabrielsilva',
  },

  // ─── HERO EN ─────────────────────────────────────────────────────────────────
  {
    _id: 'hero-en',
    _type: 'hero',
    locale: 'en',
    tagline: 'Architecting the Future',
    title: 'Software Architect',
    subtitle: 'Data Engineering, Automation & Cloud Infrastructure',
    description: 'Technology professional with 6+ years of experience in software development, system architecture, data integration, and cloud infrastructure. Focusing on scalable solutions, end-to-end automations, and architectural vision.',
    yearsExperience: 6,
    automationFocus: 100,
    quote: '"Simplicity is the ultimate sophistication. I build systems that are as maintainable as they are powerful, ensuring long-term technical health."',
    primaryCta: 'View Experience',
    secondaryCta: 'Get in Touch',
    builtForScaleTitle: 'Built for Scale',
    builtForScaleDescription: "Combining deep technical knowledge with business acumen to deliver software that doesn't just work, but evolves with your enterprise.",
    builtForScaleItems: ['Modern Microservices Architecture', 'Automated CI/CD Workflows', 'Enterprise Data Orchestration'],
  },

  // ─── HERO PT ─────────────────────────────────────────────────────────────────
  {
    _id: 'hero-pt',
    _type: 'hero',
    locale: 'pt',
    tagline: 'Arquitetando o Futuro',
    title: 'Arquiteto de Software',
    subtitle: 'Engenharia de Dados, Automação & Infraestrutura Cloud',
    description: 'Profissional de tecnologia com 6+ anos de experiência em desenvolvimento de software, arquitetura de sistemas, integração de dados e infraestrutura em nuvem. Foco em soluções escaláveis, automações end-to-end e visão arquitetural.',
    yearsExperience: 6,
    automationFocus: 100,
    quote: '"Simplicidade é a sofisticação máxima. Construo sistemas tão manuteníveis quanto poderosos, garantindo saúde técnica a longo prazo."',
    primaryCta: 'Ver Experiência',
    secondaryCta: 'Entrar em Contato',
    builtForScaleTitle: 'Construído para Escalar',
    builtForScaleDescription: 'Combinando profundo conhecimento técnico com visão de negócio para entregar software que não apenas funciona, mas evolui com a sua empresa.',
    builtForScaleItems: ['Arquitetura de Microsserviços Moderna', 'Workflows CI/CD Automatizados', 'Orquestração de Dados Empresariais'],
  },

  // ─── COMPETENCIES EN ─────────────────────────────────────────────────────────
  { _id: 'comp-en-1', _type: 'competency', locale: 'en', order: 1, icon: 'architecture', title: 'Software Architecture', description: 'Defining structural blueprints for high-availability systems and microservices ecosystems.', badges: ['DDD', 'SOLID'] },
  { _id: 'comp-en-2', _type: 'competency', locale: 'en', order: 2, icon: 'database', title: 'Data Engineering', description: 'Streamlining data pipelines, ETL processes, and real-time integration architectures.', badges: ['Spark', 'Kafka'] },
  { _id: 'comp-en-3', _type: 'competency', locale: 'en', order: 3, icon: 'terminal', title: 'Full Stack Backend', description: 'Building robust APIs and server-side logic with a focus on clean code and performance.', badges: ['Go', 'Python'] },
  { _id: 'comp-en-4', _type: 'competency', locale: 'en', order: 4, icon: 'cloud', title: 'Cloud (AWS/Docker)', description: 'Deploying and managing containerized workloads in cloud-native environments.', badges: ['EKS', 'Terraform'] },

  // ─── COMPETENCIES PT ─────────────────────────────────────────────────────────
  { _id: 'comp-pt-1', _type: 'competency', locale: 'pt', order: 1, icon: 'architecture', title: 'Arquitetura de Software', description: 'Definindo blueprints estruturais para sistemas de alta disponibilidade e ecossistemas de microsserviços.', badges: ['DDD', 'SOLID'] },
  { _id: 'comp-pt-2', _type: 'competency', locale: 'pt', order: 2, icon: 'database', title: 'Engenharia de Dados', description: 'Otimizando pipelines de dados, processos ETL e arquiteturas de integração em tempo real.', badges: ['Spark', 'Kafka'] },
  { _id: 'comp-pt-3', _type: 'competency', locale: 'pt', order: 3, icon: 'terminal', title: 'Backend Full Stack', description: 'Construindo APIs robustas e lógica server-side com foco em código limpo e performance.', badges: ['Go', 'Python'] },
  { _id: 'comp-pt-4', _type: 'competency', locale: 'pt', order: 4, icon: 'cloud', title: 'Cloud (AWS/Docker)', description: 'Implantando e gerenciando workloads containerizados em ambientes cloud-native.', badges: ['EKS', 'Terraform'] },

  // ─── EXPERIENCES EN ──────────────────────────────────────────────────────────
  {
    _id: 'exp-en-1', _type: 'experience', locale: 'en', order: 1,
    company: 'Thinkin', role: 'Senior Software Engineer', period: 'OCT 2023 - PRESENT', isCurrent: true,
    description: 'Leading technical direction and architecting data-oriented solutions. Implemented strategic automation workflows reducing operational costs by ',
    highlight: 'R$ 40k monthly.',
    badges: ['Leadership', 'Data Engineering'],
    techStack: ['Python', 'PostgreSQL', 'n8n', 'NestJS', 'React Native'],
    listItems: ['Advanced Python & PostgreSQL orchestration', 'Complex n8n automation pipelines', 'NestJS / Node.js Microservices', 'React & React Native Ecosystem'],
    websiteUrl: 'https://thinkin.com.br',
  },
  {
    _id: 'exp-en-2', _type: 'experience', locale: 'en', order: 2,
    company: 'Konvix Tecnologia', role: 'Full Stack Engineer', period: 'MAR 2022 - SEP 2023',
    description: 'Developed mission-critical web applications for government integrations and tax systems. Focused on high-availability and secure API communications.',
    techStack: ['Node.js', 'React', 'Gov API', 'TypeScript'],
    websiteUrl: 'https://www.konvix.com.br',
  },
  {
    _id: 'exp-en-3', _type: 'experience', locale: 'en', order: 3,
    company: 'Winover Contact Center', role: 'MIS Analyst', period: 'JUN 2019 - MAR 2022',
    description: 'Engineered robust data pipelines and automated scraping processes for MIS reporting. Built an internal HR management system from scratch using PHP and SQL Server.',
    techStack: ['SQL Server', 'Power BI', 'PHP', 'Scraping'],
  },
  {
    _id: 'exp-en-4', _type: 'experience', locale: 'en', order: 4,
    company: 'Suzano', role: 'Line Feeder / Mechanic', period: '2015 - 2019',
    description: 'Industrial operations and maintenance. This phase provided the foundation for structural thinking and logical problem-solving in complex physical environments.',
  },

  // ─── EXPERIENCES PT ──────────────────────────────────────────────────────────
  {
    _id: 'exp-pt-1', _type: 'experience', locale: 'pt', order: 1,
    company: 'Thinkin', role: 'Engenheiro de Software Sênior', period: 'OUT 2023 - PRESENTE', isCurrent: true,
    description: 'Liderando a direção técnica e arquitetando soluções orientadas a dados. Implementei automações estratégicas reduzindo custos operacionais em ',
    highlight: 'R$ 40k mensais.',
    badges: ['Liderança', 'Engenharia de Dados'],
    techStack: ['Python', 'PostgreSQL', 'n8n', 'NestJS', 'React Native'],
    listItems: ['Orquestração avançada Python & PostgreSQL', 'Pipelines de automação n8n complexos', 'Microsserviços NestJS / Node.js', 'Ecossistema React & React Native'],
    websiteUrl: 'https://thinkin.com.br',
  },
  {
    _id: 'exp-pt-2', _type: 'experience', locale: 'pt', order: 2,
    company: 'Konvix Tecnologia', role: 'Engenheiro Full Stack', period: 'MAR 2022 - SET 2023',
    description: 'Desenvolvi aplicações web mission-critical para integrações governamentais e sistemas tributários. Foco em alta disponibilidade e comunicações seguras via API.',
    techStack: ['Node.js', 'React', 'API Gov', 'TypeScript'],
    websiteUrl: 'https://www.konvix.com.br',
  },
  {
    _id: 'exp-pt-3', _type: 'experience', locale: 'pt', order: 3,
    company: 'Winover Contact Center', role: 'Analista MIS', period: 'JUN 2019 - MAR 2022',
    description: 'Desenvolvi pipelines de dados robustos e processos de scraping automatizados para relatórios MIS. Construí um sistema de gestão de RH interno do zero usando PHP e SQL Server.',
    techStack: ['SQL Server', 'Power BI', 'PHP', 'Scraping'],
  },
  {
    _id: 'exp-pt-4', _type: 'experience', locale: 'pt', order: 4,
    company: 'Suzano', role: 'Alimentador de Linha / Mecânico', period: '2015 - 2019',
    description: 'Operações e manutenção industrial. Esta fase forneceu a base para o pensamento estrutural e resolução lógica de problemas em ambientes físicos complexos.',
  },

  // ─── EDUCATION EN ────────────────────────────────────────────────────────────
  { _id: 'edu-en-1', _type: 'education', locale: 'en', order: 1, degree: 'Postgraduate: Cloud & AI DevOps', institution: 'Impacta Tecnologia', period: '2026 - 2027', isCurrent: true },
  { _id: 'edu-en-2', _type: 'education', locale: 'en', order: 2, degree: 'Technologist: IT Management', institution: 'Higher Education Institute', period: '2017 - 2019' },

  // ─── EDUCATION PT ────────────────────────────────────────────────────────────
  { _id: 'edu-pt-1', _type: 'education', locale: 'pt', order: 1, degree: 'Pós-Graduação: Cloud & AI DevOps', institution: 'Impacta Tecnologia', period: '2026 - 2027', isCurrent: true },
  { _id: 'edu-pt-2', _type: 'education', locale: 'pt', order: 2, degree: 'Tecnólogo: Gestão de TI', institution: 'Instituto de Ensino Superior', period: '2017 - 2019' },

  // ─── CERTIFICATIONS EN ───────────────────────────────────────────────────────
  { _id: 'cert-en-1', _type: 'certification', locale: 'en', order: 1, name: 'n8n Automation', level: 'Expert Level', icon: 'auto_fix_high' },
  { _id: 'cert-en-2', _type: 'certification', locale: 'en', order: 2, name: 'Adobe XD Design', level: 'UI/UX Foundational', icon: 'brush' },
  { _id: 'cert-en-3', _type: 'certification', locale: 'en', order: 3, name: 'ETL Mastery', level: 'Data Pipelines', icon: 'data_usage' },
  { _id: 'cert-en-4', _type: 'certification', locale: 'en', order: 4, name: 'React Native', level: 'Mobile Engineering', icon: 'smartphone' },

  // ─── CERTIFICATIONS PT ───────────────────────────────────────────────────────
  { _id: 'cert-pt-1', _type: 'certification', locale: 'pt', order: 1, name: 'Automação n8n', level: 'Nível Expert', icon: 'auto_fix_high' },
  { _id: 'cert-pt-2', _type: 'certification', locale: 'pt', order: 2, name: 'Design Adobe XD', level: 'Fundamentos UI/UX', icon: 'brush' },
  { _id: 'cert-pt-3', _type: 'certification', locale: 'pt', order: 3, name: 'Domínio de ETL', level: 'Pipelines de Dados', icon: 'data_usage' },
  { _id: 'cert-pt-4', _type: 'certification', locale: 'pt', order: 4, name: 'React Native', level: 'Engenharia Mobile', icon: 'smartphone' },

  // ─── PROJECTS EN ─────────────────────────────────────────────────────────────
  {
    _id: 'proj-en-1', _type: 'project', locale: 'en', order: 1, isFeatured: true, category: 'featured',
    title: 'Thinkin Custom Platform',
    slug: { _type: 'slug', current: 'thinkin-platform' },
    description: 'Engineered a mission-critical platform from the ground up to replace legacy enterprise software. This strategic architectural shift resulted in a ',
    highlight: 'R$ 40,000 annual saving',
    techStack: ['React Native', 'Node.js', 'AWS Cloud', 'PostgreSQL'],
    caseStudyLabel: 'Case Study Breakdown',
    projectUrl: 'https://thinkin.com.br',
  },
  {
    _id: 'proj-en-2', _type: 'project', locale: 'en', order: 2, category: 'architecture',
    title: 'Enterprise n8n Workflows', icon: 'hub',
    description: 'Architected complex automation ecosystems connecting legacy CRMs with modern cloud tools. Focused on error-handling and data consistency across 50+ unique business processes.',
    techStack: ['n8n', 'Webhooks', 'REST APIs'],
  },
  {
    _id: 'proj-en-3', _type: 'project', locale: 'en', order: 3, category: 'architecture',
    title: 'Scalable ETL Pipelines', icon: 'database',
    description: 'Designed robust data ingestion and transformation layers for real-time analytics. Optimized SQL queries and table structures for high-concurrency environments.',
    techStack: ['Python', 'SQL', 'Docker'],
  },
  {
    _id: 'proj-en-4', _type: 'project', locale: 'en', order: 4, category: 'architecture',
    title: 'Legacy-to-Cloud Migration', icon: 'cloud_sync',
    description: 'Led the migration of on-premise workloads to AWS, ensuring zero downtime and 40% reduction in infrastructure maintenance efforts.',
    techStack: ['AWS', 'IAM', 'Terraform'],
  },
  {
    _id: 'proj-en-5', _type: 'project', locale: 'en', order: 5, category: 'education',
    title: 'Intro to n8n Automation',
    description: 'A comprehensive guide for non-coders and engineers alike to master the art of visual workflow automation and system integration.',
  },
  {
    _id: 'proj-en-6', _type: 'project', locale: 'en', order: 6, category: 'education',
    title: 'React Native Fundamentals',
    description: 'Teaching the foundations of cross-platform mobile development with a focus on performant UI components and state management.',
  },
  {
    _id: 'proj-en-7', _type: 'project', locale: 'en', order: 7, category: 'education',
    title: 'ETL Foundations',
    description: 'Exploring the lifecycle of data: from messy raw inputs to clean, structured, and actionable insights using Python and SQL.',
  },
  {
    _id: 'proj-en-8', _type: 'project', locale: 'en', order: 8, category: 'personal',
    title: 'RPG 3D VTT', icon: 'sports_esports',
    description: 'Personal project — a 3D Virtual Tabletop for RPG sessions with friends. Built with Three.js, featuring turn-based combat, interactive grid, and 3D character models.',
    techStack: ['Next.js', 'Three.js', 'React', 'TypeScript'],
    projectUrl: 'https://rpg-3d.vercel.app',
    githubUrl: 'https://github.com/gabrielsilva',
    caseStudyLabel: 'Play now',
  },

  // ─── PROJECTS PT ─────────────────────────────────────────────────────────────
  {
    _id: 'proj-pt-1', _type: 'project', locale: 'pt', order: 1, isFeatured: true, category: 'featured',
    title: 'Plataforma Customizada Thinkin',
    slug: { _type: 'slug', current: 'plataforma-thinkin' },
    description: 'Desenvolvi do zero uma plataforma mission-critical para substituir software legado empresarial. Essa mudança arquitetural resultou em ',
    highlight: 'R$ 40.000 de economia anual',
    techStack: ['React Native', 'Node.js', 'AWS Cloud', 'PostgreSQL'],
    caseStudyLabel: 'Ver Case Completo',
    projectUrl: 'https://thinkin.com.br',
  },
  {
    _id: 'proj-pt-2', _type: 'project', locale: 'pt', order: 2, category: 'architecture',
    title: 'Workflows n8n Empresariais', icon: 'hub',
    description: 'Arquitetei ecossistemas de automação complexos conectando CRMs legados com ferramentas cloud modernas. Foco em tratamento de erros e consistência de dados em 50+ processos de negócio.',
    techStack: ['n8n', 'Webhooks', 'REST APIs'],
  },
  {
    _id: 'proj-pt-3', _type: 'project', locale: 'pt', order: 3, category: 'architecture',
    title: 'Pipelines ETL Escaláveis', icon: 'database',
    description: 'Projetei camadas robustas de ingestão e transformação de dados para analytics em tempo real. Otimizei queries SQL e estruturas de tabelas para ambientes de alta concorrência.',
    techStack: ['Python', 'SQL', 'Docker'],
  },
  {
    _id: 'proj-pt-4', _type: 'project', locale: 'pt', order: 4, category: 'architecture',
    title: 'Migração Legacy para Cloud', icon: 'cloud_sync',
    description: 'Liderei a migração de workloads on-premise para AWS, garantindo zero downtime e 40% de redução nos esforços de manutenção de infraestrutura.',
    techStack: ['AWS', 'IAM', 'Terraform'],
  },
  {
    _id: 'proj-pt-5', _type: 'project', locale: 'pt', order: 5, category: 'education',
    title: 'Introdução à Automação n8n',
    description: 'Um guia completo para não-coders e engenheiros dominarem a arte da automação visual de workflows e integração de sistemas.',
  },
  {
    _id: 'proj-pt-6', _type: 'project', locale: 'pt', order: 6, category: 'education',
    title: 'Fundamentos de React Native',
    description: 'Ensinando os fundamentos do desenvolvimento mobile cross-platform com foco em componentes UI performáticos e gerenciamento de estado.',
  },
  {
    _id: 'proj-pt-7', _type: 'project', locale: 'pt', order: 7, category: 'education',
    title: 'Fundamentos de ETL',
    description: 'Explorando o ciclo de vida dos dados: de entradas brutas e bagunçadas a insights limpos, estruturados e acionáveis usando Python e SQL.',
  },
  {
    _id: 'proj-pt-8', _type: 'project', locale: 'pt', order: 8, category: 'personal',
    title: 'RPG 3D VTT', icon: 'sports_esports',
    description: 'Projeto pessoal — um Virtual Tabletop 3D para sessões de RPG com amigos. Construído com Three.js, com combate por turnos, grid interativo e modelos 3D de personagens.',
    techStack: ['Next.js', 'Three.js', 'React', 'TypeScript'],
    projectUrl: 'https://rpg-3d.vercel.app',
    caseStudyLabel: 'Jogar agora',
  },

  // ─── BLOG POSTS PT ───────────────────────────────────────────────────────────
  {
    _id: 'blog-pt-1', _type: 'blogPost', locale: 'pt', isFeatured: true,
    title: 'O Futuro da Automação de Workflows com n8n e IA Generativa',
    slug: { _type: 'slug', current: 'n8n-ia-generativa' },
    category: 'Automation', publishedAt: '2024-01-28', readTimeMinutes: 12,
    summary: 'Como estamos utilizando n8n para orquestrar fluxos complexos integrando LLMs, APIs proprietárias e sistemas legados para escalar operações de forma inteligente e sem fricção.',
  },
  {
    _id: 'blog-pt-2', _type: 'blogPost', locale: 'pt',
    title: 'Arquitetura de Microsserviços Escaláveis',
    slug: { _type: 'slug', current: 'microsservicos-escalaveis' },
    category: 'Architecture', publishedAt: '2024-01-24', readTimeMinutes: 8,
    summary: 'Padrões essenciais para construir sistemas que suportam milhões de requisições por segundo.',
  },
  {
    _id: 'blog-pt-3', _type: 'blogPost', locale: 'pt',
    title: 'Engenharia de Dados na Nuvem: AWS vs GCP',
    slug: { _type: 'slug', current: 'aws-vs-gcp-dados' },
    category: 'Cloud', publishedAt: '2024-01-18', readTimeMinutes: 15,
    summary: 'Uma análise técnica profunda sobre os melhores serviços gerenciados para Big Data em 2024.',
  },
  {
    _id: 'blog-pt-4', _type: 'blogPost', locale: 'pt',
    title: 'Estratégias de Testes Automatizados em CI/CD',
    slug: { _type: 'slug', current: 'testes-cicd' },
    category: 'Automation', publishedAt: '2024-01-12', readTimeMinutes: 10,
    summary: 'Como reduzir o tempo de deploy de horas para minutos sem comprometer a qualidade do software.',
  },

  // ─── BLOG POSTS EN ───────────────────────────────────────────────────────────
  {
    _id: 'blog-en-1', _type: 'blogPost', locale: 'en', isFeatured: true,
    title: 'The Future of Workflow Automation with n8n and Generative AI',
    slug: { _type: 'slug', current: 'n8n-generative-ai' },
    category: 'Automation', publishedAt: '2024-01-28', readTimeMinutes: 12,
    summary: 'How we are using n8n to orchestrate complex flows integrating LLMs, proprietary APIs and legacy systems to scale operations intelligently and without friction.',
  },
  {
    _id: 'blog-en-2', _type: 'blogPost', locale: 'en',
    title: 'Scalable Microservices Architecture',
    slug: { _type: 'slug', current: 'scalable-microservices' },
    category: 'Architecture', publishedAt: '2024-01-24', readTimeMinutes: 8,
    summary: 'Essential patterns for building systems that handle millions of requests per second.',
  },
  {
    _id: 'blog-en-3', _type: 'blogPost', locale: 'en',
    title: 'Cloud Data Engineering: AWS vs GCP',
    slug: { _type: 'slug', current: 'aws-vs-gcp-data' },
    category: 'Cloud', publishedAt: '2024-01-18', readTimeMinutes: 15,
    summary: 'A deep technical analysis of the best managed services for Big Data in 2024.',
  },
  {
    _id: 'blog-en-4', _type: 'blogPost', locale: 'en',
    title: 'Automated Testing Strategies for CI/CD',
    slug: { _type: 'slug', current: 'automated-testing-cicd' },
    category: 'Automation', publishedAt: '2024-01-12', readTimeMinutes: 10,
    summary: 'How to reduce deploy time from hours to minutes without compromising software quality.',
  },
];

async function populate() {
  console.log(`\n🚀 Populando Sanity com ${docs.length} documentos...\n`);

  const mutations = docs.map((doc) => ({ createOrReplace: doc }));

  // Envia em lotes de 20
  const batchSize = 20;
  for (let i = 0; i < mutations.length; i += batchSize) {
    const batch = mutations.slice(i, i + batchSize);
    try {
      await client.mutate(batch);
      console.log(`✅ Lote ${Math.floor(i / batchSize) + 1}: ${batch.length} documentos criados`);
    } catch (err) {
      console.error(`❌ Erro no lote ${Math.floor(i / batchSize) + 1}:`, err);
    }
  }

  console.log('\n✅ Sanity populado com sucesso!');
  console.log('📝 Acesse: http://localhost:3000/studio');
}

populate().catch(console.error);
