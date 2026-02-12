export const SEO = {
  '/': {
    title: 'Al Quran',
    description: 'Al Quran - Read the Quran',
    keywords: ['Al Quran', 'Quran', 'Read the Quran'],
  },

  '*': {
    title: 'Not found page | Al Quran',
    description: 'Sorry, the page you are looking for does not exist. Please check the URL and try again.',
    keywords: ['Al Quran', 'not found', 'page not found', 'error'],
  },
}

export const generatesoruhSEO = (soruh: any) => {
  const keywords = [
    soruh.name,
    soruh.tagline,
    'Al Quran',
    'Quran',
    ...(soruh.location?.city ? [soruh.location.city] : []),
    ...(soruh.location?.country ? [soruh.location.country] : []),
  ]

  return {
    title: `${soruh.name} - ${soruh.tagline}`,
    description: soruh.description || `${soruh.name} - Al Quran.`,
    keywords: keywords.filter(Boolean).join(', '),
  }
}
