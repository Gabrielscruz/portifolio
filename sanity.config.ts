import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemas } from './schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export default defineConfig({
  name: 'portfolio-studio',
  title: 'Portfolio CMS',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Conteúdo')
          .items([
            S.listItem()
              .title('🌐 Configuração Global')
              .child(S.document().schemaType('siteConfig').documentId('siteConfig')),
            S.listItem()
              .title('🏠 Hero / Apresentação')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.divider(),
            S.documentTypeListItem('competency').title('⚡ Competências'),
            S.documentTypeListItem('experience').title('💼 Experiências'),
            S.documentTypeListItem('education').title('🎓 Educação'),
            S.documentTypeListItem('certification').title('🏆 Certificações'),
            S.divider(),
            S.documentTypeListItem('project').title('🚀 Projetos'),
            S.documentTypeListItem('blogPost').title('📝 Blog Posts'),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemas },
});
