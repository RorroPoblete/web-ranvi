import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'

const LAST_UPDATED = new Date('2026-04-24')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '')

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/soluciones`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/nosotros`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/contacto`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/privacidad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/terminos`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return staticRoutes
}
