import { getAyahs, quranClient, getChapter } from '@/lib/quran-api'
import AyahView from '@/components/AyahView'
import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

// Generate static params for all 114 surahs to enable static export
export async function generateStaticParams() {
  const chapters = await quranClient.chapters.findAll()
  return chapters.map((chapter) => ({
    id: chapter.id.toString(),
  }))
}

export default async function SurahPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const chapterId = parseInt(id)

  // Parallel data fetching
  const [verses, chapterInfo] = await Promise.all([
    getAyahs({ chapterId, limit: 300 }), // Get all verses (limit increased)
    // quranClient.chapters.findById(chapterId as any),
    getChapter(chapterId as any),
  ])

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 p-6">
      <div className="max-w-5xl mx-auto container">
        <nav className="flex items-center gap-4 mb-8">
          <Link href="/" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline transition-all">
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Surahs
          </Link>
        </nav>

        <header className="text-center mb-12">
          <h1 className="font-amiri text-5xl mb-2">{chapterInfo.nameArabic}</h1>
          <p className="text-gray-500 text-xl">
            {chapterInfo.nameSimple} • {chapterInfo.translatedName.name}
          </p>
        </header>

        <Suspense fallback={<div className="text-center">Loading Ayahs...</div>}>
          <AyahView verses={verses} bismillahPre={chapterInfo.bismillahPre} />
        </Suspense>
      </div>
    </main>
  )
}
