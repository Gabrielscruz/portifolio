import { defineField, defineType } from 'sanity';

export const competency = defineType({
  name: 'competency',
  title: 'Competências / Competencies',
  type: 'document',
  icon: () => '⚡',
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
    defineField({ name: 'icon', title: 'Ícone (Material Symbols)', type: 'string', description: 'Ex: architecture, database, terminal, cloud', validation: (R) => R.required() }),
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'description', title: 'Descrição', type: 'text', rows: 2 }),
    defineField({ name: 'badges', title: 'Badges / Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Ordem de Exibição', type: 'number' }),
  ],
  orderings: [{ title: 'Ordem', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', locale: 'locale' },
    prepare: ({ title, locale }) => ({
      title: `${locale === 'pt' ? '🇧🇷' : '🇺🇸'} ${title}`,
    }),
  },
});
