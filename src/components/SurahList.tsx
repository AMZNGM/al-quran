'use client'

import Link from 'next/link'
import { Chapter } from '@quranjs/api'
import { motion } from 'framer-motion'

interface SurahListProps {
  chapters: Chapter[]
}

export default function SurahList({ chapters }: SurahListProps) {
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {chapters.map((chapter, index) => (
        <motion.div key={chapter.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
          <Link
            href={`/surah/${chapter.id}`}
            className="block bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/50 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-800 rounded-2xl transition-colors p-6"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="group w-12 h-12 flex justify-center items-center bg-emerald-50 dark:bg-emerald-900/20 rounded-xl font-bold text-emerald-600 dark:text-emerald-400 rotate-45">
                  <span className="-rotate-45">{chapter.id}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{chapter.nameSimple}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{chapter.translatedName.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-amiri text-gray-800 dark:text-gray-200 text-2xl">{chapter.nameArabic}</p>
                <p className="text-gray-400 text-xs mt-1">{chapter.versesCount} Ayahs</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
