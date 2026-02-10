import { QuranClient, Language } from '@quranjs/api'

// Using Pre-Production (Test) keys as provided
const CLIENT_ID = process.env.NEXT_PUBLIC_QURAN_CLIENT_ID || '5cf23c9d-1b76-4ef7-97f4-9678f7fd71ed'
const CLIENT_SECRET = process.env.NEXT_PUBLIC_QURAN_CLIENT_SECRET || 'F0kYGDEXV.rn~Q5avyWLEwBe_o'

export const quranClient = new QuranClient({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  defaults: {
    language: Language.ENGLISH, // We can make this configurable later
  },
})

export async function getSurahs() {
  return await quranClient.chapters.findAll()
}

export async function getAyahs(utils: { chapterId: number; limit?: number; offset?: number }) {
  // fetching verses for a specific chapter
  // We can add translations if needed
  const { chapterId, ...options } = utils
  return await quranClient.verses.findByChapter(chapterId as any, options)
}
