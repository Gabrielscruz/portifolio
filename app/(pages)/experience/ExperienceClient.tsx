'use client';

import { useEffect, useRef } from 'react';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { List, ListItem } from '@/components/List';
import { CtaCard } from '@/components/CtaCard';

interface ExperienceItem {
  _id: string; company: string; role: string; period: string;
  isCurrent?: boolean; description?: string; highlight?: string;
  badges?: string[]; techStack?: string[]; listItems?: string[];
}
interface EducationItem { _id: string; degree: string; institution: string; period?: string; isCurrent?: boolean; }
interface CertificationItem { _id: string; name: string; level?: string; icon?: string; }

interface I18nStrings {
  experienceTitle: string; experienceSubtitle: string;
  educationLabel: string; certLabel: string;
  ctaTitle: string; ctaDesc: string; ctaPrimary: string; ctaSecondary: string;
}

interface ExperienceClientProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  locale: 'en' | 'pt';
  i18n: I18nStrings;
}

export function ExperienceClient({ experiences, education, certifications, locale, i18n }: ExperienceClientProps) {
  const atmosphericRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (atmosphericRef.current) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        atmosphericRef.current.style.transform = `translate(${moveX}px, ${moveY}px) translateY(-50%) translate3d(25%, 0, 0)`;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div ref={atmosphericRef} className="fixed top-1/2 right-0 w-1/2 h-screen bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none z-0" />

      {/* Hero */}
      <Section.Root className="pt-8 md:pt-12">
        <div className="max-w-3xl">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
            {i18n.experienceTitle.split('&').map((part, i) => (
              <span key={i}>{i > 0 && <span className="text-primary"> &amp;</span>}{part}</span>
            ))}
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">{i18n.experienceSubtitle}</p>
        </div>
      </Section.Root>

      {/* Timeline */}
      <Section.Root className="mb-section-gap !py-0">
        <div className="absolute left-margin-mobile md:left-gutter top-0 bottom-0 w-[2px] timeline-line hidden md:block" />
        <div className="space-y-24">
          {experiences.map((exp) => (
            <div key={exp._id} className="relative md:pl-20">
              <div className={`absolute left-[-9px] top-0 w-5 h-5 rounded-full ring-4 ring-background hidden md:block ${exp.isCurrent ? 'bg-primary animate-pulse' : 'bg-outline-variant'}`} />
              <Card.Root className={`!p-8 rounded-2xl ${exp.isCurrent ? 'animate-subtle-glow' : ''}`} hoverEffect={false}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div>
                    <span className={`font-label-sm text-label-sm uppercase tracking-widest ${exp.isCurrent ? 'text-primary' : 'text-on-surface-variant'}`}>{exp.period}</span>
                    <Card.Title className="!mb-0 mt-1">{exp.role} @ {exp.company}</Card.Title>
                  </div>
                  {exp.badges && exp.badges.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {exp.badges.map((b) => <Badge key={b} variant="outline" className="bg-surface-variant/50">{b}</Badge>)}
                    </div>
                  )}
                </div>
                <Card.Description className="!mb-6">
                  {exp.description}
                  {exp.highlight && <strong className="text-primary"> {exp.highlight}</strong>}
                </Card.Description>
                {exp.listItems && exp.listItems.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <List className="space-y-3">
                      {exp.listItems.slice(0, Math.ceil(exp.listItems.length / 2)).map((item) => <ListItem key={item}>{item}</ListItem>)}
                    </List>
                    <List className="space-y-3">
                      {exp.listItems.slice(Math.ceil(exp.listItems.length / 2)).map((item) => <ListItem key={item}>{item}</ListItem>)}
                    </List>
                  </div>
                )}
                {exp.techStack && exp.techStack.length > 0 && (
                  <Card.Footer>
                    {exp.techStack.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
                  </Card.Footer>
                )}
              </Card.Root>
            </div>
          ))}
        </div>
      </Section.Root>

      {/* Education & Certifications */}
      <Section.Root className="mb-section-gap grid grid-cols-1 lg:grid-cols-2 gap-12 !py-0">
        <div>
          <Section.Title className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">school</span> {i18n.educationLabel}
          </Section.Title>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card.Root key={edu._id} className={`!p-6 rounded-2xl border-l-4 ${edu.isCurrent ? 'border-l-primary' : 'border-l-outline-variant'}`} hoverEffect={false}>
                <span className={`font-label-sm text-label-sm uppercase tracking-widest ${edu.isCurrent ? 'text-primary' : 'text-on-surface-variant'}`}>{edu.period}</span>
                <h4 className="font-headline-sm text-headline-sm mt-1">{edu.degree}</h4>
                <p className="text-on-surface-variant font-label-md">{edu.institution}</p>
              </Card.Root>
            ))}
          </div>
        </div>
        <div>
          <Section.Title className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">verified</span> {i18n.certLabel}
          </Section.Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <Card.Root key={cert._id} className="!p-5 rounded-xl hover:bg-surface-container-highest flex-row items-center gap-4" hoverEffect={false}>
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">{cert.icon ?? 'verified'}</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface">{cert.name}</p>
                  <span className="text-[10px] text-on-surface-variant uppercase">{cert.level}</span>
                </div>
              </Card.Root>
            ))}
          </div>
        </div>
      </Section.Root>

      {/* CTA */}
      <Section.Root className="mb-section-gap !py-0">
        <CtaCard
          title={i18n.ctaTitle}
          description={i18n.ctaDesc}
          primaryActionText={i18n.ctaPrimary}
          secondaryActionText={i18n.ctaSecondary}
          className="!bg-surface-container border-outline-variant/10 !p-12"
        />
      </Section.Root>
    </>
  );
}
