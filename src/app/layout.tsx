import './globals.css'
import localFont from 'next/font/local'
import AppWrapper from '@/components/app-components/AppWrapper'

const fontMain = localFont({
  src: '../fonts/norm.ttf',
  variable: '--font-main',
})

const fontMid = localFont({
  src: '../fonts/mid.ttf',
  variable: '--font-mid',
})

const fontKufi = localFont({
  src: '../fonts/kufi.ttf',
  variable: '--font-kufi',
})

const fontIcons = localFont({
  src: '../fonts/icons.ttf',
  variable: '--font-icons',
})

const fontNum = localFont({
  src: '../../public/fonts/num.ttf',
  variable: '--font-num',
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
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${fontMain.variable} ${fontKufi.variable} ${fontMid.variable} ${fontIcons.variable} ${fontNum.variable}`}
    >
      <body className="relative w-dvw h-dvh bg-bg selection:bg-main/75 font-main text-text selection:text-text antialiased md:subpixel-antialiased scroll-smooth">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
