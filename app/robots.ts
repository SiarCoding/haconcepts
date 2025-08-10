import { MetadataRoute } from 'next';

export const preferredRegion = ['fra1', 'dub1', 'arn1', 'cdg1'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/*',
          '/admin',
          '/private',
          '/drafts',
          '/_next/static/',
          '/_next/image/',
        ],
      },
    ],
    sitemap: 'https://nextmoveconsulting.de/sitemap.xml',
  };
} 