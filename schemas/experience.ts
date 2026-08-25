import { defineField, defineType } from 'sanity';

export const experience = defineType({
  name: 'experience',
  title: 'Experiências / Experiences',
  type: 'document',
  icon: () => '💼',
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
    defineField({ name: 'company', title: 'Empresa', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'role', title: 'Cargo', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'period', title: 'Período', type: 'string', description: 'Ex: OUT 2023 - PRESENTE', validation: (R) => R.required() }),
    defineField({ name: 'isCurrent', title: 'Emprego Atual?', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Descrição Principal', type: 'text', rows: 3 }),
    defineField({ name: 'highlight', title: 'Destaque (negrito colorido)', type: 'string' }),
    defineField({ name: 'badges', title: 'Badges de Tipo', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'techStack', title: 'Stack / Tecnologias', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'listItems', title: 'Lista de Atividades', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Ordem (1 = mais recente)', type: 'number', validation: (R) => R.required() }),
    defineField({ name: 'websiteUrl', title: 'Site da Empresa', type: 'url' }),
  ],
  orderings: [{ title: 'Mais Recente', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'role', subtitle: 'company', isCurrent: 'isCurrent', locale: 'locale' },
    prepare: ({ title, subtitle, isCurrent, locale }) => ({
      title: `${isCurrent ? '🟢 ' : ''}${locale === 'pt' ? '🇧🇷' : '🇺🇸'} ${title}`,
      subtitle,
    }),
  },
});
