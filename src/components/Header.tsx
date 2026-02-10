'use client'

import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function Header() {
  return (
    <header className="top-0 right-0 left-0 z-50 fixed bg-white/80 dark:bg-black/80 backdrop-blur-md border-gray-100 dark:border-gray-800 border-b transition-colors px-6 py-4">
      <div className="flex justify-between items-center mx-auto container">
        <Link href="/" className="hover:opacity-80 font-amiri font-bold text-emerald-600 dark:text-emerald-400 text-xl transition-opacity">
          AL QURAN
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
