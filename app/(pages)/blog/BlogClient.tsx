'use client';

import { useState } from 'react';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Input } from '@/components/Input';
import { Section } from '@/components/Section';

interface BlogClientProps {
  categories: string[];
  allLabel: string;
}

export function BlogClient({ categories, allLabel }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Section.Root className="mb-16 !py-0">
      <Card.Root className="flex flex-col md:flex-row gap-6 items-center justify-between !p-4" hoverEffect={false}>
        <div className="relative w-full md:w-96 group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-[20%] z-10 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
          <Input className="!bg-surface-container-low !border-none !rounded-xl !pl-12 !pr-4 transition-all" placeholder="Search..." type="text" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge
            variant={activeCategory === null ? 'primary' : 'outline'}
            className="hover:scale-105 filter-chip cursor-pointer"
            onClick={() => setActiveCategory(null)}
          >
            {allLabel}
          </Badge>
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={activeCategory === cat ? 'primary' : 'outline'}
              className="hover:text-primary hover:border-primary/30 filter-chip hover:scale-105 cursor-pointer"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </Card.Root>
    </Section.Root>
  );
}
