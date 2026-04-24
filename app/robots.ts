import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export default function robots(): MetadataRoute.Robots {
  const host = siteConfig.url.replace(/^https?:\/\//, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/_vercel/',
          '/static/',
          '/*.json$',
          '/*?*utm_',
          '/*?*ref=',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/_vercel/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/_vercel/'],
        crawlDelay: 5,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host,
  }
}
