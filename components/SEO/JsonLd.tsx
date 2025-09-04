import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, any>;
  id?: string;
}

export function JsonLd({ data, id = 'json-ld' }: JsonLdProps) {
  return (
    <Script 
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Predefined schemas for consistency
export const schemas = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NextMove Digital',
    url: 'https://nextmove-digital.de',
    logo: 'https://nextmove-digital.de/Logonextmove.webp',
    description: 'Performance Marketing und Lead-Generierung für Finanzberater und Immobilienmakler in der DACH-Region',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Papenstraße 23',
      addressLocality: 'Hamburg',
      postalCode: '22089',
      addressCountry: 'DE'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-179-5914490',
      contactType: 'sales',
      areaServed: ['DE', 'AT', 'CH'],
      availableLanguage: 'German'
    },
    sameAs: [
      'https://www.linkedin.com/company/nextmove-digital',
      'https://www.facebook.com/nextmove-digital',
      'https://www.instagram.com/nextmove_digital'
    ]
  },

  service: (city: string, country: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Lead-Generierung für Finanzberater und Immobilienmakler in ${city}`,
    description: `Professionelle Lead-Generierung und Performance Marketing für Finanzberater und Immobilienmakler in ${city}. Qualifizierte Leads ohne hohe Werbekosten.`,
    provider: {
      '@type': 'Organization',
      name: 'NextMove Digital'
    },
    areaServed: {
      '@type': 'City',
      name: city,
      addressCountry: country.toUpperCase()
    },
    serviceType: [
      'Lead-Generierung',
      'Performance Marketing',
      'Social Media Marketing',
      'Kundenakquise'
    ]
  }),

  faqPage: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }),

  breadcrumbList: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  })
};
