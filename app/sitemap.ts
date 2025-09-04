import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const preferredRegion = ['fra1', 'dub1', 'arn1', 'cdg1'];

// City mapping for static generation
const cities = {
  de: ['berlin', 'muenchen', 'hamburg'],
  at: ['wien'],
  ch: ['zuerich', 'genf']
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nextmove-digital.de';
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    // Main pages
    { url: `${base}`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    
    // Country hubs
    { url: `${base}/de`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/at`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ch`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Add city pages
  Object.entries(cities).forEach(([country, cityList]) => {
    cityList.forEach(city => {
      urls.push({
        url: `${base}/${country}/${city}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7
      });
    });
  });

  return urls;
} 