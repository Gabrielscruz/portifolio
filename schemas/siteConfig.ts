import { defineField, defineType } from 'sanity';

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Configuração Global / Global Config',
  type: 'document',
  icon: () => '🌐',
  fields: [
    defineField({
      name: 'name',
      title: 'Seu Nome / Your Name',
      type: 'string',
      initialValue: 'Gabriel',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'fullName',
      title: 'Nome Completo / Full Name',
      type: 'string',
      initialValue: 'Gabriel Silva',
    }),
    defineField({
      name: 'role',
      title: 'Cargo / Title',
      type: 'string',
      initialValue: 'Software Architect',
    }),
    defineField({
      name: 'email',
      title: 'E-mail de Contato',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'cvUrl',
      title: 'Link do CV (PDF)',
      type: 'url',
    }),
    defineField({
      name: 'avatar',
      title: 'Foto de Perfil',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'fullName', subtitle: 'role' },
  },
});
