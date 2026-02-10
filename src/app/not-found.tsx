import { metadataGenerators } from '@/seo/seo-helpers'

export const generateMetadata = metadataGenerators.notFound()

export default function NotFound() {
  return (
    <main className="relative w-dvw h-dvh bg-bg text-text p-4">
      <h1>not found page</h1>
    </main>
  )
}
