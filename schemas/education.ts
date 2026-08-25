import { defineField, defineType } from 'sanity';

export const education = defineType({
  name: 'education',
  title: 'Educação / Education',
  type: 'document',
  icon: () => '🎓',
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
    defineField({ name: 'degree', title: 'Grau / Curso', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'institution', title: 'Instituição', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'period', title: 'Período', type: 'string' }),
    defineField({ name: 'isCurrent', title: 'Em Andamento?', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Ordem (1 = mais recente)', type: 'number' }),
  ],
  orderings: [{ title: 'Mais Recente', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'degree', subtitle: 'institution', locale: 'locale' },
    prepare: ({ title, subtitle, locale }) => ({
      title: `${locale === 'pt' ? '🇧🇷' : '🇺🇸'} ${title}`,
      subtitle,
    }),
  },
});
