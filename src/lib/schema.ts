/** JSON-LD builders (SEO master sheet §6). Passed to Base via the `schema` prop. */
import { SITE } from './site';

export interface Crumb {
  label: string;
  href?: string;
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: new URL(item.href, SITE.url).href } : {}),
    })),
  };
}

export interface Faq {
  q: string;
  a: string;
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; serviceType?: string }) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: new URL(opts.path, SITE.url).href,
    serviceType: opts.serviceType ?? opts.name,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    areaServed: ['Sydney', 'Northern Beaches'],
  };
}
