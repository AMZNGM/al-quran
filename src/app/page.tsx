import { Suspense } from 'react'
import { metadataGenerators } from '@/seo/seo-helpers'
import Loading from '@/components/shared/Loading'
import MainBgImage from '@/components/shared/MainBgImage'

import Hero from '@/components/Hero'

export const generateMetadata = metadataGenerators.home

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <MainBgImage />
      <Hero />
    </Suspense>
  )
}
