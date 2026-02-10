import { SEO } from '@/seo/seo.config'

export function createMetadataGenerator(route: string) {
  return function generateMetadata() {
    const seoData = (SEO as Record<string, any>)[route] || {}

    const metadata = {
      title: seoData.title || 'Al Quran | Read the Quran',
      description: seoData.description || 'Just a simple Quran app.',
      keywords: seoData.keywords || [],
    }

    return metadata
  }
}

export const metadataGenerators = {
  home: createMetadataGenerator('/'),
  notFound: createMetadataGenerator('/*'),
  soruh: (data: any) => ({
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: data.alternates,
  }),
}
