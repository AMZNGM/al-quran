import './globals.css'
import { Cairo, Amiri } from 'next/font/google'
import AppWrapper from '@/components/app-components/AppWrapper'

const fontArab = Cairo({
  subsets: ['latin'],
  variable: '--font-arab',
  display: 'swap',
})

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Al Quran | Read the Quran',
  description: 'Al Quran is a simple Quran app.',
  keywords: ['Al Quran', 'Quran', 'Read the Quran', 'quran', 'read quran', 'quran app'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontArab.variable} ${amiri.variable}`}>
      <body
        suppressHydrationWarning
        className="relative w-full h-full bg-bg selection:bg-main/75 font-arab text-text selection:text-text antialiased md:subpixel-antialiased uppercase scroll-smooth"
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
