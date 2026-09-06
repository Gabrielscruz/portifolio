'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';

interface LocaleSwitcherProps {
  initialLocale?: 'en' | 'pt';
}

export function LocaleSwitcher({ initialLocale }: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Determina o idioma atual considerando searchParams > initialLocale > detecção do navegador
  const getDetectedLocale = (): 'en' | 'pt' => {
    const langParam = searchParams.get('lang');
    if (langParam === 'pt' || langParam === 'en') return langParam;

    if (initialLocale === 'pt' || initialLocale === 'en') return initialLocale;

    if (typeof window !== 'undefined') {
      const match = document.cookie.match(/(?:^|;\s*)locale=([^;]*)/);
      if (match && (match[1] === 'pt' || match[1] === 'en')) {
        return match[1] as 'en' | 'pt';
      }

      const navLang = (navigator.language || '').toLowerCase();
      if (navLang.startsWith('pt')) return 'pt';

      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
      if (tz.includes('sao_paulo') || tz.includes('brazil') || tz.includes('recife') || tz.includes('manaus')) {
        return 'pt';
      }
    }

    return 'pt';
  };

  const currentLocale = getDetectedLocale();

  const switchLocale = useCallback(
    (locale: 'en' | 'pt') => {
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
