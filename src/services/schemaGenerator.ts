import { Client } from '../types';

export function generateLocalBusinessSchema(client: Client): string {
  const { config } = client;
  const canonical = config.seo.canonicalUrl || 'https://example-contractor.demo';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${canonical}#business`,
    name: config.business.name,
    description: config.business.description,
    url: canonical,
    telephone: config.business.phone,
    email: config.business.email,
    image: config.branding.heroImageUrl,
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.business.fullAddress,
      addressLocality: config.business.city,
      addressRegion: config.business.region,
      postalCode: config.business.postalCode,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.2672,
      longitude: -97.7431
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:30'
      }
    ],
    areaServed: config.serviceAreas.map(area => ({
      '@type': 'AdministrativeArea',
      name: area.name,
      description: area.description
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${config.business.name} Services`,
      itemListElement: config.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description
        },
        position: index + 1
      }))
    }
  };

  return JSON.stringify(schema, null, 2);
}
