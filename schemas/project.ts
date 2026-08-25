import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Projetos / Projects',
  type: 'document',
  icon: () => '🚀',
  fields: [
    defineField({
      name: 'locale',
      title: 'Idioma / Language',
      type: 'string',
      options: {
        list: [
          { title: '🇧🇷 Português', value: 'pt' },
          { title: '🇺🇸 English', value: 'en' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
      initialValue: 'en',
    }),
    defineField({ name: 'title', title: 'Título do Projeto', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Featured', value: 'featured' },
          { title: 'Software Architecture & Data', value: 'architecture' },
          { title: 'Education & Teaching', value: 'education' },
          { title: 'Personal', value: 'personal' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'isFeatured', title: 'Projeto em Destaque?', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Descrição', type: 'text', rows: 4 }),
    defineField({ name: 'highlight', title: 'Resultado / Destaque (negrito)', type: 'string' }),
    defineField({ name: 'image', title: 'Imagem', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'techStack', title: 'Tecnologias', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'icon', title: 'Ícone (Material Symbols)', type: 'string' }),
    defineField({ name: 'projectUrl', title: 'Link do Projeto', type: 'url' }),
    defineField({ name: 'githubUrl', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'caseStudyLabel', title: 'Label do Link Principal', type: 'string' }),
    defineField({ name: 'order', title: 'Ordem de Exibição', type: 'number' }),
  ],
  orderings: [{ title: 'Ordem', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image', locale: 'locale' },
    prepare: ({ title, subtitle, media, locale }) => ({
      title: `${locale === 'pt' ? '🇧🇷' : '🇺🇸'} ${title}`,
      subtitle,
      media,
    }),
  },
});
