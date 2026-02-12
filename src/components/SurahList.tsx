import Link from 'next/link'
import AnimText from '@/components/ui/unstyled/AnimText'
import AnimIn from '@/components/ui/unstyled/AnimIn'
import { Chapter } from '@quranjs/api'

export default function SurahList({ chapters }: { chapters: Chapter[] }) {
  return (
    <section className="relative w-full h-full text-text">
      {chapters.map((chapter, index) => (
        <AnimIn blur spring key={index} className="hover:bg-text/15 rounded-xl transition-colors">
          <Link href={`/surah/${chapter.id}`} className="flex justify-between items-center border-b px-2">
            <div className="flex justify-center items-center gap-4">
              <AnimText as={'span'} className="font-num text-6xl leading-0 pb-3">
                {chapter.id}
              </AnimText>

              <AnimText as={'p'} className="font-mid text-2xl">
                {chapter.nameArabic}
              </AnimText>
            </div>

            <AnimText as={'p'} className="font-kufi text-xs">
              <span className="px-1">{chapter.versesCount}</span>
              <span>آية</span>
            </AnimText>
          </Link>
        </AnimIn>
      ))}
    </section>
  )
}
