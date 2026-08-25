import { defineField, defineType } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  icon: () => '📝',
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
      initialValue: 'pt',
    }),
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'isFeatured', title: 'Post em Destaque?', type: 'boolean', initialValue: false }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Architecture', value: 'Architecture' },
          { title: 'Data Engineering', value: 'Data Engineering' },
          { title: 'Automation', value: 'Automation' },
          { title: 'Cloud', value: 'Cloud' },
        ],
      },
    }),
    defineField({ name: 'summary', title: 'Resumo / Descrição', type: 'text', rows: 3 }),
    defineField({ name: 'coverImage', title: 'Imagem de Capa', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Data de Publicação', type: 'date' }),
    defineField({ name: 'readTimeMinutes', title: 'Tempo de Leitura (min)', type: 'number' }),
    defineField({
      name: 'body',
      title: 'Conteúdo do Artigo',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({ name: 'externalUrl', title: 'Link Externo', type: 'url' }),
  ],
  orderings: [{ title: 'Mais Recente', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage', locale: 'locale' },
    prepare: ({ title, subtitle, media, locale }) => ({
      title: `${locale === 'pt' ? '🇧🇷' : '🇺🇸'} ${title}`,
      subtitle,
      media,
    }),
  },
});
