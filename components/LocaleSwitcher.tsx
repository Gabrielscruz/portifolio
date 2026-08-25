'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const currentLocale = searchParams.get('lang') ?? 'en';

  const switchLocale = useCallback(
    (locale: string) => {
      // Salva no cookie (1 ano)
      document.cookie = `locale=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;

      const params = new URLSearchParams(searchParams.toString());
      params.set('lang', locale);
      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`);
      });
    },
    [pathname, router, searchParams]
  );

  return (
    <div className="flex items-center gap-1 bg-surface-container-high rounded-full p-1 border border-outline-variant/20">
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
          currentLocale === 'en'
            ? 'bg-primary text-on-primary shadow-md'
            : 'text-on-surface-variant hover:text-on-surface'
        }`}
        aria-label="Switch to English"
      >
        🇺🇸 EN
      </button>
      <button
        onClick={() => switchLocale('pt')}
        disabled={isPending}
        className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
          currentLocale === 'pt'
            ? 'bg-primary text-on-primary shadow-md'
            : 'text-on-surface-variant hover:text-on-surface'
        }`}
        aria-label="Mudar para Português"
      >
        🇧🇷 PT
      </button>
    </div>
  );
}
