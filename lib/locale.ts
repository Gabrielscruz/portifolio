import { cookies, headers } from 'next/headers';

export type Locale = 'en' | 'pt';

// Países lusófonos onde o português é idioma oficial ou predominante
const LUSOPHONE_COUNTRIES = new Set([
  'BR', // Brasil
  'PT', // Portugal
  'AO', // Angola
  'MZ', // Moçambique
  'CV', // Cabo Verde
  'GW', // Guiné-Bissau
  'ST', // São Tomé e Príncipe
  'TL', // Timor-Leste
  'MO', // Macau
]);

// Fusos horários característicos do Brasil e de Portugal
const LUSOPHONE_TIMEZONES = [
  'sao_paulo',
  'brazil',
  'belem',
  'fortaleza',
  'recife',
  'manaus',
  'cuiaba',
  'porto_velho',
  'rio_branco',
  'boa_vista',
  'macapa',
  'maceio',
  'salvador',
  'araguaina',
  'noronha',
  'campo_grande',
  'santarem',
  'lisbon',
  'madeira',
  'azores',
  'luanda',
  'maputo',
];

/**
 * Resolve o idioma (locale) com base na localização de acesso e preferências:
 * 
 * 1. Prioridade Máxima: Query param explícito (?lang=pt ou ?lang=en)
 * 2. Cookie de escolha prévia do usuário (cookie 'locale')
 * 3. Localização geográfica do IP de acesso (headers: x-vercel-ip-country, cf-ipcountry, etc.)
 *    -> Se país for Brasil, Portugal ou lusófono => 'pt'
 * 4. Fuso horário de acesso (headers: x-vercel-ip-timezone, etc.)
 *    -> Se fuso horário for brasileiro/português => 'pt'
 * 5. Cabeçalho Accept-Language enviado pelo navegador
 *    -> Se incluir português ('pt', 'pt-BR', etc.) => 'pt'
 * 6. Caso o acesso seja brasileiro/padrão => Começa em 'pt'
 */
export async function getResolvedLocale(explicitLang?: string | null): Promise<Locale> {
  // 1. Query parameter explícito na URL
  if (explicitLang === 'pt' || explicitLang === 'en') {
    return explicitLang;
  }

  // 2. Cookie salvo previamente pelo usuário ao alternar o seletor de idioma
  try {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('locale')?.value;
    if (cookieLocale === 'pt' || cookieLocale === 'en') {
      return cookieLocale;
    }
  } catch {
    // Contextos onde cookies() não está disponível
  }

  // 3. Detecção de Localização de Acesso pelos Cabeçalhos HTTP
  try {
    const headerList = await headers();

    // Headers de país emitidos por CDNs / Proxies
    const country = (
      headerList.get('x-vercel-ip-country') ||
      headerList.get('cf-ipcountry') ||
      headerList.get('x-country-code') ||
      headerList.get('x-country') ||
      headerList.get('x-appengine-country') ||
      headerList.get('x-client-geo-country') ||
      headerList.get('geoip-country-code') ||
      headerList.get('x-forwarded-country') ||
      ''
    ).toUpperCase().trim();

    if (country && LUSOPHONE_COUNTRIES.has(country)) {
      return 'pt';
    }

    // Header de Fuso Horário de acesso
    const timezone = (
      headerList.get('x-vercel-ip-timezone') ||
      headerList.get('x-timezone') ||
      ''
    ).toLowerCase().trim();

    if (timezone && LUSOPHONE_TIMEZONES.some((tz) => timezone.includes(tz))) {
      return 'pt';
    }

    // 4. Cabeçalho Accept-Language
    const acceptLang = (headerList.get('accept-language') || '').toLowerCase();
    if (acceptLang) {
      const parts = acceptLang.split(',').map((p) => {
        const [lang, qPart] = p.trim().split(';');
        const q = qPart ? parseFloat(qPart.replace('q=', '')) : 1.0;
        return { lang: lang.trim(), q: isNaN(q) ? 1.0 : q };
      });

      const ptItem = parts.find((p) => p.lang.startsWith('pt'));
      const enItem = parts.find((p) => p.lang.startsWith('en'));

      if (ptItem) {
        if (!enItem || ptItem.q >= enItem.q) {
          return 'pt';
        }
      }

      // Se usuário está em um país explicitamente não lusófono e navegador não tem 'pt':
      if (country && !LUSOPHONE_COUNTRIES.has(country) && enItem && !ptItem) {
        return 'en';
      }
    }
  } catch {
    // Fallback gracioso
  }

  // Padrão: Começar em Português conforme solicitado
  return 'pt';
}
