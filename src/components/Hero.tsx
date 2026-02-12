import dynamic from 'next/dynamic'
import { getSurahs } from '@/lib/quran-api'
import AnimIn from '@/components/ui/unstyled/AnimIn'

const SurahList = dynamic(() => import('@/components/SurahList'))

export default async function Hero() {
  const chapters = await getSurahs()

  return (
    <section className="relative w-full h-full overflow-hidden bg-bg text-text p-4 max-md:p-2">
      <div className="z-10 relative w-full h-full flex flex-col bg-bg/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl rounded-lg">
        <AnimIn center blur as={'h1'} className="shadow-xl font-kufi text-4xl text-center py-6">
          الْقُرْآنُ الْكَرِيمُ
        </AnimIn>

        <div data-lenis-prevent className="min-h-0 overflow-y-auto flex-1 p-4 pointer-events-auto">
          <SurahList chapters={chapters} />
        </div>
      </div>
    </section>
  )
}
