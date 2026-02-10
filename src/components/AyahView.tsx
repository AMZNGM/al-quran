'use client'

import { Verse } from '@quranjs/api'
import { motion } from 'framer-motion'

interface AyahViewProps {
  verses: Verse[]
  bismillahPre: boolean
}

export default function AyahView({ verses, bismillahPre }: AyahViewProps) {
  return (
    <div className="max-w-4xl min-h-[80vh] bg-white dark:bg-gray-900/50 shadow-xl backdrop-blur-sm border border-gray-100 dark:border-gray-800 rounded-3xl mx-auto p-8">
      {bismillahPre && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-amiri text-gray-800 dark:text-gray-200 text-4xl text-center mb-12"
        >
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </motion.div>
      )}

      <div className="space-y-2" dir="rtl">
        {verses.map((verse, index) => (
          <motion.div
            key={verse.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03, ease: 'easeOut' }}
            className="group relative hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 rounded-2xl transition-colors duration-300 p-4"
          >
            <div className="flex items-start gap-6 leading-loose">
              <span className="font-amiri font-bold text-emerald-500/80 text-xl mt-3 select-none">﴿{verse.verseNumber}﴾</span>
              <p className="flex-1 font-amiri text-gray-800 dark:text-gray-100 text-4xl text-justify leading-[2.5]">{verse.textUthmani}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
