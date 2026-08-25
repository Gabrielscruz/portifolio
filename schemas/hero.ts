import { defineField, defineType } from 'sanity';

export const hero = defineType({
  name: 'hero',
  title: 'Hero / Apresentação',
  type: 'document',
  icon: () => '🏠',
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
    defineField({ name: 'tagline', title: 'Tagline (acima do título)', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'title', title: 'Título Principal', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'subtitle', title: 'Subtítulo', type: 'string' }),
    defineField({ name: 'description', title: 'Descrição', type: 'text', rows: 4 }),
    defineField({ name: 'yearsExperience', title: 'Anos de Experiência', type: 'number', initialValue: 6 }),
    defineField({ name: 'automationFocus', title: 'Automation Focus %', type: 'number', initialValue: 100 }),
    defineField({ name: 'quote', title: 'Citação Filosófica', type: 'text', rows: 2 }),
    defineField({ name: 'primaryCta', title: 'Botão Principal (texto)', type: 'string' }),
    defineField({ name: 'secondaryCta', title: 'Botão Secundário (texto)', type: 'string' }),
    defineField({ name: 'builtForScaleTitle', title: '"Built for Scale" — Título', type: 'string' }),
    defineField({ name: 'builtForScaleDescription', title: '"Built for Scale" — Descrição', type: 'text', rows: 3 }),
    defineField({ name: 'builtForScaleItems', title: '"Built for Scale" — Lista', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: {
    select: { title: 'title', locale: 'locale' },
    prepare: ({ title, locale }) => ({
      title: `${locale === 'pt' ? '🇧🇷' : '🇺🇸'} ${title}`,
    }),
  },
});
