import { getSurahs } from '@/lib/quran-api'
import SurahList from '@/components/SurahList'
import { Suspense } from 'react'

export default async function Home() {
  const chapters = await getSurahs()

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="mx-auto px-4 py-12 container">
        <header className="text-center mb-12">
          <h1 className="bg-clip-text bg-linear-to-r from-emerald-600 dark:from-emerald-400 to-teal-500 dark:to-teal-300 font-black text-transparent text-6xl tracking-tight mb-4">
            AL QURAN
          </h1>
          <p className="font-light text-gray-600 dark:text-gray-400 text-xl tracking-wide">Read, Listen, and Reflect</p>
        </header>

        <Suspense fallback={<div className="text-emerald-500 text-center py-20">Loading Surahs...</div>}>
          <SurahList chapters={chapters} />
        </Suspense>
      </div>
    </main>
  )
}
