import { client } from './sanity';

type Locale = 'en' | 'pt';

// ─── Site Config (único, sem locale) ──────────────────────────────────────────
export async function getSiteConfig() {
  return client.fetch(
    `*[_type == "siteConfig"][0]{ name, fullName, role, email, github, linkedin, cvUrl, avatar }`,
    {},
    { next: { revalidate: 3600 } }
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
export async function getHero(locale: Locale = 'pt') {
  return client.fetch(
    `*[_type == "hero" && locale == $locale][0]{
      tagline, title, subtitle, description,
      yearsExperience, automationFocus, quote,
      primaryCta, secondaryCta,
      builtForScaleTitle, builtForScaleDescription, builtForScaleItems
    }`,
    { locale },
    { next: { revalidate: 3600 } }
  );
}

// ─── Competencies ──────────────────────────────────────────────────────────────
export async function getCompetencies(locale: Locale = 'pt') {
  return client.fetch(
    `*[_type == "competency" && locale == $locale] | order(order asc){
      _id, icon, title, description, badges
    }`,
    { locale },
    { next: { revalidate: 3600 } }
  );
}

// ─── Experiences ───────────────────────────────────────────────────────────────
export async function getExperiences(locale: Locale = 'pt') {
  return client.fetch(
    `*[_type == "experience" && locale == $locale] | order(order asc){
      _id, company, role, period, isCurrent,
      description, highlight, badges, techStack, listItems, websiteUrl
    }`,
    { locale },
    { next: { revalidate: 3600 } }
  );
}

// ─── Education ─────────────────────────────────────────────────────────────────
export async function getEducation(locale: Locale = 'pt') {
  return client.fetch(
    `*[_type == "education" && locale == $locale] | order(order asc){
      _id, degree, institution, period, isCurrent
    }`,
    { locale },
    { next: { revalidate: 3600 } }
  );
}

// ─── Certifications ────────────────────────────────────────────────────────────
export async function getCertifications(locale: Locale = 'pt') {
  return client.fetch(
    `*[_type == "certification" && locale == $locale] | order(order asc){
      _id, name, level, icon
    }`,
    { locale },
    { next: { revalidate: 3600 } }
  );
}

// ─── Projects ──────────────────────────────────────────────────────────────────
export async function getProjects(locale: Locale = 'pt') {
  return client.fetch(
    `*[_type == "project" && locale == $locale] | order(order asc){
      _id, title, "slug": slug.current, category, isFeatured,
      description, highlight, image, techStack, icon,
      projectUrl, githubUrl, caseStudyLabel
    }`,
    { locale },
    { next: { revalidate: 3600 } }
  );
}

// ─── Blog Posts ────────────────────────────────────────────────────────────────
export async function getBlogPosts(locale: Locale = 'pt') {
  return client.fetch(
    `*[_type == "blogPost" && locale == $locale] | order(publishedAt desc){
      _id, title, "slug": slug.current, isFeatured,
      category, summary, coverImage, publishedAt, readTimeMinutes, externalUrl
    }`,
    { locale },
    { next: { revalidate: 60 } }
  );
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, locale,
      category, summary, coverImage, publishedAt, readTimeMinutes, body, externalUrl
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}
