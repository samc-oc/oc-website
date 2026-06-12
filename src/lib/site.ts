/**
 * Site-wide constants — single source of truth for NAP, nav and partner data.
 * NAP must stay identical across footer, Contact page, schema and GBP.
 */

export const SITE = {
  name: 'Online Consulting',
  url: 'https://onlineconsulting.com.au',
  phone: '+61 2 8459 7882',
  phoneHref: 'tel:+61284597882',
  // Email is assembled client-side for anti-scrape protection (see ObfuscatedEmail.astro)
  emailUser: 'info',
  emailDomain: 'onlineconsulting.com.au',
  locality: 'Allambie Heights',
  region: 'NSW',
  postcode: '2100',
  country: 'AU',
  // TODO [PLACEHOLDER]: confirm whether to publish street address or suburb only (Contact deck)
  streetAddress: '',
  // TODO [PLACEHOLDER]: ABN to be confirmed (home page footer deck)
  abn: '',
  geo: { lat: -33.7766, lng: 151.2493 }, // Allambie Heights NSW
  social: {
    linkedin: 'https://www.linkedin.com/company/2272394',
    facebook: 'https://www.facebook.com/OnlineConsulting',
  },
  googlePartnerUrl: 'https://www.google.com/partners/agency?id=7046077996',
  foundingYear: 2008,
} as const;

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

/** Header navigation. NOTE: /service/va-recruitment-services/ stays live but is
 *  deliberately absent from all navigation (SEO master sheet §3). */
export const NAV: NavItem[] = [
  {
    label: 'Managed IT Services',
    href: '/managed-it-services/',
    children: [
      { label: 'Managed IT Services overview', href: '/managed-it-services/' },
      { label: 'IT Support & Helpdesk', href: '/managed-it-services/it-support/' },
      { label: 'Cybersecurity', href: '/managed-it-services/cybersecurity/' },
      { label: 'Cloud Services', href: '/managed-it-services/cloud-services/' },
      { label: 'Networking & Infrastructure', href: '/managed-it-services/networking/' },
      { label: 'Computer Repairs', href: '/managed-it-services/computer-repairs/' },
      { label: 'IT Support Northern Beaches', href: '/it-support-northern-beaches/' },
    ],
  },
  {
    label: 'Digital Marketing',
    href: '/digital-marketing/',
    children: [
      { label: 'Digital Marketing overview', href: '/digital-marketing/' },
      { label: 'SEO', href: '/digital-marketing/seo/' },
      { label: 'Google Ads', href: '/digital-marketing/google-ads/' },
      { label: 'Social Media Marketing', href: '/digital-marketing/social-media/' },
      { label: 'Content & Copywriting', href: '/digital-marketing/content-copywriting/' },
    ],
  },
  {
    label: 'Web Development',
    href: '/web-development/',
    children: [
      { label: 'Web Development overview', href: '/web-development/' },
      { label: 'eCommerce', href: '/web-development/ecommerce/' },
      { label: 'Web Hosting & Domains', href: '/web-development/web-hosting/' },
    ],
  },
  { label: 'Why One Partner', href: '/why-one-partner/' },
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About us', href: '/about/' },
      { label: 'Our People', href: '/people/' },
      { label: 'Our Work', href: '/work/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: 'Managed IT Services',
    links: [
      { label: 'IT Support & Helpdesk', href: '/managed-it-services/it-support/' },
      { label: 'Cybersecurity', href: '/managed-it-services/cybersecurity/' },
      { label: 'Cloud Services', href: '/managed-it-services/cloud-services/' },
      { label: 'Networking & Infrastructure', href: '/managed-it-services/networking/' },
      { label: 'Computer Repairs', href: '/managed-it-services/computer-repairs/' },
    ],
  },
  {
    heading: 'Digital & Web',
    links: [
      { label: 'SEO', href: '/digital-marketing/seo/' },
      { label: 'Google Ads', href: '/digital-marketing/google-ads/' },
      { label: 'Social Media Marketing', href: '/digital-marketing/social-media/' },
      { label: 'Content & Copywriting', href: '/digital-marketing/content-copywriting/' },
      { label: 'Web Design & Development', href: '/web-development/' },
      { label: 'eCommerce', href: '/web-development/ecommerce/' },
      { label: 'Web Hosting & Domains', href: '/web-development/web-hosting/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Our People', href: '/people/' },
      { label: 'Our Work', href: '/work/' },
      { label: 'Why One Partner', href: '/why-one-partner/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
    ],
  },
] as const;

/** Partner names. TODO [ACTION]: replace text wordmarks with licensed partner
 *  logo SVGs in /public/images/partners/ before launch (greyscale via CSS). */
export const PARTNERS = {
  all: ['Microsoft', 'Google', 'Sophos', 'Ubiquiti UniFi', 'Adobe', 'Shopify'],
  it: ['Microsoft', 'Google', 'Sophos', 'Ubiquiti UniFi'],
  marketing: ['Google Partner', 'Google Ads', 'Google Analytics', 'Shopify'],
  web: ['Shopify', 'Google', 'Adobe', 'Microsoft'],
} as const;
