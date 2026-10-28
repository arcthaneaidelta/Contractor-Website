import { Client } from '../types';

export function generateSitemapXml(client: Client): string {
  const { config } = client;
  const canonical = config.seo.canonicalUrl || 'https://example-contractor.demo';
  const today = new Date().toISOString().split('T')[0];

  const urls: Array<{ loc: string; priority: string; changefreq: string }> = [
    { loc: `${canonical}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${canonical}/services`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${canonical}/work`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${canonical}/about`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${canonical}/service-areas`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${canonical}/contact`, priority: '0.8', changefreq: 'monthly' }
  ];

  // Dynamic Service routes
  config.services.forEach(s => {
    urls.push({
      loc: `${canonical}/services/${s.slug}`,
      priority: s.primary ? '0.85' : '0.80',
      changefreq: 'monthly'
    });
  });

  // Dynamic Service Area routes
  config.serviceAreas.forEach(a => {
    urls.push({
      loc: `${canonical}/service-areas/${a.slug}`,
      priority: '0.75',
      changefreq: 'monthly'
    });
  });

  const urlNodes = urls
    .map(
      u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;
}

export function generateRobotsTxt(client: Client): string {
  const canonical = client.config.seo.canonicalUrl || 'https://example-contractor.demo';
  return `# ContractorOS Production Robots Configuration
User-agent: *
Allow: /
Allow: /services/
Allow: /work/
Allow: /about/
Allow: /service-areas/
Allow: /contact/

# Prevent crawl waste on internal dev/draft preview query parameters
Disallow: /?preview=
Disallow: /*?token=*
Disallow: /workspace/

# Dynamic Sitemap Reference
Sitemap: ${canonical}/sitemap.xml
`;
}
