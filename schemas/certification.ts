import { defineField, defineType } from 'sanity';

export const certification = defineType({
  name: 'certification',
  title: 'Certificações / Certifications',
  type: 'document',
  icon: () => '🏆',
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
    defineField({ name: 'name', title: 'Nome da Certificação', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'level', title: 'Nível', type: 'string' }),
    defineField({ name: 'icon', title: 'Ícone (Material Symbols)', type: 'string', description: 'Ex: auto_fix_high, brush, data_usage' }),
    defineField({ name: 'order', title: 'Ordem de Exibição', type: 'number' }),
  ],
  orderings: [{ title: 'Ordem', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'level', locale: 'locale' },
    prepare: ({ title, subtitle, locale }) => ({
      title: `${locale === 'pt' ? '🇧🇷' : '🇺🇸'} ${title}`,
      subtitle,
    }),
  },
});
